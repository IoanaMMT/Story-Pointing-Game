import React from "react";
import BoardCard from "./Board-card";

const Board = ({ points }) => {
  return (
    <div className="board">
      <h2>Selected Points:</h2>
      {points.map((point, index) => (
        // <p key={index}>{point}</p>
        <div className="board_card">
          <BoardCard>
            <p key={index}>{point}</p>
          </BoardCard>
        </div>
      ))}
    </div>
  );
};

export default Board;
