import React, { ReactElement } from "react";
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  button: {
    background: "#fff",
    border: "2px solid lightblue",
    fontSize: "30px",
    cursor: "pointer",
    outline: "none",
    fontWeight: 800
  }
}));

interface Props {
  onClick: (value: number) => void;
  content: any;
  value: number;
}

export const Box = (props: Props): ReactElement => {
  const classes = useStyles();

  return (
    <Button
      className={classes.button}
      onClick={event => props.onClick(+event.currentTarget.value)}
      value={props.value}
    >
      {props.content}
    </Button>
  );
};
