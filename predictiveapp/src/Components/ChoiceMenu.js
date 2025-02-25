import React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select"; //{ SelectChangeEvent }
import { useState } from "react";

import { Button } from "@mui/material";

export var res = ["", "", "", ""]; //Stores all the choices made with the menu below
var index = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];

/* 
Fonctionne comme prévu
Une erreur à régler concernant une unique key
Gérer la taille de la boîte
*/
export default function ChoiceMenu(props) {
  const label = props.label;
  const data = props.data;
  const id = props.id;
  const [valueChoice, setValueChoice] = useState("");
  const handleChange = (event) => {
    index[id] = Number(event.target.value);
    setValueChoice(event.target.value);
  };
  function validate() {
    //Pushes the new value iff the button has been pushed
    res[id] = data[index[id] - 1];
    if (props.update != null) props.update(res[id]);
  }
  return (
    <>
      <Box sx={{ minWidth: 120, m: 5 }}>
        <FormControl fullWidth error>
          <InputLabel id="demo-simple-select-label" sx={{ color: "white" }}>
            {label}
          </InputLabel>
          <Select
            labelId="graphSensorMenu"
            id="graphMenu"
            value={valueChoice}
            label="Sensor"
            onChange={handleChange}
            sx={props.sx}
          >
            {data.map((item, index) => (
              <MenuItem key={index} value={index + 1}>
                {data[index]}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>
      <Box display="flex" alignItems="center" justifyContent="center">
        <Button color="success" variant="contained" onClick={() => validate()}>
          Valider choix
        </Button>
      </Box>
    </>
  );
}