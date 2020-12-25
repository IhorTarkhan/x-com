import React, { ReactElement } from "react";
import { useHistory } from "react-router-dom";
import { root } from "../constant/routes";
import { Button } from "@material-ui/core";
import { HOST } from "../constant/environment-variables";

export const TestPage = (): ReactElement => {
  const history = useHistory();

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
