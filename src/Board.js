import React from "react";
import BoardCard from "./Board-card";
import { useState } from "react";

// const Board = ({ points }) => {
//   return (
//     <div className="board">
//       <h2>Selected Points:</h2>
//       {points.map((point, index) => (
//         // <p key={index}>{point}</p>
//         <div className="board_card">
//           <BoardCard>
//             <p key={index}>{point}</p>
//           </BoardCard>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Board;

const Board = ({ points, display }) => {
  return (
    <div className="board">
      <h2>Selected Points:</h2>
      {points.map((point, index) => (
        <div className="board_card" key={index}>
          <BoardCard
            frontContent={<p>{point}</p>}
            backContent={<p>Back Side</p>}
            flipped={display}
          />
        </div>
      ))}
    </div>
  );
};

export default Board;
