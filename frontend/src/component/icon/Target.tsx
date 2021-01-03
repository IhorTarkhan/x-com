import React, { ReactElement } from "react";

interface Props {
  color: string;
  size: string;
}

export const Target = (props: Props): ReactElement => {
  return (
    <svg
      version="1.1"
      id="Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      x="0px"
      y="0px"
      viewBox="0 0 90 90"
      style={{
        height: props.size,
        alignSelf: "center",
        display: "block",
        margin: "0 auto",
        position: "absolute",
        zIndex: 100
      }}
      xmlSpace="preserve"
    >
      <g>
        <circle
          style={{
            fill: "none",
            stroke: props.color,
            strokeWidth: 5
          }}
          cx="45"
          cy="45"
          r="35"
        />
        <rect
          x="42.5"
          y="0"
          style={{ fill: props.color }}
          width="5"
          height="10"
        />
        <rect
          x="42.5"
          y="80"
          style={{ fill: props.color }}
          width="5"
          height="10"
        />
        <rect
          x="0"
          y="42.5"
          style={{ fill: props.color }}
          width="10"
          height="5"
        />
        <rect
          x="80"
          y="42.5"
          style={{ fill: props.color }}
          width="10"
          height="5"
        />
      </g>
    </svg>
  );
};
