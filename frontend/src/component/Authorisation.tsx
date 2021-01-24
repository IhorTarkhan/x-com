import React, { ReactElement, useEffect, useState } from "react";
import { Button } from "@material-ui/core";
import { SignInPopup } from "./SignInPopup";
import { useSignUpApi } from "../api/LoginInApi";
import { SignInRequest } from "../dto/request/SignInRequest";
import { PLAYER, PLAYER_LONG, setCookie } from "../util/cookie";

export const Authorisation = (): ReactElement => {
  const [isSignIn, setIsSignIn] = useState<boolean>(false);

  const [signIn, responseData, , error] = useSignUpApi();
  useEffect(() => {
    if (error) {
      if (error.status === 409) {
        alert(error.message);
      } else {
        console.error(error);
      }
    }
  }, [error]);

  useEffect(() => {
    if (responseData) {
      setCookie(PLAYER, responseData.jwtShort);
      setCookie(PLAYER_LONG, responseData.jwtLong);
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
