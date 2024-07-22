import React from "react";

const BoardCard = ({ frontContent, backContent, flipped }) => {
  return (
    <div className={`board-card ${flipped ? "flipped" : ""}`}>
      <div className="board-card-inner">
        <div className="board-card-front">{frontContent}</div>
        <div className="board-card-back">{backContent}</div>
      </div>
    </div>
  );
};

export default BoardCard;
