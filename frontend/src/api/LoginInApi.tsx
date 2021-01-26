import { usePost } from "./template/usePost";
import { host, playerUrl } from "../constant/url";
import { SignInRequest } from "../dto/request/SignInRequest";
import { LoginResponse } from "../dto/response/LoginResponse";

export const useSignInPostApi = () =>
  usePost<SignInRequest, LoginResponse>(`${host}${playerUrl}/sign-in`);

export const useSignUpPostApi = () =>
  usePost<SignInRequest, LoginResponse>(`${host}${playerUrl}/sign-up`);
