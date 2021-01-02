import styled from "styled-components";
import React, { ReactElement } from "react";
import { Box } from "./Box";
import { PositionDto } from "../dto/PositionDto";

interface StiledProps {
  className?: string;
  xCount: number;
  yCount: number;
  squareSize: number;
}

interface Props {
  onClick: ([x, y]: number[]) => void;
  fields: Array<PositionDto>;
}

const Layout = (props: StiledProps & Props): ReactElement => {
  const getPair = (event: any): number[] => {
    const split = event.currentTarget.value.split(",");
    return [+split[0], +split[1]];
  };

  return (
    <div className={props.className}>
      {props.fields.map(position => (
        <Box
          key={position.id}
          value={`${position.x},${position.y}`}
          onClick={event => props.onClick(getPair(event))}
          content={position.type}
        />
      ))}
    </div>
  );
};

export const Battleground = styled(Layout)`
  margin: auto;
  display: grid;
  width: ${props => props.xCount * props.squareSize}px;
  height: ${props => props.yCount * props.squareSize}px;
  grid-template: repeat(${p => p.yCount}, 1fr) / repeat(${p => p.xCount}, 1fr);
`;
