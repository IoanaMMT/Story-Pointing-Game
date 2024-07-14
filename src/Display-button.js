import React from "react";
import Button from "@mui/material/Button";
import { useState } from "react";

const DisplayButton = () => {
  const [display, setDisplay] = useState(false);

  return (
    <Button
      variant="contained"
      className="display-button"
      style={{ marginTop: "45px", backgroundColor: "#011d55" }}
    >
      Display
    </Button>
  );
};

export default DisplayButton;
