import React, { ReactElement } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Link, NavLink } from "react-router-dom";
import { AppBar, Button, Toolbar } from "@material-ui/core";
import {
  battlegroundRouting,
  homeRouting,
  socketRouting,
} from "../constant/routes";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "static",
    background: "white",
    boxShadow: theme.shadows[0],
    "& img": {
      width: theme.spacing(20),
      height: theme.spacing(15),
    },
    "& a": {
      flexGrow: 1,
      fontSize: "1.5em",
      fontFamily: `"Roboto", "Helvetica", "Arial", sans-serif`,
      color: "black",
    },
    "& button": {
      fontSize: "1.2em",
      width: "10vw",
      height: "10vw",
    },
  },
}));

export const NavigationPanel = (): ReactElement => {
  const classes = useStyles();

  return (
    <AppBar className={classes.root}>
      <Toolbar>
        <NavLink to={homeRouting}>
          <img src={"logo.svg"} alt={"XCOM online"} />
        </NavLink>
        <Link to={battlegroundRouting}>Battleground</Link>
        <NavLink to={socketRouting}>Socket</NavLink>
        <Button>Login</Button>
      </Toolbar>
    </AppBar>
  );
};
