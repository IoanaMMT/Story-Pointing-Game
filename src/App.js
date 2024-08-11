import React, { useState } from "react";
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

  const handleSelect = (value) => {
    setPoints([...points, { value, playerName }]);
  };

  const handleNameSubmit = (e) => {
    e.preventDefault();
    setIsNameEntered(true);
  };

  const handleClear = () => {
    setPoints([]);
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
