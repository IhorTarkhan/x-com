import { useGet } from "./template/useGet";
import { HOST } from "../constant/environment-variables";
import { UnitDto } from "../dto/UnitDto";

export const useGetUnits = () => useGet<Array<UnitDto>>(HOST + "/units");
