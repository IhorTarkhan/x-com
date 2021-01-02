import React, { ReactElement } from "react";
import { Avatar, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { UnitDto } from "../dto/UnitDto";
import { PositionDto } from "../dto/PositionDto";
import { UnitType } from "../dto/UnitType";
import { PositionType } from "../dto/PositionType";

const useStyles = makeStyles(() => ({
  button: {
    border: "2px solid lightblue",
    cursor: "pointer"
  },
  item: {
    verticalAlign: "top",
    display: "inline-block",
    textAlign: "center"
  },
  img: {
    width: "60px",
    height: "60px",
    alignSelf: "center",
    backgroundColor: "grey",
    display: "block",
    margin: "0 auto"
  },
  caption: {
    display: "block",
    fontSize: "12px"
  }
}));

interface Props {
  onClick: (value: any) => void;
  value: string;
  environment: PositionDto;
  unit: UnitDto | undefined;
}

export const Box = (props: Props): ReactElement => {
  const classes = useStyles();

  function getUnit(unit: UnitDto) {
    let imagePath = "/images/";
    switch (+UnitType[unit.type]) {
      case UnitType.RANGER.valueOf():
        imagePath += "icon_ranger.svg";
        break;
      case UnitType.SHARPSHOOTER:
        imagePath += "icon_sharpshooter.svg";
        break;
      case UnitType.SPECIALIST:
        imagePath += "icon_specialist.svg";
        break;
      case UnitType.GRENADIER:
        imagePath += "icon_grenadier.svg";
        break;
    }
    return (
      <div className={classes.item}>
        <span className={classes.caption}>
          {unit.health}/{unit.maxHealth}
        </span>
        <Avatar
          className={classes.img}
          src={imagePath}
          alt={unit.type.toString()}
        />
        <span className={classes.caption}>{unit.name}</span>
      </div>
    );
  }

  function getBackgroundColor(type: PositionType) {
    switch (+PositionType[type]) {
      case PositionType.FLOOR.valueOf():
        return "#21b6ae";
      case PositionType.WALL.valueOf():
        return "#322c2c";
    }
  }

  return (
    <Button
      className={classes.button}
      onClick={props.onClick}
      value={props.value}
      style={{
        backgroundColor: getBackgroundColor(props.environment.type)
      }}
      disabled={!props.unit}
    >
      {props.unit ? getUnit(props.unit) : undefined}
    </Button>
  );
};
