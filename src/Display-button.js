import React from "react";
import Button from "@mui/material/Button";
// import BoardCard from "./Board-card";

const DisplayButton = ({ setDisplay, display }) => {
  const handleClick = () => {
    setDisplay((prev) => !prev);
  };

  return (
    <Button
      variant="contained"
      className="display-button"
      style={{ marginTop: "45px", backgroundColor: "#011d55" }}
      onClick={handleClick}
    >
      {display ? "Display" : "Hide"}
    </Button>
  );
};

export default DisplayButton;
