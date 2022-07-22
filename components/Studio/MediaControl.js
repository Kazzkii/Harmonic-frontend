import { Grid, IconButton } from '@mui/material';
import React,{ useEffect }  from 'react';
import Header from '../Header/Header';
import Button from '@mui/material/Button';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import Grow from '@mui/material/Grow';
import Paper from '@mui/material/Paper';
import Popper from '@mui/material/Popper';
import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';
import Stack from '@mui/material/Stack';
import { RadioButtonChecked } from '@mui/icons-material';
import { AccountCircle } from '@material-ui/icons';

export default function MediaControl() {
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
    return;
    }

    setOpen(false);
  };

  const changeInstrument = () => {
    //do stuff
  }

  function handleListKeyDown(event) {
    if (event.key === 'Tab') {
    event.preventDefault();
    setOpen(false);
    } else if (event.key === 'Escape') {
    setOpen(false);
    }
  }

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
    anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);


  return (
    <Grid 
      container
      direction="row"
      justifyContent="space-between">
      <div>
        <Button
          variant="contained"
          ref={anchorRef}
          id="composition-button"
          aria-controls={open ? 'composition-menu' : undefined}
          aria-expanded={open ? 'true' : undefined}
          aria-haspopup="true"
          onClick={handleToggle}
        >
          Instruments
        </Button>
        <Popper
          open={open}
          anchorEl={anchorRef.current}
          role={undefined}
          placement="bottom-start"
          transition
          disablePortal
        >
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              style={{
                transformOrigin:
                  placement === 'bottom-start' ? 'left top' : 'left bottom',
              }}
            >
              <Paper>
                <ClickAwayListener onClickAway={handleClose}>
                  <MenuList
                    autoFocusItem={open}
                    id="composition-menu"
                    aria-labelledby="composition-button"
                    onKeyDown={handleListKeyDown}
                  >
                    <MenuItem onClick={changeInstrument}>Piano</MenuItem>
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
    </div>

    <Button  variant="contained" startIcon={<RadioButtonChecked/>}>
      Record
    </Button>



    </Grid>
  )
}