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
  },
  logo: {
    width: theme.spacing(20),
    height: theme.spacing(15),
  },
  linkStyle: {
    flexGrow: 1,
    fontSize: "1.5em",
    fontFamily: `"Roboto", "Helvetica", "Arial", sans-serif`,
    color: "black",
  },
}));

export const NavigationPanel = (): ReactElement => {
  const classes = useStyles();

  return (
    <AppBar className={classes.root}>
      <Toolbar>
        <NavLink to={homeRouting} className={classes.linkStyle}>
          <img src={"logo.svg"} className={classes.logo} alt={""} />
        </NavLink>
        <Link to={battlegroundRouting} className={classes.linkStyle}>
          Battleground
        </Link>
        <NavLink to={socketRouting} className={classes.linkStyle}>
          Socket
        </NavLink>
        <Button className={classes.linkStyle}>Login</Button>
      </Toolbar>
    </AppBar>
  );
};
