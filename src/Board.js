import React from "react";
import BoardCard from "./Board-card";

const Board = ({ points, display }) => {
  return (
    <div className="board">
      <h2>Selected Points:</h2>
      {points.map((point, index) => (
        <div className="board_card" key={index}>
          <BoardCard
            backContent={<p>Back Side</p>}
            frontContent={<p>{point}</p>}
            flipped={display}
          />
        </div>
      ))}
    </div>
  );
};

export default Board;
