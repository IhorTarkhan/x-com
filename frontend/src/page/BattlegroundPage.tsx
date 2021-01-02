import React, { ReactElement, useEffect, useState } from "react";
import { useGetPositions } from "../api/positionsApi";
import { Battleground } from "../component/Battleground";
import { PositionDto } from "../dto/PositionDto";
import { Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { homeRouting } from "../constant/routes";
import { useGetUnits } from "../api/unitsApi";

export const BattlegroundPage = (): ReactElement => {
  const history = useHistory();

  const [
    updatePositions,
    responsePositions,
    isPositionLoading,
    positionsLoadingError
  ] = useGetPositions();
  const [
    updateUnits,
    responseUnits,
    isUnitsLoading,
    unitsLoadingError
  ] = useGetUnits();
  const [positions, setPositions] = useState<Array<PositionDto>>([]);
  const [xSize, setXSize] = useState<number>(0);
  const [ySize, setYSize] = useState<number>(0);

  useEffect(() => {
    if (!responsePositions) return;
    const maxX =
      Math.max.apply(
        Math,
        responsePositions.map(o => o.x)
      ) + 1;
    const maxY =
      Math.max.apply(
        Math,
        responsePositions.map(o => o.y)
      ) + 1;
    const positionInList = responsePositions.sort(
      (p1, p2) => p1.y * maxY + p1.x - (p2.y * maxY + p2.x)
    );
    positionInList
      .map(p => p.y * maxY + p.x)
      .forEach((value, index) => {
        if (value !== index) {
          console.error(
            "incorrect position list received",
            responsePositions,
            positionInList
          );
          alert("incorrect position list received");
          history.push(homeRouting);
        }
      });

    setXSize(maxX);
    setYSize(maxY);
    setPositions(positionInList);
  }, [responsePositions, history]);
  useEffect(() => {
    if (!responseUnits) return;
    console.log(responseUnits);
  }, [responseUnits]);

  useEffect(() => {
    if (!positionsLoadingError) return;
    alert(positionsLoadingError.message);
    history.push(homeRouting);
  }, [positionsLoadingError, history]);
  useEffect(() => {
    if (!unitsLoadingError) return;
    alert(unitsLoadingError.message);
    history.push(homeRouting);
  }, [unitsLoadingError, history]);

  const handleClickOnCell = ([x, y]: number[]): void => {
    alert(`x:${x} y:${y}`);
  };

  return (
    <>
      {!!positions &&
      !!responseUnits &&
      !isPositionLoading &&
      !isUnitsLoading ? (
        <Battleground
          xCount={xSize}
          yCount={ySize}
          squareSize={130}
          fields={positions}
          units={responseUnits}
          onClick={handleClickOnCell}
        />
      ) : (
        "Loading..."
      )}
      <Button onClick={updatePositions}>Update fields</Button>
      <Button onClick={updateUnits}>Update units</Button>
    </>
  );
};
