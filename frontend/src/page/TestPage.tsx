import React, { ReactElement, useEffect, useState } from "react";
import { useGetPositions } from "../api/positionApi";
import { Battleground } from "../component/Battleground";
import { PositionDto } from "../dto/PositionDto";

export const TestPage = (): ReactElement => {
  const [up, responseData, isLoading, error] = useGetPositions();
  const [positions, setPositions] = useState<Array<PositionDto>>([]);
  const [xSize, setXSize] = useState<number>(0);
  const [ySize, setYSize] = useState<number>(0);
  useEffect(() => {
    if (!responseData) return;
    const maxX =
      Math.max.apply(
        Math,
        responseData.map(o => o.x)
      ) + 1;
    const maxY =
      Math.max.apply(
        Math,
        responseData.map(o => o.y)
      ) + 1;
    setXSize(maxX);
    setYSize(maxY);
    setPositions(
      responseData.sort((a, b) => a.y * maxY + a.x - (b.y * maxY + b.x))
    );
  }, [responseData]);

  const handleClickButton = ([x, y]: number[]): void => {
    alert(`x:${x} y:${y}`);
  };

  return (
    <>
      {positions ? (
        <Battleground
          xCount={xSize}
          yCount={ySize}
          squareSize={70}
          fields={positions}
          onClick={handleClickButton}
        />
      ) : (
        "Loading"
      )}
    </>
  );
};
