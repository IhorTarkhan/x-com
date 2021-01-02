import styled from "styled-components";
import React, { ReactElement } from "react";
import { Box } from "./Box";

interface StiledProps {
  className?: string;
  xCount: number;
  yCount: number;
  squareSize: number;
}

interface Props {
  onClick: (value: number) => void;
  boxes: Array<string>;
}

const Layout = (props: StiledProps & Props): ReactElement => {
  return (
    <div className={props.className}>
      {props.boxes.map((box, i) => (
        <Box key={i} value={i} content={box} onClick={props.onClick} />
      ))}
    </div>
  );
};

export const Battleground = styled(Layout)`
  width: ${props => props.squareSize * props.xCount}px;
  height: ${props => props.squareSize * props.yCount}px;
  margin: auto;
  display: grid;
  grid-template: repeat(${p => p.yCount}, 1fr) / repeat(${p => p.xCount}, 1fr);
`;
