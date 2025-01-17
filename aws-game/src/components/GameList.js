import React, { useState, useEffect } from "react";
import { generateClient } from "aws-amplify/api";
import { listGames, listPlayers, listCards } from "../graphql/queries";
import {
  createGame as createGameMutation,
  createPlayer as createPlayerMutation,
  updateCard as updateCardMutation
} from "../graphql/mutations";
import { onCreateGame } from "../graphql/subscriptions";
import "../styles/GameList.css";

const client = generateClient();

const GameList = ({ username, openGameBoard }) => {
  const [games, setGames] = useState([]);
  const [newGameName, setNewGameName] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchGames = async () => {
      try {
        const gameData = await client.graphql({ query: listGames });
        setGames(gameData.data.listGames.items);
      } catch (error) {
        console.error("Error fetching games:", error);
        setError("Failed to load games.");
      }
    };

    fetchGames();

    const subscription = client.graphql({ query: onCreateGame }).subscribe({
      next: ({ value }) => {
        const newGame = value?.data?.onCreateGame;
        if (newGame) {
          setGames((prevGames) => [...prevGames, newGame]);
        }
      },
      error: (error) => console.error("Subscription error:", error),
    });

    return () => subscription.unsubscribe();
  }, []);

    const fetchGames = async () => {
        try {
            const gameData = await client.graphql({ query: listGames });
            setGames(gameData.data.listGames.items);
        } catch (error) {
            console.error("Error fetching games:", error);
            setError("Failed to load games.");
        }
    };

  const createGame = async () => {
    if (!newGameName.trim()) {
        alert("Please enter a game name.");
        return;
    }

    try {
        setLoading(true);

        // Step 1: Query existing cards by category
        const cardsResponse = await client.graphql({
            query: listCards,
            variables: {
                filter: {
                    or: [
                        { category: { eq: "setting" } },
                        { category: { eq: "plotTwist" } },
                        { category: { eq: "character" } }
                    ]
                }
            }
        });

        const cardsByCategory = cardsResponse.data.listCards.items.reduce((acc, card) => {
            if (!acc[card.category]) {
                acc[card.category] = [];
            }
            acc[card.category].push(card);
            return acc;
        }, {});

        // Step 2: Randomly select one card from each category
        const selectedCards = ['setting', 'plotTwist', 'character'].map(category => {
            const categoryCards = cardsByCategory[category] || [];
            return categoryCards[Math.floor(Math.random() * categoryCards.length)];
        });

        // Step 3: Create the new game
        const newGameInput = {
            name: newGameName,
            creator: username,
        };

        const newGameResponse = await client.graphql({
            query: createGameMutation,
            variables: { input: newGameInput },
        });

        const newGame = newGameResponse.data.createGame;

        // Step 4: Update each selected card to associate it with the new game
        await Promise.all(selectedCards.map(card => 
            client.graphql({
                query: updateCardMutation,
                variables: { 
                    input: { 
                        id: card.id,
                        gameID: newGame.id, // Associate with new game's ID
                        flipped: false // Keep the original flipped state
                    } 
                },
            })
        ));

    await fetchGames(); // Fetch the updated list of games
    setNewGameName(""); // Clear the input field
    } catch (error) {
        console.error("Error creating game:", error);
        setError("Failed to create game.");
    } finally {
        setLoading(false);
    }
};

const joinGame = async (gameID, gameName) => {
  try {
    console.log("Attempting to join game with ID:", gameID);
    const themes = await fetchCardDataAndSetThemes(gameID);
    // Step 1: Check if the player already exists in the game
    const playersResponse = await client.graphql({
      query: listPlayers,
      variables: { filter: { gameID: { eq: gameID }, username: { eq: username } } },
    });
    
    console.log("Players Response:", playersResponse);

    const existingPlayers = playersResponse.data.listPlayers.items || [];

    if (existingPlayers.length > 0) {
      console.log("Player already exists in the game.");
      openGameBoard(gameID, gameName, themes);
      return;
    }

    // Step 2: Create a new player
    const newPlayerInput = {
      username,
      gameID,
    };

    console.log("Creating new player with input:", newPlayerInput);

    const createPlayerResponse = await client.graphql({
      query: createPlayerMutation,
      variables: { input: newPlayerInput },
    });

    console.log("Create Player Response:", createPlayerResponse);

    const newPlayer = createPlayerResponse.data.createPlayer;

    if (newPlayer) {
      console.log("Player successfully joined the game.");
      openGameBoard(gameID, gameName, themes);
    } else {
      throw new Error("Failed to create player");
    }
  } catch (error) {
    console.error("Error joining game:", error);
    setError("Failed to join game.");
  }
};

const fetchCardDataAndSetThemes = async (gameId) => {
  try {
    const cardsResponse = await client.graphql({
      query: listCards,
      variables: { filter: { gameID: { eq: gameId } } },
    });

    const cardData = cardsResponse.data.listCards.items;
    const themes = cardData.map((card) => card.content).join(", ");
    console.log("Themes set to:", themes); // Debugging: log themes
    return themes; // Return the fetched themes
  } catch (error) {
    console.error("Error fetching card data and setting themes:", error);
    return ""; // Return empty string if there's an error
  }
};

  return (
    <main>
      <div className="game-container">
        <h1>Available Games</h1>
        {error && <p className="error">{error}</p>}
        <div>
          <input
            type="text"
            placeholder="Enter game name"
            value={newGameName}
            onChange={(e) => setNewGameName(e.target.value)}
            className="create-game-input"
            disabled={loading}
          />
          <button
            onClick={createGame}
            className="create-game-button"
            disabled={loading || !newGameName.trim()}
          >
            Create Game
          </button>
        </div>
        <ul style={{ listStyle: "none", padding: 0 }}>
          {games.length > 0 ? (
            games.map((game) => (
                <li key={game.id} className="record-section">
                <span className="game-name">
                    <strong>{game.name}</strong> (Created by: {game.creator})
                </span>
                <button
                    onClick={() => joinGame(game.id, game.name)}
                    className="game-button"
                    disabled={loading}
                >
                    Join
                </button>
                </li>
            ))
            ) : (
            <p style={{ color: 'white' }}>No games available. Create one to get started!</p>
            )}
        </ul>
      </div>
    </main>
  );
};

export default GameList;