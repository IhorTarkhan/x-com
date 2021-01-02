import { PositionType } from "./PositionType";

export type PositionDto = {
  id: number;
  x: string;
  y: string;
  type: PositionType;
};
