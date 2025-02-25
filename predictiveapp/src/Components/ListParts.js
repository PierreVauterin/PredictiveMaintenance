import React from 'react';
import Divider from "@mui/material/Divider";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import RangeSlider from "@mui/material/Slider";
import Typography from "@mui/material/Typography";

export const DisableHelp = () => {
  return (
    <>
      <FormControlLabel
        control={<Switch defaultChecked />}
        label="Montrer l'aide"
      />
      <Divider />
    </>
  );
};

export const ChangeThreshold = () => {
  return (
    <>
      <Typography>Changer seuils d'alertes</Typography>
      <RangeSlider />
    </>
  );
};
