import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./Header";
import Deck from "./Deck";
import Board from "./Board";
import DisplayButton from "./Display-button";
import ClearButton from "./Clear-button";

function App() {
  const [points, setPoints] = useState([]);
  const [display, setDisplay] = useState(true);
  const [playerName, setPlayerName] = useState("");
  const [isNameEntered, setIsNameEntered] = useState(false);
  const [socket, setSocket] = useState(null);

  useEffect(() => {
    const ws = new WebSocket("ws://story-pointing-game.vercel.app");

    ws.onopen = () => {
      console.log("Connected to WebSocket server");
    };

    // Handle incoming messages from WebSocket
    ws.onmessage = (event) => {
      try {
        // Parse the incoming message as JSON
        const receivedData = JSON.parse(event.data);

        // Depending on the structure of receivedData, you might want to check its properties
        if (receivedData && receivedData.value && receivedData.playerName) {
          setPoints((prevPoints) => [...prevPoints, receivedData]);
        } else {
          console.warn("Received unknown data format:", receivedData);
        }
      } catch (error) {
        console.error("Failed to parse WebSocket message:", error);
      }
    };

    ws.onclose = () => {
      console.log("WebSocket connection closed");
    };

    setSocket(ws);

    // Cleanup WebSocket connection when component unmounts
    return () => {
      ws.close();
    };
  }, []);

  const handleSelect = (value) => {
    const selectedPoint = { value, playerName };

    // Send the selected card data to the server
    if (socket) {
      socket.send(JSON.stringify(selectedPoint));
    }

    // Update local state
    setPoints((prevPoints) => [...prevPoints, selectedPoint]);
  };

  const handleNameSubmit = (e) => {
    e.preventDefault();
    setIsNameEntered(true);
  };

  const handleClear = () => {
    setPoints([]);
    setDisplay(true);
  };

  return (
    <div className="App">
      <Header />
      {!isNameEntered ? (
        <div className="entry-form">
          <form onSubmit={handleNameSubmit}>
            <input
              type="text"
              placeholder="Enter your name"
              value={playerName}
              onChange={(e) => setPlayerName(e.target.value)}
            />
            <button type="submit">Join</button>
          </form>
        </div>
      ) : (
        <>
          <Deck onSelect={handleSelect} />
          <Board points={points} display={display} />
          <div className="buttons-container">
            <DisplayButton setDisplay={setDisplay} display={display} />
            <ClearButton handleClear={handleClear} />
          </div>
        </>
      )}
    </div>
  );
}

export default App;
