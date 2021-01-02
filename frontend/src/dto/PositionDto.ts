import { PositionType } from "./PositionType";

export type PositionDto = {
  id: number;
  x: number;
  y: number;
  type: PositionType;
};
