import { useState } from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";

export let seuils = [20, 40]; // A voir si on fait quelque chose avec

/* 
Main component 
A slider with two draggable extremities
Props:
- onChange: a state setter which will grab the chosen values and bring them in the upper file
*/
/*
La gestion des états est terrible mais pour l'instant ça fonctionne 
*/
export const RangeSlider = (props) => {
  const [value, setValue] = useState(seuils);
  const OnChangeLocal = props.onChange;

  const handleChange = (event, newValue) => {
    setValue(newValue);
    OnChangeLocal(newValue);
    seuils[0] = newValue[0];
    seuils[1] = newValue[1];
  };

  return (
    <Box sx={{ width: 300 }}>
      <Slider
        getAriaLabel={() => "Time range"}
        value={value}
        onChange={handleChange}
        valueLabelDisplay="on"
      />
    </Box>
  );
};