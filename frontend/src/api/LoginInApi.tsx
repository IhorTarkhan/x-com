import { usePost } from "./template/usePost";
import { host } from "../constant/url";
import { SignInRequest } from "../dto/request/SignInRequest";
import { LoginResponse } from "../dto/response/LoginResponse";

export const useSignInApi = (): [
  (data: SignInRequest) => void,
  LoginResponse | undefined,
  boolean | undefined,
  { message: string } | undefined
] => {
  return usePost<SignInRequest, LoginResponse>(`${host}/sign-in`);
};
export const useSignUpApi = (): [
  (data: SignInRequest) => void,
  LoginResponse | undefined,
  boolean | undefined,
  { message: string } | undefined
] => {
  return usePost<SignInRequest, LoginResponse>(`${host}/sign-up`);
};
