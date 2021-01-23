import React, { ReactElement, useEffect, useState } from "react";
import { Button } from "@material-ui/core";
import { SignInPopup } from "./SignInPopup";
import { useSignUpApi } from "../api/LoginInApi";
import { SignInRequest } from "../dto/request/SignInRequest";
import { PLAYER, setCookie } from "../util/cookie";

export const Authorisation = (): ReactElement => {
  const [isSignIn, setIsSignIn] = useState<boolean>(false);

  const [signIn, responseData, , error] = useSignUpApi();
  useEffect(() => {
    if (error) alert(error.message);
  }, [error]);

  useEffect(() => {
    if (responseData) {
      setCookie(PLAYER, responseData.accessToken);
    }
  }, [responseData]);

  return (
    <>
      <Button onClick={() => setIsSignIn(true)}>Sign In</Button>
      <Button>Sign Up</Button>
      <SignInPopup
        isOpen={isSignIn}
        close={() => setIsSignIn(false)}
        signIn={(request: SignInRequest) => signIn(request)}
      />
    </>
  );
};
