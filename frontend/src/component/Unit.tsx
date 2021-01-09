import React, { ReactElement, useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { UnitDto } from "../dto/UnitDto";
import { UnitType } from "../dto/UnitType";
import { Ranger } from "./icon/Ranger";
import { Grenadier } from "./icon/Grenadier";
import { Specialist } from "./icon/Specialist";
import { Sharpshooter } from "./icon/Sharpshooter";

const useStyles = makeStyles(() => ({
  root: {
    verticalAlign: "top",
    display: "inline-block",
    textAlign: "center",
  },
  health: {
    display: "block",
    fontSize: "12px",
    color: "red",
  },
  img: {
    width: "60px",
    height: "60px",
    alignSelf: "center",
    backgroundColor: "grey",
    display: "block",
    margin: "0 auto",
  },
  name: {
    display: "block",
    fontSize: "12px",
  },
}));

interface Props {
  unit: UnitDto;
}

export const Unit = (props: Props): ReactElement => {
  const classes = useStyles();
  const [avatar, setAvatar] = useState<object>();

  useEffect(() => {
    if (+UnitType[props.unit.type] === UnitType.RANGER)
      setAvatar(<Ranger color={"#98D8E8"} size={"60px"} />);
    else if (+UnitType[props.unit.type] === UnitType.SHARPSHOOTER)
      setAvatar(<Sharpshooter color={"#98D8E8"} size={"60px"} />);
    else if (+UnitType[props.unit.type] === UnitType.SPECIALIST)
      setAvatar(<Specialist color={"#98D8E8"} size={"60px"} />);
    else if (+UnitType[props.unit.type] === UnitType.GRENADIER)
      setAvatar(<Grenadier color={"#98D8E8"} size={"60px"} />);
  }, [props.unit]);

  return (
    <div className={classes.root}>
      <span className={classes.health}>
        {props.unit.health}/{props.unit.maxHealth}
      </span>
      {avatar}
      <span className={classes.name}>{props.unit.name}</span>
    </div>
  );
};
