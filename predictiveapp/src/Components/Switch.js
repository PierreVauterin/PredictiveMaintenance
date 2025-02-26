import React from "react";
import FormControl from "@mui/material/FormControl";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";

export function SwitchesGroup(props) {
  const update = props.update;
  const memory = props.state || {};

  const handleChange = (event) => {
    update(event)
    memory[event.target.name] = event.target.checked;
  };

  return (
    <FormControl component="fieldset" variant="standard">
      <FormGroup>
        <FormControlLabel
          control={
            <Switch
              checked={memory["sensors"]}
              onChange={handleChange}
              name="sensors"
            />
          }
          label="Capteurs"
        />
        <FormControlLabel
          control={
            <Switch
              checked={memory["camembert"]}
              onChange={handleChange}
              name="camembert"
            />
          }
          label="Diagrammes camembert"
        />
      </FormGroup>
    </FormControl>
  );
}
