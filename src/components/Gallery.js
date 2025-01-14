import React, { useState, useEffect } from "react";
import { getUrl, list } from "aws-amplify/storage";
import "../styles/Gallery.css";

const Gallery = ({ isOpen, onClose, playerID }) => {
  const [recordings, setRecordings] = useState([]);
  const [drawings, setDrawings] = useState([]);
  console.log("player id:", playerID);

  useEffect(() => {
    const fetchMedia = async () => {
      try {
        const { items } = await list({
          options: {
            accessLevel: 'public',
          },
        });

        const playerRecordings = items.filter(item => 
          item.key.startsWith('recordings/') && item.key.includes(`_${playerID}_recording.wav`)
        );

        const playerDrawings = items.filter(item => 
          item.key.startsWith('drawings/') && item.key.includes(`_${playerID}_drawing.png`)
        );

        const getUrls = async (items) => {
          return Promise.all(
            items.map(async (item) => {
              const { url } = await getUrl({
                key: item.key,
                options: {
                  accessLevel: 'public',
                  expiresIn: 3600,
                },
              });
              return { key: item.key, url };
            })
          );
        };

        const recordingUrls = await getUrls(playerRecordings);
        const drawingUrls = await getUrls(playerDrawings);

        setRecordings(recordingUrls);
        setDrawings(drawingUrls);
      } catch (error) {
        console.error("Error fetching media:", error);
      }
    };

    if (playerID && isOpen) {
      fetchMedia();
    }
  }, [playerID, isOpen]);

  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal">
        <button onClick={onClose} className="close-modal-button">
          X
        </button>
        <h2 className="gallery-title">{playerID}'s Gallery</h2>
        <h3>Stories</h3>
        {recordings.length > 0 ? (
          <div className="recordings-container">
            {recordings.map((recording) => (
              <div key={recording.key} className="recording-item">
                <audio controls src={recording.url}></audio>
              </div>
            ))}
          </div>
        ) : (
          <p>No stories found.</p>
        )}
        <h3>Drawings</h3>
        {drawings.length > 0 ? (
          <div className="drawings-container">
            {drawings.map((drawing) => (
              <div key={drawing.key} className="drawing-item">
                <img src={drawing.url} alt="Player drawing" />
              </div>
            ))}
          </div>
        ) : (
          <p>No drawings found.</p>
        )}
      </div>
    </div>
  );
};

export default Gallery;