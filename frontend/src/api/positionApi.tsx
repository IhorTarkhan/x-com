import { useGet } from "./template/useGet";
import { PositionDto } from "../dto/PositionDto";
import { HOST } from "../constant/environment-variables";

export const useGetPositions = () => useGet<PositionDto[]>(HOST + "/positions");
