import React from "react";
import Button from "@mui/material/Button";

const ClearButton = ({ handleClear }) => {
  return (
    <Button
      variant="contained"
      className="clear-button"
      style={{ marginTop: "10px", backgroundColor: "#b60000" }}
      onClick={handleClear}
    >
      Clear
    </Button>
  );
};

export default ClearButton;
