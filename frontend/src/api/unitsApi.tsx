import { useGetAll } from "./template/useGetAll";
import { host } from "../constant/url";
import { UnitDto } from "../dto/UnitDto";

export const useGetUnits = () => useGetAll<Array<UnitDto>>(host + "/units");
