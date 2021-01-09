// eslint-disable-next-line
import React, { ReactElement } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { Grenadier } from "../component/icon/Grenadier";
import { Target } from "../component/icon/Target";
import { Ranger } from "../component/icon/Ranger";
import { Sharpshooter } from "../component/icon/Sharpshooter";
import { Specialist } from "../component/icon/Specialist";

const useStyles = makeStyles(() => ({
  green: {
    color: "green",
  },
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
      <Target color={"#98D8E8"} size={"100px"} />
      <Target color={"#FF0000"} size={"100px"} />
      <Grenadier color={"#98D8E8"} size={"100px"} />
      <Grenadier color={"#FF0000"} size={"100px"} />
      <Ranger color={"#98D8E8"} size={"100px"} />
      <Ranger color={"#FF0000"} size={"100px"} />
      <Sharpshooter color={"#98D8E8"} size={"100px"} />
      <Sharpshooter color={"#FF0000"} size={"100px"} />
      <Specialist color={"#98D8E8"} size={"100px"} />
      <Specialist color={"#FF0000"} size={"100px"} />
    </>
  );
};
