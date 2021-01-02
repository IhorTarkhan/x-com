import React, { ReactElement } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles(() => ({
  green: {
    color: "green"
  }
}));

export const MainPage = (): ReactElement => {
  const history = useHistory();
  const classes = useStyles();

  const handleClickButton = (): void => {
    const battlegroundRouting = "/battleground";
    history.push(battlegroundRouting);
  };

  return (
    <>
      Hello <i>X-COM</i>
      <br />
      <Button
        className={classes.green}
        variant="outlined"
        onClick={handleClickButton}
      >
        Battleground Page
      </Button>
    </>
  );
};
