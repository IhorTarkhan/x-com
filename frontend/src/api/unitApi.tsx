import { UnitDto } from "../dto/UnitDto";
import { usePost } from "./template/usePost";
import { useGet } from "./template/useGet";
import { usePut } from "./template/usePut";
import { useGetById } from "./template/useGetById";
import { useDeleteById } from "./template/useDeleteById";

export const useGetUsers = () =>
  useGet<UnitDto[]>("https://google.com/aaabbbcccdd");

export const useGetUserById = () =>
  useGetById<UnitDto>("https://google.com/aaabbbcccdd");

export const usePostUser = () =>
  usePost<UnitDto, UnitDto>("https://google.com/aaa");

export const usePutUser = () =>
  usePut<UnitDto, UnitDto>("https://google.com/aaab");

export const useDeleteUserById = () => useDeleteById("https://google.com/aaab");
