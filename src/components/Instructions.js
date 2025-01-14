import React from "react";
import "../styles/Instructions.css";

const Instructions = ({ onBack }) => {
  return (
    <div className="instructions-container">
      <h1 className="instructions-title">Game Instructions</h1>
      <div className="instructions-content">
        <ol>
          <li>
            Select a game from the list or create a new game to get started.
          </li>
          <li>
            Flip the cards to reveal prompts for setting, character, and plot twists. Remember, the timer starts when you flip!
          </li>
          <li>
            Use the prompts to create and record your story. Then, draw a picture for your story on the canvas.
          </li>
          <li>
            Submit your recording and drawing before the time stops to score lore points.
          </li>
          <li>
            View everyone's lores in the gallery. Good luck 😄
          </li>
        </ol>
      </div>
      <button onClick={onBack} className="instructions-back-button">
        PLAY
      </button>
    </div>
  );
};

export default Instructions;
