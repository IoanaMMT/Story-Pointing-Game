import React, { useState } from "react";
import "./App.css";
import Header from "./Header";
import Deck from "./Deck";
import Board from "./Board";
import DisplayButton from "./Display-button";

function App() {
  const [points, setPoints] = useState([]);

  const handleSelect = (point) => {
    setPoints([...points, point]);
  };

  return (
    <div className="App">
      <Header />
      <Deck onSelect={handleSelect} />
      <Board points={points} />
      <DisplayButton />
    </div>
  );
}

export default App;
