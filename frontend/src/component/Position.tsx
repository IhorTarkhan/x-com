import React, { ReactElement, useEffect, useState } from "react";
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { UnitDto } from "../dto/UnitDto";
import { PositionDto } from "../dto/PositionDto";
import { PositionType } from "../dto/PositionType";
import { Unit } from "./Unit";

const useStyles = makeStyles(() => ({
  button: {
    border: "2px solid lightblue",
    cursor: "pointer"
  }
}));

interface Props {
  onClick: (value: any) => void;
  value: string;
  environment: PositionDto;
  unit: UnitDto | undefined;
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
      disabled={!props.unit}
    >
      {props.unit ? <Unit unit={props.unit} /> : undefined}
    </Button>
  );
};
