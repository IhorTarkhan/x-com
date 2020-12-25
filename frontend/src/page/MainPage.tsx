import React, { ReactElement, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Button } from "@material-ui/core";
import { usePost } from "../api/usePost";
import { HOST } from "../constant/environment-variables";

export const MainPage = (): ReactElement => {
  const history = useHistory();
  const [setPostingData, responseData, isLoading, error] = usePost<
    { id: number | undefined; text: string },
    { id: number; text: string }
  >(HOST);

  const handleClickButton = (): void => {
    // history.push(test);
    setPostingData({ id: undefined, text: "someText" });
  };
  useEffect(() => {
    console.log(responseData);
  }, [responseData]);

  return (
    <>
      Hello <i>X-COM</i>
      <br />
      <Button variant="outlined" onClick={handleClickButton}>
        Test Page
      </Button>
    </>
  );
};
