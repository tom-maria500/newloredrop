import React, { useState, useEffect } from "react";
import { ReactSketchCanvas } from "react-sketch-canvas";
import { uploadData } from "aws-amplify/storage";
import { generateClient } from 'aws-amplify/api';
import { updateSubmission } from '../graphql/mutations';
import { listSubmissions, listPlayers } from "../graphql/queries";
import StoryScorer from './StoryScorer'; 
import "../styles/DrawingCanvas.css";

const DrawingCanvas = ({ gameId, playerUsername, themes, onSubmit }) => {
  const [strokeColor, setStrokeColor] = useState("#000000");
  const [showSuccessAlert, setShowSuccessAlert] = useState(false);
  const [showStoryScorer, setShowStoryScorer] = useState(false);
  const [transcript, setTranscript] = useState(null);
  const [currentPlayerID, setCurrentPlayerID] = useState(null);
  const canvasRef = React.useRef(null);
  const client = generateClient();

  useEffect(() => {
    const fetchPlayers = async () => {
      try {
        const response = await client.graphql({
          query: listPlayers,
          variables: { filter: { gameID: { eq: gameId } } },
        });
  
        const playerData = response.data.listPlayers.items;
  
        const currentPlayer = playerData.find(player => player.username === playerUsername);
        if (currentPlayer) {
          setCurrentPlayerID(currentPlayer.id);
        } else {
          console.warn("Player not found with the provided username.");
        }
      } catch (error) {
        console.error("Error fetching players:", error);
      }
    };
  
    fetchPlayers();
  }, [gameId, client, playerUsername]);
  
  const colors = [
    { color: "#FF6F61" },
    { color: "#FFB74D" },
    { color: "#4CAF50" },
    { color: "#2196F3" },
    { color: "#9C27B0" },
    { color: "#FFFFFF" },
    { color: "#000000" },
  ];

  const changeColor = (color) => {
    setStrokeColor(color);
  };

  const clearCanvas = () => {
    canvasRef.current.clearCanvas();
  };

  const undoLastStroke = () => {
    canvasRef.current.undo();
  };

  const saveCanvasAsPng = async () => {
    try {
      const fileName = `${Date.now()}_${playerUsername}_drawing.png`;
      const uploadPath = `drawings/${fileName}`;

      const base64DataUrl = await canvasRef.current.exportImage("png");

      const base64ToBlob = (base64Data) => {
        const byteString = atob(base64Data.split(",")[1]);
        const mimeString = base64Data.split(",")[0].split(":")[1].split(";")[0];

        const arrayBuffer = new ArrayBuffer(byteString.length);
        const uint8Array = new Uint8Array(arrayBuffer);

        for (let i = 0; i < byteString.length; i++) {
          uint8Array[i] = byteString.charCodeAt(i);
        }

        return new Blob([uint8Array], { type: mimeString });
      };

      const blob = base64ToBlob(base64DataUrl);

      const file = new File([blob], fileName, { type: "image/png" });

      const result = await uploadData({
        key: uploadPath,
        data: file,
        options: {
          contentType: "image/png",
          accessLevel: "public",
        },
      }).result;

      const drawingKey = result.key;

      const { data } = await client.graphql({
        query: listSubmissions,
        variables: { filter: { playerID: { eq: playerUsername } } }
      });
      const submissionID = data.listSubmissions.items[0].id;
      const storyTranscript = data.listSubmissions.items[0].transcript;
      setTranscript(storyTranscript);

      await client.graphql({
        query: updateSubmission,
        variables: {
          input: {
            id: submissionID,
            drawingKey: drawingKey
          }
        }
      });

      setShowSuccessAlert(true);
      onSubmit(); // Call the onSubmit prop after successful submission
    } catch (error) {
      console.error("Error uploading to S3 or updating submission:", error);
    }
  };

  const closeAlert = () => {
    setShowSuccessAlert(false);
    setShowStoryScorer(true);
  };

  const closeStoryScorer = () => {
    setShowStoryScorer(false);
  };

  return (
    <div className="drawing-canvas-container">
      <ReactSketchCanvas
        ref={canvasRef}
        style={{ border: "1px solid black", width: "800px", height: "600px" }}
        strokeWidth={5}
        strokeColor={strokeColor}
        canvasColor="var(--amplify-colors-neutral-100)"
      />
      <div className="canvas-controls">
        <div className="color-buttons">
          {colors.map(({ color }) => (
            <button
              key={color}
              onClick={() => changeColor(color)}
              className="color-circle"
              style={{
                backgroundColor: color,
              }}
            ></button>
          ))}
        </div>
        <div className="control-buttons">
          <button onClick={undoLastStroke} className="control-button-undo">
            Undo
          </button>
          <button onClick={clearCanvas} className="control-button-clear">
            Clear
          </button>
          <button onClick={saveCanvasAsPng} className="control-button-submit">
            Submit
          </button>
        </div>
      </div>

      {showSuccessAlert && (
        <div className="alert-overlay">
          <div className="alert-box">
            <h3>Success!</h3>
            <p>Your drawing has been saved successfully.</p>
            <button onClick={closeAlert} className="alert-close-button">
              View Lore Score
            </button>
          </div>
        </div>
      )}

      {showStoryScorer && (
        <StoryScorer
          isOpen={showStoryScorer}
          onClose={closeStoryScorer}
          transcript={transcript}
          playerID={currentPlayerID}
          themes={themes}
        />
      )}
    </div>
  );
};

export default DrawingCanvas;
