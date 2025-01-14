import React, { useEffect, useState } from "react";
import { listPlayers } from "../graphql/queries";
import { updatePlayer } from "../graphql/mutations";
import Gallery from "./Gallery";
import "../styles/Leaderboard.css";

const Leaderboard = ({ gameId, client }) => {
  const [players, setPlayers] = useState([]);
  const [selectedPlayerKey, setSelectedPlayerKey] = useState(null);
  const [selectedPlayer, setSelectedPlayer] = useState(null);
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);

  useEffect(() => {
    const fetchPlayerData = async () => {
      try {
        const playersResponse = await client.graphql({
          query: listPlayers,
          variables: { filter: { gameID: { eq: gameId } } },
        });

        const playerData = playersResponse.data.listPlayers.items;

        const updatedPlayers = await Promise.all(
          playerData.map(async (player) => {
            if (player.points === null || player.points === undefined) {
              await client.graphql({
                query: updatePlayer,
                variables: {
                  input: {
                    id: player.id,
                    points: 0,
                  },
                },
              });
              return { ...player, points: 0 };
            }
            return player;
          })
        );
        setPlayers(updatedPlayers);
      } catch (error) {
        console.error("Error fetching player data:", error);
      }
    };

    fetchPlayerData();
  }, [gameId, client]);

  const sortedPlayers = [...players].sort((a, b) => b.points - a.points);

  const openGallery = (drawingKey, player) => {
    setSelectedPlayerKey(drawingKey);
    setSelectedPlayer(player);
    setIsGalleryOpen(true);
  };

  const closeGallery = () => {
    setSelectedPlayerKey(null);
    setSelectedPlayer(null);
    setIsGalleryOpen(false);
  };

  return (
  <div className="leaderboard-container">
    <h2 className="leaderboard-title">Leaderboard</h2>
    <table className="leaderboard-table">
      <tbody>
        {sortedPlayers.map((player, index) => (
          <tr
          key={player.id}
          className="leader-list"
          onClick={() => openGallery("public/drawings/1736838684169_drawing.png", player)}
          >
            <td>{index + 1}</td>
            <td>{player.username}</td>
            <td>{player.points}</td>
            </tr>
          ))}
          </tbody>
          </table>
          <Gallery
          isOpen={isGalleryOpen}
          onClose={closeGallery}
          drawingKey={selectedPlayerKey}
          playerID={selectedPlayer ? selectedPlayer.username : ''}
          />
          </div>
  );
};

export default Leaderboard;