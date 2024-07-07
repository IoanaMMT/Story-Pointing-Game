import React from "react";

const Board = ({ points }) => {
  return (
    <div className="board">
      <h2>Selected Points:</h2>
      {points.map((point, index) => (
        <p key={index}>{point}</p>
      ))}
    </div>
  );
};

export default Board;
