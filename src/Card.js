import React from "react";

const Card = ({ value, onSelect }) => {
  return (
    <div className="card" onClick={() => onSelect(value)}>
      {value}
    </div>
  );
};

export default Card;
