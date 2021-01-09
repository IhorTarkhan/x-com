// eslint-disable-next-line
import React, { ReactElement } from "react";
import styled from "styled-components";
import { Position } from "./Position";
import { PositionDto } from "../dto/PositionDto";
import { UnitDto } from "../dto/UnitDto";

interface StiledProps {
  className?: string;
  xCount: number;
  yCount: number;
  squareSize: number;
}

interface Props {
  onClick: ([x, y]: number[]) => void;
  fields: Array<PositionDto>;
  units: Array<UnitDto>;
}

const Layout = (props: StiledProps & Props): ReactElement => {
  const unitsByPosition = Object.fromEntries(
    props.units.map((unit) => [`${unit.position.x},${unit.position.y}`, unit]),
  );
  const getPair = (value: string): [number, number] => {
    const split = value.split(",");
    return [+split[0], +split[1]];
  };

  return (
    <div className={props.className}>
      {props.fields.map((position) => (
        <Position
          key={`${position.x},${position.y}`}
          value={`${position.x},${position.y}`}
          onClick={(event) => props.onClick(getPair(event.currentTarget.value))}
          environment={position}
          unit={unitsByPosition[`${position.x},${position.y}`]}
          enabledToClick={true}
          isTarget={true}
        />
      ))}
    </div>
  );
};

export const Battleground = styled(Layout)`
  margin: auto;
  display: grid;
  width: ${(props) => props.xCount * props.squareSize}px;
  height: ${(props) => props.yCount * props.squareSize}px;
  grid-template: repeat(${(p) => p.yCount}, 1fr) / repeat(
      ${(p) => p.xCount},
      1fr
    );
`;
