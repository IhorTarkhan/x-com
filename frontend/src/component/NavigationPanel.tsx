import React, { ReactElement, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  AppBar,
  Button,
  Divider,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from "@material-ui/core";
import { AccountCircle } from "@material-ui/icons";
import MenuIcon from "@material-ui/icons/Menu";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { NavigationMenu } from "./NavigationMenu";

const useStyles = makeStyles((theme) => ({
  appBar: {
    position: "static",
    "& p": {
      ...theme.typography.h6,
      flexGrow: 1,
      paddingLeft: theme.spacing(2),
    },
    "& button": {
      ...theme.typography.body1,
      color: "inherit",
      padding: theme.spacing(1),
    },
  },
  userMenu: {
    width: "25vw",
    "& svg": { paddingRight: theme.spacing(1) },
  },
}));

export const LoginUserFields = (props: { logout: () => void }) => {
  const classes = useStyles();
  const [open, setOpen] = useState<boolean>(false);

  const handleMenu = () => {
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
      <IconButton id={"avatar-id"} onClick={handleMenu}>
        <AccountCircle />
      </IconButton>
      <Menu
        anchorEl={document.getElementById("avatar-id")}
        getContentAnchorEl={null}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        className={classes.userMenu}
        open={open}
        onClose={handleClose}
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

export const NotLoginUserFields = (props: { login: () => void }) => {
  return (
    <>
      <Button onClick={props.login}>Sign In</Button>
      <Button onClick={props.login}>Sign Up</Button>
    </>
  );
};

export const NavigationPanel = (): ReactElement => {
  const classes = useStyles();
  const [isNavigationMenuOpen, setNavigationMenuOpen] = useState(false);
  const [auth, setAuth] = useState<boolean>(true);

  return (
    <>
      <NavigationMenu
        isOpen={isNavigationMenuOpen}
        close={() => setNavigationMenuOpen(false)}
      />
      <AppBar className={classes.appBar}>
        <Toolbar>
          <IconButton onClick={() => setNavigationMenuOpen(true)}>
            <MenuIcon />
          </IconButton>
          <Typography>Home</Typography>
          {auth ? (
            <LoginUserFields logout={() => setAuth(false)} />
          ) : (
            <NotLoginUserFields login={() => setAuth(true)} />
          )}
        </Toolbar>
      </AppBar>
    </>
  );
};
