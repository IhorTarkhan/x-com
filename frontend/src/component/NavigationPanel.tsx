import React, { ReactElement } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Link, NavLink } from "react-router-dom";
import { AppBar, Toolbar } from "@material-ui/core";
import {
  battlegroundRouting,
  homeRouting,
  socketRouting,
} from "../constant/routes";
import { Authorisation } from "./Authorisation";

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
      fontSize: "1.5vw",
      fontFamily: `"Roboto", "Helvetica", "Arial", sans-serif`,
      color: "black",
    },
    "& button": {
      fontSize: "1.2vw",
      width: "8vw",
      height: "8vw",
    },
  },
}));

export const NavigationPanel = (): ReactElement => {
  const classes = useStyles();

  return (
    <>
      <AppBar className={classes.root}>
        <Toolbar>
          <NavLink to={homeRouting}>
            <img src={"logo.svg"} alt={"XCOM online"} />
          </NavLink>
          <Link to={battlegroundRouting}>Battleground</Link>
          <NavLink to={socketRouting}>Socket</NavLink>
          <Authorisation />
        </Toolbar>
      </AppBar>
    </>
  );
};
