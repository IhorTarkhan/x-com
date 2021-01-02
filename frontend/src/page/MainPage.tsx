import React, { ReactElement, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Battleground } from "../component/BattlegroundXO";

const useStyles = makeStyles(() => ({
  styles: {
    width: "200px",
    margin: "20px auto"
  },
  pStyle: {
    color: "green"
  }
}));

function checkWinner(boxes: Array<string>) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  for (let i = 0; i < lines.length; i++) {
    const [x, y, z] = lines[i];
    if (boxes[x] && boxes[x] === boxes[y] && boxes[x] === boxes[z]) {
      return boxes[x];
    }
  }
  return null;
}

export const MainPage = (): ReactElement => {
  const classes = useStyles();

  const [layout, setLayout] = useState(Array(9).fill(null));
  const [xIsNext, setXisNext] = useState(true);
  const winner = checkWinner(layout);

  const handleClick = (value: number) => {
    const i = value;
    const layoutState = [...layout];
    if (winner || layoutState[i]) return;
    layoutState[i] = xIsNext ? "X" : "O";
    setLayout(layoutState);
    setXisNext(!xIsNext);
  };

  return (
    <>
      <Battleground
        xCount={3}
        yCount={3}
        squareSize={100}
        boxes={layout}
        onClick={handleClick}
      />
      <div className={classes.styles}>
        <p className={classes.pStyle}>
          {winner
            ? "Winner: " + winner
            : "Next Player " + (xIsNext ? "X" : "O")}
        </p>
      </div>
    </>
  );
};
