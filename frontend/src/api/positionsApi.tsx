import { useGet } from "./template/useGet";
import { PositionDto } from "../dto/PositionDto";
import { host } from "../constant/url";

export const useGetPositions = () =>
  useGet<Array<PositionDto>>(host + "/positions");
