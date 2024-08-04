import React from "react";
import Card from "./Card";

const fibonacciNumbers = [1, 2, 3, 5, 8, 13, 20, 30, 50, 100, "coffee", "?"];

const Deck = ({ onSelect }) => {
  return (
    <div className="deck">
      {fibonacciNumbers.map((num) => (
        <Card key={num} value={num} onSelect={onSelect} />
      ))}
    </div>
  );
};

export default Deck;
