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
  onClick: (
    event:
      | React.MouseEvent<HTMLAnchorElement>
      | React.MouseEvent<HTMLButtonElement>
  ) => void;
  content: any;
  value: string;
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
