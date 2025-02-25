import * as React from "react";
import Badge from "@mui/material/Badge";
import NotificationsIcon from "@mui/icons-material/Notifications";
import HelpIcon from "@mui/icons-material/Help";
import Box from "@mui/material/Box";
import Tooltip from "@mui/material/Tooltip";

export const Notification = () => {
  return (
    <>
      <Badge badgeContent={4} color="info">
        <NotificationsIcon color="inherit" />
      </Badge>
    </>
  );
};

export const Help = (props) => {
  const helpText = props.helpText;
  const placement = props.placement;
  return (
    <>
      <Tooltip title={helpText} arrow placement={placement}>
        <Box sx={{ m: 3 }}>
          <HelpIcon color="inherit" />
        </Box>
      </Tooltip>
    </>
  );
};
