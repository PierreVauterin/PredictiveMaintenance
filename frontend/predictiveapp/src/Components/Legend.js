import Box from "@mui/material/Box";
import { Help } from "./Notification";

export const Legend = (props) => {
  const message = props.message;
  const helpText = props.helpText;
  return (
    <>
      <Box display="flex" alignItems="center" justifyContent="space-between">
        <Box display="flex" alignItems="center">
          <h3>{message}</h3>
          <Help helpText={helpText} />
        </Box>
      </Box>
    </>
  );
};
