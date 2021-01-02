import { UnitType } from "./UnitType";

export type UnitDto = {
  id: number;
  name: string;
  type: UnitType;
  maxHealth: number;
  health: number;
};
