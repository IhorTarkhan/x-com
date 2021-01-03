import React, { ReactElement } from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  root: {
    verticalAlign: "top",
    display: "inline-block",
    textAlign: "center"
  }
}));

interface Props {}

export const Target = (props: Props): ReactElement => {
  const classes = useStyles();
  return <div className={classes.root}>aaa</div>;
};
