import {
    Button,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogContentText,
    DialogActions
  } from "@mui/material";
  
  import React from "react";
  
  export const MuiDialog = (props) => {
    const message = props.message;
    /* eslint-disable*/
    const open = props.isOpen;
    const setOpen = props.stateChanger;
    return (
      <>
        <Dialog
          /* eslint-disable*/
          open={open}
          onClose={() => setOpen(false)}
          aria-labelledby="dialog-title"
          aria-describedby="dialogDescription"
          sx={{ color: "primary.main" }}
        >
          <DialogTitle id="dialog-title">État du composant</DialogTitle>
          <DialogContent>
            <DialogContentText id="dialog-description">
              {message.map((item, index) => (
                <React.Fragment key={index}>
                  {item}
                  <br />
                  <br />
                </React.Fragment>
              ))}
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button autoFocus onClick={() => setOpen(false)}>
              Ok
            </Button>
          </DialogActions>
        </Dialog>
      </>
    );
  };
  