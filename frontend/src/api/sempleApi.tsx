import { UnitDto } from "../dto/UnitDto";
import { usePost } from "./template/usePost";
import { useGet } from "./template/useGet";
import { usePut } from "./template/usePut";
import { useGetById } from "./template/useGetById";
import { useDeleteById } from "./template/useDeleteById";

export const useGetUsers = () => useGet<UnitDto[]>("https://useGetUsers");

export const useGetUserById = () =>
  useGetById<UnitDto>("https://useGetUserById");

export const usePostUser = () =>
  usePost<UnitDto, UnitDto>("https://usePostUser");

export const usePutUser = () => usePut<UnitDto, UnitDto>("https://usePutUser");

export const useDeleteUserById = () =>
  useDeleteById("https://useDeleteUserById");
