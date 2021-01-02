import React, { ReactElement } from "react";
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  button: {
    border: "2px solid lightblue",
    cursor: "pointer",
    outline: "none"
  }
}));

interface Props {
  onClick: (value: any) => void;
  content: any;
  value: string | number;
}

export const Box = (props: Props): ReactElement => {
  const classes = useStyles();

  return (
    <Button
      className={classes.button}
      onClick={props.onClick}
      value={props.value}
    >
      {props.content}
    </Button>
  );
};
