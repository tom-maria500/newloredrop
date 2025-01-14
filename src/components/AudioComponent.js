import React, { useState, useEffect } from "react";
import { useReactMediaRecorder } from "react-media-recorder";
import { uploadData } from "aws-amplify/storage";
import { generateClient } from "aws-amplify/api";
import * as mutations from "../graphql/mutations";
import "../styles/AudioComponent.css";

const client = generateClient();

const AudioComponent = ({ gameId, playerId, userId, onSubmit }) => {
  const [mediaBlobUrl, setMediaBlobUrl] = useState(null);
  const [transcript, setTranscript] = useState("");
  const [statusMessage, setStatusMessage] = useState("");
  const [audioKey, setAudioKey] = useState(null);

  useEffect(() => {
    console.log("Audio Key:", audioKey);
    console.log("Transcript:", transcript);
  }, [audioKey, transcript]);

  const { status, startRecording, stopRecording, clearBlobUrl } =
    useReactMediaRecorder({
      audio: true,
      onStop: async (blobUrl, blob) => {
        setMediaBlobUrl(blobUrl);
        await handleAudioUpload(blob);
      },
    });

  const handleAudioUpload = async (audioBlob) => {
    try {
      const fileName = `${Date.now()}_${playerId}_recording.wav`;
      const uploadPath = `recordings/${fileName}`;
    
      setStatusMessage("Uploading audio...");
    
      const uploadResult = await uploadData({
        key: uploadPath,
        data: audioBlob,
        options: { contentType: "audio/wav" },
      }).result;
    
      const uploadedAudioKey = uploadResult.key;
      setAudioKey(uploadedAudioKey);
    
      if(uploadedAudioKey) {
        setStatusMessage("Audio uploaded! Processing transcript...");
      }
      await processTranscription(audioBlob);

    } catch (error) {
      console.error("Error uploading audio:", error);
      setStatusMessage("Error uploading audio. Please try again.");
    }
  };
    
  const processTranscription = async (audioBlob) => {
    try {
      if (!("SpeechRecognition" in window || "webkitSpeechRecognition" in window)) {
        setStatusMessage("Speech recognition is not supported in this browser.");
        return;
      }
  
      const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
      recognition.continuous = false;
      recognition.interimResults = false;
  
      return new Promise((resolve, reject) => {
        recognition.onresult = (event) => {
          const fullTranscript = event.results[0][0].transcript;
          setTranscript(fullTranscript);
          resolve();
        };
  
        recognition.onerror = (error) => {
          console.error("Error during transcription:", error);
          setStatusMessage("Error during transcription. Please try again.");
          reject(error);
        };
  
        recognition.onend = () => {
          setStatusMessage("Transcription complete!");
          resolve();
        };
  
        const audioUrl = URL.createObjectURL(audioBlob);
        const audio = new Audio(audioUrl);
        audio.addEventListener('loadedmetadata', () => {
          recognition.start();
        });
      });
    } catch (error) {
      console.error("Error processing transcription:", error);
      setStatusMessage("Error processing transcription. Please try again.");
    }
  };
  
  const handleSubmit = async () => {
    try {
      setStatusMessage("Submitting...");
  
      const submissionInput = {
        gameID: gameId || "",
        playerID: playerId || "",
        audioKey: audioKey,
        transcript: transcript || ""
      };
  
      await client.graphql({
        query: mutations.createSubmission,
        variables: { input: submissionInput },
      });
  
      setStatusMessage("Submission successful!");
      setAudioKey(null);
      clearBlobUrl();
      onSubmit(); // Call the onSubmit prop after successful submission
    } catch (error) {
      console.error("Error submitting:", error);
      setStatusMessage("Error submitting. Please try again.");
    }
  };

  return (
    <div className="audio-container">
      <h3>Record Your Story</h3>
      <div className="controls">
        <button
          onClick={startRecording}
          disabled={status === "recording"}
          className="record-button"
        >
          {status === "recording" ? "Recording..." : "Start Recording"}
        </button>
        <button
          onClick={stopRecording}
          disabled={status !== "recording"}
          className="stop-button"
        >
          Stop Recording
        </button>
      </div>

      {mediaBlobUrl && (
        <div className="audio-preview">
          <h4>Audio Preview:</h4>
          <audio controls src={mediaBlobUrl}></audio>
        </div>
      )}

      {audioKey && transcript && (
        <button onClick={handleSubmit} className="submit-button">
          Submit
        </button>
      )}

      {statusMessage && <p className="status-message">{statusMessage}</p>}
    </div>
  );
};

export default AudioComponent;
