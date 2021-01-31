import React, { ReactElement, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { AppBar, IconButton, Toolbar, Typography } from "@material-ui/core";
import { NavLink, useHistory } from "react-router-dom";
import { homeRouting, socketRouting } from "../constant/routes";
import { LoginUserNavigation } from "./LoginUserNavigation";
import { NotLoginUserNavigation } from "./NotLoginUserNavigation";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "static",
    "& img": {
      width: theme.spacing(20),
      height: theme.spacing(15),
    },
    "& a": {
      ...theme.typography.h5,
      color: "white",
      textDecoration: "none",
      display: "flex",
      justifyContent: "center",
    },
    "& a.active": {
      textDecoration: "underline",
    },
  },
  link: {
    flexGrow: 1,
  },
}));

export const NavigationPanel = (): ReactElement => {
  const classes = useStyles();
  const history = useHistory();
  const [auth, setAuth] = useState<boolean>(true);

  return (
    <>
      <AppBar className={classes.root}>
        <Toolbar>
          <IconButton onClick={() => history.push(homeRouting)}>
            <img src={"logo.svg"} alt={"XCOM online"} />
          </IconButton>

          <Typography className={classes.link}>
            <NavLink to={socketRouting}>Socket</NavLink>
          </Typography>
          <Typography className={classes.link}>
            <NavLink to={"socketRouting"}>Socket2</NavLink>
          </Typography>

          {auth ? (
            <LoginUserNavigation logout={() => setAuth(false)} />
          ) : (
            <NotLoginUserNavigation login={() => setAuth(true)} />
          )}
        </Toolbar>
      </AppBar>
    </>
  );
};
