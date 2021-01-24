import { usePost } from "./template/usePost";
import { host, playerUrl } from "../constant/url";
import { SignInRequest } from "../dto/request/SignInRequest";
import { LoginResponse } from "../dto/response/LoginResponse";
import { ErrorResponse } from "./template/ErrorResponse";

export const useSignInApi = (): [
  (data: SignInRequest) => void,
  LoginResponse | undefined,
  boolean | undefined,
  { message: string } | undefined
] => {
  return usePost<SignInRequest, LoginResponse>(`${host}${playerUrl}/sign-in`);
};
export const useSignUpApi = (): [
  (data: SignInRequest) => void,
  LoginResponse | undefined,
  boolean | undefined,
  ErrorResponse | undefined
] => {
  return usePost<SignInRequest, LoginResponse>(`${host}${playerUrl}/sign-up`);
};
