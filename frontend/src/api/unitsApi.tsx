import { useGet } from "./template/useGet";
import { host } from "../constant/url";
import { UnitDto } from "../dto/UnitDto";

export const useGetUnits = () => useGet<Array<UnitDto>>(host + "/units");
