import React from "react";
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    "& button": {
      ...theme.typography.h6,
      color: "inherit",
    },
  },
}));

export const NotLoginUserNavigation = (props: { login: () => void }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Button onClick={props.login}>Sign In</Button>
      <Button onClick={props.login}>Sign Up</Button>
    </div>
  );
};
