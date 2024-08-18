import React from "react";
import BoardCard from "./Board-card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faQuestionCircle } from "@fortawesome/free-solid-svg-icons";
import { faChessQueen } from "@fortawesome/free-solid-svg-icons/faChessQueen";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";

const Board = ({ points, display }) => {
  return (
    <div className="board">
      <h2>Selected Points:</h2>
      {points.map((point, index) => (
        <div className="board_card" key={index}>
          <div className="card-with-name">
            <p className="player-name">{point.playerName}</p>
            <BoardCard
              backContent={<FontAwesomeIcon icon={faChessQueen} />}
              frontContent={
                <>
                  {point.value === "coffee" ? (
                    <FontAwesomeIcon icon={faCoffee} />
                  ) : (
                    point.value
                  )}
                </>
              }
              flipped={display}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Board;
