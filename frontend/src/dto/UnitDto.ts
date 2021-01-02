import { UnitType } from "./UnitType";
import { PositionDto } from "./PositionDto";

export type UnitDto = {
  id: number;
  name: string;
  type: UnitType;
  position: PositionDto;
  maxHealth: number;
  health: number;
};
