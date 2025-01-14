import React, { useState } from "react";
import OpenAI from "openai";
import { generateClient } from "aws-amplify/api";
import { updatePlayer as updatePlayerMutation } from "../graphql/mutations"; 
import "../styles/StoryScorer.css";

const client = generateClient();

const openai = new OpenAI({
  apiKey: "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",
  dangerouslyAllowBrowser: true,
});

const StoryScorer = ({ isOpen, onClose, transcript, playerID, themes }) => {
  const [scores, setScores] = useState(null);
  const [loading, setLoading] = useState(false); 

  const scoreStory = async () => {
    setLoading(true);
    try {
      const response = await openai.chat.completions.create({
        model: "gpt-4",
        messages: [
          { role: "system", content: "You are a literary critic tasked with evaluating story transcripts." },
          { role: "user", content: `Score the following story transcript on a scale of 1-10 for creativity and inclusion of the themes: ${themes}. Lower the score if all themes are not included and award a higher score if the story transcript includes most or all of themes. Provide a one sentence explanation for each score.\n\n${transcript}` }
        ],
        functions: [
          {
            name: "score_story",
            description: "Score a story transcript based on creativity and theme usage",
            parameters: {
              type: "object",
              properties: {
                creativity_score: { type: "number", description: "Score for creativity (1-10)" },
                theme_usage_score: { type: "number", description: "Score for theme usage (1-10)" },
                creativity_explanation: { type: "string", description: "Explanation for creativity score" },
                theme_usage_explanation: { type: "string", description: "Explanation for theme usage score" }
              },
              required: ["creativity_score", "theme_usage_score", "creativity_explanation", "theme_usage_explanation"]
            }
          }
        ],
        function_call: { name: "score_story" }
      });

      // Parse the result directly from response
      const result = JSON.parse(response.choices[0].message.function_call.arguments);
      setScores(result); // Set scores in state

      // Update player points using the scores directly
      await updatePlayerPoints(result.creativity_score, result.theme_usage_score);
      
    } catch (error) {
      console.error("Error scoring story:", error);
    } finally {
      setLoading(false); // Ensure loading state is reset
    }
  };

  const updatePlayerPoints = async (creativityScore, themeUsageScore) => {
    const totalScore = creativityScore + themeUsageScore;
  
    try {
      // Step 1: Fetch the current player to ensure valid fields
      const fetchResponse = await client.graphql({
        query: `query GetPlayer($id: ID!) {
          getPlayer(id: $id) {
            id
            username
            gameID
            points
          }
        }`,
        variables: { id: playerID },
      });
  
      const player = fetchResponse.data.getPlayer;
  
      if (!player) {
        console.error("Player not found.");
        return;
      }
  
      // Step 2: Perform the update
      const updateResponse = await client.graphql({
        query: updatePlayerMutation,
        variables: {
          input: {
            id: playerID,
            points: totalScore, // Update points
          },
        },
      });
  
      console.log("Update Player Response:", updateResponse);
  
      if (updateResponse.data.updatePlayer) {
        console.log("Player points updated successfully.");
      } else {
        console.log("Failed to update player points.");
      }
    } catch (error) {
      console.error("Error updating player points:", error);
      console.log("An error occurred while updating player points.");
    }
  };  

  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal">
        <button onClick={onClose} className="close-modal-button">
          X
        </button>
        <h2 className="story-scorer-title">Lore Points </h2>
        <button onClick={scoreStory} className="score-button" disabled={loading || !transcript}>
          {loading ? "Scoring..." : "Score"}
        </button>
        {scores && (
          <div className="scores-container">
            <p><strong>Creativity:</strong> {scores.creativity_score}/10</p>
            <p>{scores.creativity_explanation}</p>
            <p><strong>Theme Usage:</strong> {scores.theme_usage_score}/10</p>
            <p>{scores.theme_usage_explanation}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default StoryScorer;