import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";

const Card = ({ value, onSelect }) => {
  return (
    <div className="card" onClick={() => onSelect(value)}>
      {value === "coffee" ? <FontAwesomeIcon icon={faCoffee} /> : value}
    </div>
  );
};

export default Card;
