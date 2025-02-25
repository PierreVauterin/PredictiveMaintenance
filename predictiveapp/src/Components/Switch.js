import React from "react";
import FormControl from "@mui/material/FormControl";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";

//Mobix
let memory = { sensors: true, camembert: true };

export function SwitchesGroup() {
  const [state, setState] = React.useState({ memory });

  const handleChange = (event) => {
    setState({
      ...state,
      [event.target.name]: event.target.checked
    });
    console.clear();
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
