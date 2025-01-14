import React, { useState, useEffect } from "react";
import { Amplify } from "aws-amplify";
import awsconfig from "./aws-exports";
import { fetchUserAttributes } from 'aws-amplify/auth';
import { withAuthenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import GameList from "./components/GameList";
import GameBoard from "./components/GameBoard";
import Instructions from "./components/Instructions";
import "./App.css";

Amplify.configure(awsconfig);

const App = ({ signOut, user }) => {
  const [currentScreen, setCurrentScreen] = useState("LandingPage"); // Start with the landing page
  const [currentGameId, setCurrentGameId] = useState(null);
  const [username, setUsername] = useState(null);
  const [currentGameName, setCurrentGameName] = useState(null);
  const [currentThemes, setCurrentThemes] = useState(null);

  useEffect(() => {
    async function fetchUsername() {
      try {
        const attributes = await fetchUserAttributes();
        const preferredUsername = attributes.preferred_username;
        setUsername(preferredUsername);
      } catch (error) {
        console.error('Error fetching user attributes:', error);
        setUsername(null);
      }
    }

    fetchUsername();
  }, []);

  // Navigate to the GameList screen
  const goToGameList = () => {
    setCurrentScreen("GameList");
  };

  const goToInstructions = () => {
    setCurrentScreen("Instructions");
  };

  const backToHome = () => {
    setCurrentScreen("LandingPage");
  };

  // Switch to the GameBoard screen
  const openGameBoard = (gameId, gameName, selectedThemes) => {
    setCurrentGameId(gameId);
    setCurrentGameName(gameName);
    setCurrentThemes(selectedThemes);
    setCurrentScreen("GameBoard");
    console.log("opengameboard: ", gameId, gameName, username);
  };

  // Return to the GameList screen
  const backToGameList = () => {
    setCurrentGameId(null);
    setCurrentScreen("GameList");
  };

  return (
    <div>
      <header>
        <button onClick={backToHome}> Back to Home </button>
      </header>
      <main>
      {currentScreen === "LandingPage" && (
      <div className="landing-container">
        <h1>new lore drop</h1>
        <div className="button-container">
          <button className="menu-button" onClick={goToGameList}>
            new game
          </button>
          <button className="menu-button" onClick={goToInstructions}>
            instructions
          </button>
          <button className="menu-button" onClick={signOut}>
            sign out
          </button>
        </div>
      </div>
)}
        {currentScreen === "GameList" && (
          <GameList
            username={username} // Pass the user's username to GameList
            openGameBoard={openGameBoard} // Pass the function to open the game board
          />
        )}
        
        {currentScreen === "GameBoard" && (
          <GameBoard
            gameId={currentGameId} // Pass the current game ID to GameBoard
            gameName={currentGameName} // Pass the game name to GameBoard
            username={username}
            themes={currentThemes}
            onBack={backToGameList} // Pass the function to go back to GameList
          />
        )}
        {currentScreen === "Instructions" && (
        <Instructions onBack={goToGameList} />
      )}
      </main>
    </div>
  );
};

export default withAuthenticator(App);