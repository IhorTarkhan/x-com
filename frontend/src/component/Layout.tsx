import React, { ReactElement } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box } from "./Box";

const useStyles = makeStyles(() => ({
  root: {
    border: "4px solid lightblue",
    borderRadius: "10px",
    width: "320px",
    height: "320px",
    margin: "0 auto",
    display: "grid",
    gridTemplate: "repeat(3, 1fr) / repeat(3, 1fr)"
  }
}));

interface Props {
  onClick: (
    event:
      | React.MouseEvent<HTMLAnchorElement>
      | React.MouseEvent<HTMLButtonElement>
  ) => void;
  boxes: Array<string>;
}

export const Layout = (props: Props): ReactElement => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {props.boxes.map((box, i) => (
        <Box key={i} value={String(i)} content={box} onClick={props.onClick} />
      ))}
    </div>
  );
};
