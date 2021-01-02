import React, { ReactElement, useEffect, useState } from "react";
import { useGetPositions } from "../api/positionApi";
import { Battleground } from "../component/Battleground";
import { PositionDto } from "../dto/PositionDto";
import { Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { homeRouting } from "../constant/routes";

export const BattlegroundPage = (): ReactElement => {
  const history = useHistory();

  const [
    updatePositions,
    responsePositions,
    isPositionLoading,
    positionLoadingError
  ] = useGetPositions();
  const [positions, setPositions] = useState<Array<PositionDto>>([]);
  const [xSize, setXSize] = useState<number>(0);
  const [ySize, setYSize] = useState<number>(0);

  useEffect(() => {
    if (!responsePositions) return;
    initDefaultState(responsePositions);
  }, [responsePositions]);

  useEffect(() => {
    if (!positionLoadingError) return;
    alert(positionLoadingError.message);
    history.push(homeRouting);
  }, [positionLoadingError, history]);

  function initDefaultState(positions: Array<PositionDto>) {
    const maxX =
      Math.max.apply(
        Math,
        positions.map(o => o.x)
      ) + 1;
    const maxY =
      Math.max.apply(
        Math,
        positions.map(o => o.y)
      ) + 1;
    const positionInList = positions.sort(
      (p1, p2) => p1.y * maxY + p1.x - (p2.y * maxY + p2.x)
    );
    positionInList
      .map(p => p.y * maxY + p.x)
      .forEach((value, index) => {
        if (value !== index) {
          console.error(
            "incorrect position list received",
            positions,
            positionInList
          );
          alert("incorrect position list received");
          history.push(homeRouting);
        }
      });

    setXSize(maxX);
    setYSize(maxY);
    setPositions(positionInList);
  }

  const handleClickButton = ([x, y]: number[]): void => {
    alert(`x:${x} y:${y}`);
  };

  return (
    <>
      {!positions || !isPositionLoading ? (
        <Battleground
          xCount={xSize}
          yCount={ySize}
          squareSize={70}
          fields={positions}
          onClick={handleClickButton}
        />
      ) : (
        "Loading..."
      )}
      <Button onClick={() => updatePositions()}>Update fields</Button>
    </>
  );
};
