import { useGetAll } from "./template/useGetAll";
import { PositionDto } from "../dto/PositionDto";
import { host } from "../constant/url";

export const useGetPositions = () =>
  useGetAll<Array<PositionDto>>(host + "/positions");
