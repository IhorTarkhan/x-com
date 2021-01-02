import styled from "styled-components";
import React, { ReactElement } from "react";
import { Box } from "./Box";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  root: {
    border: "4px solid lightblue",
    borderRadius: "10px",
    width: "320px",
    height: "320px",
    margin: "0 auto",
    display: "grid",
    textCo: "red",
    gridTemplate: "repeat(3, 1fr) / repeat(3, 1fr)"
  }
}));

interface Props {
  onClick: (value: number) => void;
  boxes: Array<string>;
}

export const Layout = (props: Props): ReactElement => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {props.boxes.map((box, i) => (
        <Box key={i} value={i} content={box} onClick={props.onClick} />
      ))}
    </div>
  );
};

export const TestTable = ({ className }: { className?: any }): ReactElement => {
  const arr: Array<string> = [
    "1",
    "3",
    "5",
    "3",
    "gh",
    "df",
    "dfv",
    "v",
    "sd",
    "sd",
    "sd",
    "sd"
  ];
  return (
    <div className={className}>
      {arr.map((box, i) => (
        <Box key={i} value={i} content={box} onClick={() => alert(1)} />
      ))}
    </div>
  );
};

export const Table = styled(TestTable)`
  border: 4px solid lightblue;
  border-radius: 10px;
  width: 320px;
  height: 320px;
  margin: 0 auto;
  display: grid;
  grid-template: repeat(${props => 6}, 1fr) / repeat(${props => 3}, 1fr);
`;
