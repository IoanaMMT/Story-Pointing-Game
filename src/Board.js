import React from "react";
import Card from "./Card";

const Board = ({ points }) => {
  return (
    <div className="board">
      <h2>Selected Points:</h2>
      {points.map((point, index) => (
        // <p key={index}>{point}</p>;
        <div className="board_card">
          <Card key={index}>{point}</Card>
        </div>
      ))}
    </div>
  );
};

export default Board;
