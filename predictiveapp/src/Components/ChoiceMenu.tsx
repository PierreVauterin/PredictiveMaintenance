import React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

export default function ChoiceMenu(props) {
  const [sensorChoice, setSensorChoice] = React.useState("");
  const label = props.label;
  const data = props.data;
  const handleChange = (event: SelectChangeEvent) => {
    setSensorChoice(event.target.value as string);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth error>
        <InputLabel id="demo-simple-select-label" sx={{ color: "white" }}>
          {label}
        </InputLabel>
        <Select
          labelId="graphSensorMenu"
          id="graphMenu"
          value={sensorChoice}
          label="Sensor"
          onChange={handleChange}
          sx={{ color: "white" }}
        >
          <MenuItem value={1}>{data[0]}</MenuItem>
          <MenuItem value={2}>{data[1]}</MenuItem>
          <MenuItem value={3}>{data[2]}</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
