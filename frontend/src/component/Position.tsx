import React, { ReactElement, useEffect, useState } from "react";
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { UnitDto } from "../dto/UnitDto";
import { PositionDto } from "../dto/PositionDto";
import { PositionType } from "../dto/PositionType";
import { Unit } from "./Unit";
import { Target } from "./icon/Target";

const useStyles = makeStyles(() => ({
  button: {
    border: "2px solid lightblue",
    cursor: "pointer",
  },
  target: {
    width: "120px",
    height: "100px",
    alignSelf: "center",
    display: "block",
    margin: "0 auto",
    position: "absolute",
    zIndex: 100,
  },
}));

interface Props {
  value: string;
  onClick: (value: any) => void;
  environment: PositionDto;
  unit: UnitDto | undefined;
  enabledToClick: boolean;
  isTarget: boolean;
}

export const Position = (props: Props): ReactElement => {
  const classes = useStyles();
  const [background, setBackground] = useState<string>();

  useEffect(() => {
    if (+PositionType[props.environment.type] === PositionType.FLOOR)
      setBackground("#21b6ae");
    else if (+PositionType[props.environment.type] === PositionType.WALL)
      setBackground("#322c2c");
  }, [props.environment]);

  return (
    <Button
      className={classes.button}
      onClick={props.onClick}
      value={props.value}
      style={{ backgroundColor: background }}
      disabled={!props.enabledToClick}
    >
      {props.unit && <Unit unit={props.unit} />}
      {props.isTarget && <Target color={"red"} size={"80px"} />}
      {props.isTarget && <Target color={"aqua"} size={"80px"} />}
    </Button>
  );
};
