import React from 'react';
import { useState } from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import Typography from "@mui/material/Typography";

export let seuils = [20, 40]; // A voir si on fait quelque chose avec

function valuetext(value) {
  return `${value}°C`;
}

/* Only 15 units of time, completely arbitrary */
export const DiscreteSlider = () => {
  return (
    <Box sx={{ width: 300 }}>
      <Slider
        aria-label="Time"
        defaultValue={0}
        getAriaValueText={valuetext}
        valueLabelDisplay="auto"
        step={1}
        marks
        min={0}
        max={15}
      />
      <Typography>Changer de semaine</Typography>
    </Box>
  );
};

export const RangeSlider = () => {
  const [value, setValue] = useState(seuils);

  const handleChange = (event, newValue) => {
    setValue(newValue);
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
        getAriaValueText={valuetext}
      />
    </Box>
  );
};
