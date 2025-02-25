import React from "react";
import Button from "@mui/material/Button";
import { useState } from "react";
import { MuiDialog } from "./Popup";
import Box from "@mui/material/Box";

export const ButtonDialog = (props) => {
  const [isOpen, setOpen] = useState(false);
  const equipment = props.equipment;
  return (
    <Box>
      <MuiDialog
        stateChanger={setOpen}
        isOpen={isOpen}
        message={equipment.printButton()}
      />
      <Button
        variant="contained"
        color={equipment.findColor()}
        onClick={() => setOpen(!isOpen)}
        id={equipment.getName()}
      >
        {equipment.getName()}
      </Button>
    </Box>
  );
};
