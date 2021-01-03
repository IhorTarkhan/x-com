import React, { ReactElement, useEffect, useState } from "react";
import { Avatar, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { UnitDto } from "../dto/UnitDto";
import { PositionDto } from "../dto/PositionDto";
import { UnitType } from "../dto/UnitType";
import { PositionType } from "../dto/PositionType";

const useStyles = makeStyles(() => ({
  root: {
    verticalAlign: "top",
    display: "inline-block",
    textAlign: "center"
  },
  health: {
    display: "block",
    fontSize: "12px",
    color: "red"
  },
  img: {
    width: "60px",
    height: "60px",
    alignSelf: "center",
    backgroundColor: "grey",
    display: "block",
    margin: "0 auto"
  },
  name: {
    display: "block",
    fontSize: "12px"
  }
}));

interface Props {
  unit: UnitDto;
}

export const Unit = (props: Props): ReactElement => {
  const classes = useStyles();
  const [imagePath, setImagePath] = useState<string>("");

  useEffect(() => {
    if (+UnitType[props.unit.type] === UnitType.RANGER)
      setImagePath("/images/icon_ranger.svg");
    else if (+UnitType[props.unit.type] === UnitType.SHARPSHOOTER)
      setImagePath("/images/icon_sharpshooter.svg");
    else if (+UnitType[props.unit.type] === UnitType.SPECIALIST)
      setImagePath("/images/icon_specialist.svg");
    else if (+UnitType[props.unit.type] === UnitType.GRENADIER)
      setImagePath("/images/icon_grenadier.svg");
  }, [props.unit]);

  return (
    <div className={classes.root}>
      <span className={classes.health}>
        {props.unit.health}/{props.unit.maxHealth}
      </span>
      <Avatar
        className={classes.img}
        src={imagePath}
        alt={props.unit.type.toString()}
      />
      <span className={classes.name}>{props.unit.name}</span>
    </div>
  );
};
