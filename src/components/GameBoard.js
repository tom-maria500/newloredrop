import React, { useState, useEffect, useRef } from "react";
import { generateClient } from "aws-amplify/api";
import Leaderboard from "./Leaderboard";
import DrawingCanvas from "./DrawingCanvas";
import CardComponent from "./CardComponent";
import AudioComponent from "./AudioComponent";
import "../styles/GameBoard.css";

const client = generateClient();

const GameBoard = ({ gameId, gameName, username, themes, onBack }) => {
  const [isLeaderboardOpen, setIsLeaderboardOpen] = useState(false);
  const [timerActive, setTimerActive] = useState(false);
  const [drawingSubmitted, setDrawingSubmitted] = useState(false);
  const [audioSubmitted, setAudioSubmitted] = useState(false);
  const cardComponentRef = useRef();

  useEffect(() => {
    setTimerActive(true);
  }, []);

  useEffect(() => {
    if (drawingSubmitted && audioSubmitted) {
      cardComponentRef.current.stopTimer();
    }
  }, [drawingSubmitted, audioSubmitted]);

  const openLeaderboard = () => {
    setIsLeaderboardOpen(true);
  };

  const closeLeaderboard = () => {
    setIsLeaderboardOpen(false);
  };

  const handleDrawingSubmit = () => {
    setDrawingSubmitted(true);
  };

  const handleAudioSubmit = () => {
    setAudioSubmitted(true);
  };

  return (
    <div>
      <h1 className="gameboard-title">Welcome to {gameName}, {username}! </h1>
      <button onClick={onBack} className="back-button">
        Back to Games
      </button>
      <button onClick={openLeaderboard} className="info-button">
        View Leaderboard
      </button>
      
      {isLeaderboardOpen && (
        <div className="modal-overlay">
          <div className="leaderboard-modal">
            <button onClick={closeLeaderboard} className="close-modal-button">
              X
            </button>
            <Leaderboard gameId={gameId} client={client} />
          </div>
        </div>
      )}

      <CardComponent 
        gameId={gameId} 
        client={client} 
        ref={cardComponentRef}
        timerActive={timerActive}
      />
      <AudioComponent 
        gameId={gameId} 
        client={client} 
        playerId={username} 
        onSubmit={handleAudioSubmit}
      />
      <DrawingCanvas 
        gameId={gameId} 
        playerUsername={username} 
        themes={themes}
        onSubmit={handleDrawingSubmit}
      />
    </div>
  );
};

export default GameBoard;
