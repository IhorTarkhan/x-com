import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Divider, IconButton, Menu, MenuItem } from "@material-ui/core";
import { AccountCircle } from "@material-ui/icons";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";

const useStyles = makeStyles((theme) => ({
  userIcon: {
    color: "white",
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
  userMenu: {
    "& svg": {
      paddingRight: theme.spacing(1),
    },
  },
}));

export const LoginUserNavigation = (props: { logout: () => void }) => {
  const classes = useStyles();
  const [open, setOpen] = useState<boolean>(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleLogout = () => {
    handleClose();
    props.logout();
  };
  return (
    <>
      <IconButton id={"avatar-id"} onClick={handleOpen}>
        <AccountCircle className={classes.userIcon} />
      </IconButton>
      <Menu
        open={open}
        onClose={handleClose}
        anchorEl={document.getElementById("avatar-id")}
        getContentAnchorEl={null}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        className={classes.userMenu}
      >
        <MenuItem onClick={handleClose}>
          <AccountCircle />
          My account
        </MenuItem>
        <Divider />
        <MenuItem onClick={handleLogout}>
          <ExitToAppIcon />
          Logout
        </MenuItem>
      </Menu>
    </>
  );
};
