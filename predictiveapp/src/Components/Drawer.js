import { Drawer, Box, Typography, IconButton } from "@mui/material";
import { useState } from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

import MenuIcon from "@mui/icons-material/Menu";
import MonitorHeartIcon from "@mui/icons-material/MonitorHeart";
import Equalizer from "@mui/icons-material/Equalizer";
import Dashboard from "@mui/icons-material/Dashboard";
import Divider from "@mui/material/Divider";
import LoupeIcon from "@mui/icons-material/Loupe";
import BuildIcon from '@mui/icons-material/Build';
import TravelExploreIcon from "@mui/icons-material/TravelExplore";
import SettingsIcon from "@mui/icons-material/Settings";

import { SwitchesGroup } from "./Switch";
import { RangeSlider } from "./Slider";
import { DisableHelp } from "./ListParts";
import { Notification } from "./Notification";

import React from "react";
import { NavLink } from "react-router-dom";
//import { createStyles, makeStyles } from "@mui/styles";

//Old settings color: "rgb(76, 80, 88)"
//Old Drawer color: "rgb(116, 120, 128)"

/* Allows to change page after having clicked on the menu */
const MyNavLink = React.forwardRef((props, ref) => (
  <NavLink
    ref={ref}
    to={props.to}
    className={({ isActive }) =>
      `${props.className} ${isActive ? props.activeClassName : ""}`
    }
  >
    {props.children}
  </NavLink>
));

/* Changes the color of the current page in the menu (I think) */
/*
const useStyles = makeStyles((theme) =>
  createStyles({
    activeLink: {
      backgroundColor: "#19ABC0",
      color: "#FFFFFF",
      borderRadius: 8,
      "& .MuiSvgIcon-root": {
        color: "#FFFFFF",
        stroke: "#FFFFFF",
        fill: "#19ABC0" //Here we can change the color in the menu for the page we are on
      }
    }
  })
);
*/
/* Menu component: allows to navigate between pages */

export const Menu = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false); //A voir
  //const classes = useStyles();
  return (
    <>
      <IconButton
        size="large"
        edge="start"
        color="inherit"
        aria-label="logo"
        onClick={() => setIsDrawerOpen(true)}
      >
        <MenuIcon />
      </IconButton>
      <Drawer
        anchor="left"
        open={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
      >
        <Box
          p={2}
          width="250px"
          height="100%"
          textAlign="center"
          role="presentation"
          sx={{
            backgroundColor: "rgb(176, 180, 188)"
          }}
        >
          <Typography variant="h6" component="div">
            Menu{""}
          </Typography>
          <Divider />
          <List>
            <ListItem
              component={MyNavLink}
              to={"/dashboard"}
              //activeClassName={classes.activeLink}
            >
              <ListItemIcon>{<Dashboard />}</ListItemIcon>
              <ListItemText primary={"Tableau de bord"} />
            </ListItem>
            <ListItem
              component={MyNavLink}
              to={"/sensors"}
              //activeClassName={classes.activeLink}
            >
              <ListItemIcon>{<Equalizer />}</ListItemIcon>
              <ListItemText primary={"Suivi des capteurs"} />
            </ListItem>
          </List>
          <Divider />
          <List>
            <ListItem
              component={MyNavLink}
              to={"/rul"}
              //activeClassName={classes.activeLink}
            >
              <ListItemIcon>{<MonitorHeartIcon />}</ListItemIcon>
              <ListItemText primary={"Durée de vie"} />
            </ListItem>
            <ListItem
              component={MyNavLink}
              to={"/graphpage"}
              //activeClassName={classes.activeLink}
            >
              <ListItemIcon>{<LoupeIcon />}</ListItemIcon>
              <ListItemText primary={"Détails des résultats"} />
            </ListItem>
          </List>
          <Divider />
          <List>
            <ListItem
              component={MyNavLink}
              to={"/map"}
              //activeClassName={classes.activeLink}
            >
              <ListItemIcon>{<BuildIcon />}</ListItemIcon>
              <ListItemText primary={"Configuration"} />
            </ListItem>
          </List>
          <Divider />
        </Box>
      </Drawer>
    </>
  );
};

/* Settings component: allows to switch/change/idk things */

export const SettingsDrawer = () => {
  const [areSettingsOpen, setAreSettingsOpen] = useState(false);
  return (
    <>
      <IconButton
        size="large"
        edge="start"
        color="inherit"
        aria-label="logo"
        onClick={() => setAreSettingsOpen(true)}
      >
        <SettingsIcon />
      </IconButton>
      <Drawer
        anchor="right"
        open={areSettingsOpen}
        onClose={() => setAreSettingsOpen(false)}
      >
        <Box
          p={2}
          width="300px"
          height="100%"
          textAlign="center"
          role="presentation"
          sx={{
            backgroundColor: "rgb(176, 180, 188)"
          }}
        >
          <Typography variant="h6" component="div">
            Options{""}
          </Typography>
          <Divider />
          <List>
            <Typography>Montrer/Cacher les éléments</Typography>
            <SwitchesGroup />
          </List>
          <Divider />
          <List>
            <Typography>Seuils d'alerte actuels</Typography>
            <Box display="flex" justifyContent="center" alignItems="center">
              <Box
                width="30px"
                height="30px"
                sx={{ backgroundColor: "rgb(46,125,50)", m: 1 }}
              ></Box>
              <Typography>0%-20%</Typography>
            </Box>
            <Box display="flex" justifyContent="center" alignItems="center">
              <Box
                width="30px"
                height="30px"
                sx={{ backgroundColor: "rgb(237,108,2)", m: 1 }}
              ></Box>
              <Typography>20%-40%</Typography>
            </Box>
            <Box display="flex" justifyContent="center" alignItems="center">
              <Box
                width="30px"
                height="30px"
                sx={{ backgroundColor: "rgb(211,47,47)", m: 1 }}
              ></Box>
              <Typography>40%-100%</Typography>
            </Box>
          </List>
          <Divider />
          <List>
            <Typography>Changer seuils d'alertes</Typography>
            <RangeSlider />
          </List>
          <Divider />
          <DisableHelp />
        </Box>
      </Drawer>
    </>
  );
};

export const TotalHeader = () => {
  return (
    <>
      <Box display="flex" alignItems="center" justifyContent="space-between">
        <Menu />
        <Notification />
        <SettingsDrawer />
      </Box>
    </>
  );
};
