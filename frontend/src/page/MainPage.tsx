import React, { ReactElement, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Layout } from "../component/Layout";

const useStyles = makeStyles(() => ({
  button: {
    color: "blue",
  },
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
    [2, 4, 6],
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
  const [layout, setLayout] = useState(Array(9).fill(null));
  const [xIsNext, setXisNext] = useState(true);
  const winner = checkWinner(layout);

  const handleClick = (event: any) => {
    console.log(event);
    console.log(event);
    const i = xIsNext ? 3 : 5;
    const layoutState = [...layout];
    if (winner || layoutState[i]) return;
    layoutState[i] = xIsNext ? "X" : "O";
    setLayout(layoutState);
    setXisNext(!xIsNext);
  };

  return (
    <>
      <Layout boxes={layout} onClick={handleClick} />
      <div>
        <p>
          {winner
            ? "Winner: " + winner
            : "Next Player " + (xIsNext ? "X" : "O")}
        </p>
      </div>
    </>
  );
};
