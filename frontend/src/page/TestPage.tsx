import React, { ReactElement, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { root } from "../constant/routes";
import { Button } from "@material-ui/core";
import { HOST } from "../constant/environment-variables";
import { useGetPositions } from "../api/positionApi";

export const TestPage = (): ReactElement => {
  const history = useHistory();
  const [up, responseData, isLoading, error] = useGetPositions();
  useEffect(() => {
    if (!responseData) return;
    console.log(responseData);
  }, [responseData]);

  const handleClickButton = (): void => {
    history.push(root);
  };

  return (
    <>
      TEST
      <br />
      <Button variant="outlined" onClick={handleClickButton}>
        To Home
      </Button>
      <br />
      {HOST}
    </>
  );
};
