import React from "react";
import Box from "@mui/material/Box";
import { Button } from "@mui/material";

export const dataSet =[""]

export default function ChooseFile(props) {
    const id = props.id;
  
    function validate() {
      //Pushes the new value iff the button has been pushed
      dataSet[0] = "test"; //TODO: get value here
      if (props.update != null) props.update(dataSet[id]);
    } //TODO: popup ici pour indiquer que le choix a été pris en compte?
    return (
      <>
        <Box sx={{ minWidth: 120, m: 5 }}>
          <input type="file" />
        </Box>
        <Box display="flex" alignItems="center" justifyContent="center">
          <Button color="success" variant="contained" onClick={() => validate()}>
            Valider choix
          </Button>
        </Box>
      </>
    );
  }