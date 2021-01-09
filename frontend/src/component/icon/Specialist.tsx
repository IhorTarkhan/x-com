// eslint-disable-next-line
import React, { ReactElement, useEffect, useState } from "react";

interface Props {
  color: string;
  size: string;
}

export const Specialist = (props: Props): ReactElement => {
  const [red, setRed] = useState<number>(0);
  const [green, setGreen] = useState<number>(0);
  const [blue, setBlue] = useState<number>(0);

  const [mainColor, setMainColor] = useState<string>("");
  const [lightColor, setLightColor] = useState<string>("");

  useEffect(() => {
    setRed(parseInt(props.color.substr(1, 2), 16));
    setGreen(parseInt(props.color.substr(3, 2), 16));
    setBlue(parseInt(props.color.substr(5, 2), 16));
  }, [props.color]);

  const toHex = (x: number): string => {
    const hex = x.toString(16);
    return hex.length === 1 ? "0" + hex : hex;
  };
  useEffect(() => {
    setMainColor(`#${toHex(red)}${toHex(green)}${toHex(blue)}`);

    let lightRedColor = toHex(Math.floor(red / 1.15));
    let lightGreenColor = toHex(Math.floor(green / 1.15));
    let lightBlueColor = toHex(Math.floor(blue / 1.15));
    setLightColor(`#${lightRedColor}${lightGreenColor}${lightBlueColor}`);
  }, [red, green, blue]);

  return (
    <svg
      version="1.1"
      id="Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      x="0px"
      y="0px"
      viewBox="0 0 90 90"
      style={{ height: props.size }}
      xmlSpace="preserve"
    >
      <g>
        <rect
          x="14.6"
          y="14.7"
          transform="matrix(0.7071 0.7071 -0.7071 0.7071 44.979 -18.5671)"
          style={{
            fill: mainColor,
            stroke: "black",
            strokeWidth: 2.9422,
            strokeMiterlimit: 10,
          }}
          width="60.7"
          height="60.7"
        />
        <rect
          x="21.1"
          y="21.2"
          transform="matrix(0.7071 0.7071 -0.7071 0.7071 44.9812 -18.5669)"
          width="47.6"
          height="47.6"
        />
      </g>
      <g>
        <g>
          <g>
            <path
              style={{ fill: mainColor }}
              d="M39.9,70.2v-4.3c-1.8-0.5-3.5-1.1-5.1-2l-3.3,3.3l-8.3-8.3l3.3-3.3c-0.9-1.7-1.6-3.5-2.1-5.3h-4.5
				V38.4l5,0c0.4-1.1,0.8-2.1,1.3-3.1l-3.4-3.4l8.3-8.3l3.1,3.1c1.6-0.9,3.2-1.6,5-2.1v-4.7H51v4.7c1.8,0.5,3.6,1.3,5.2,2.3l3.2-3.2
				l8.3,8.3l-3.5,3.6c0.6,1.2,1.1,2.5,1.5,3.8h4.7v11.8h-4.7c-0.5,1.8-1.3,3.6-2.3,5.2l3.3,3.3l-8.3,8.3l-3.6-3.6
				c-1,0.5-2,0.9-3.1,1.3v4.7H39.9z"
            />
            <path
              d="M49.7,21.1v4.4c2.3,0.5,4.6,1.5,6.7,2.9l3.1-3.1l6.6,6.6l-3.3,3.3c0.9,1.7,1.6,3.5,2.1,5.3h4.5v9.3h-4.5
				c-0.6,2.4-1.6,4.6-2.9,6.6l3.1,3.1l-6.6,6.6L55,62.7c-1.4,0.8-3,1.4-4.6,1.9v4.4h-9.3v-4.1c-2.4-0.5-4.6-1.4-6.5-2.6l-3.1,3.1
				l-6.6-6.6l3.1-3.1c-1.3-2-2.2-4.3-2.7-6.8h-4.3v-9.3l4.7,0c0.5-1.6,1.1-3.1,1.9-4.6l-3.1-3.1l6.6-6.6l2.9,2.9
				c1.9-1.3,4.1-2.2,6.4-2.8v-4.5H49.7 M52.2,18.6h-2.5h-9.3H38v2.5v2.6c-1.2,0.4-2.4,0.9-3.5,1.5l-1.6-1.6l-1.8-1.8l-1.8,1.8
				l-6.6,6.6L21,31.9l1.8,1.8l1.8,1.8c-0.2,0.5-0.5,1-0.7,1.6l-2.9,0l-2.5,0v2.5v9.3v2.5h2.5h2.3c0.4,1.3,0.9,2.6,1.5,3.9L23.2,57
				l-1.8,1.8l1.8,1.8l6.6,6.6l1.8,1.8l1.8-1.8l1.8-1.8c1.2,0.6,2.4,1.1,3.6,1.4v2.1v2.5h2.5h9.3h2.5v-2.5v-2.5
				c0.5-0.2,1.1-0.4,1.6-0.6l2.1,2.1l1.8,1.8l1.8-1.8l6.6-6.6l1.8-1.8l-1.8-1.8L65,56.1c0.7-1.2,1.2-2.5,1.6-3.7h2.6h2.5v-2.5v-9.3
				V38h-2.5h-2.6c-0.3-0.8-0.6-1.5-0.9-2.3l2-2l1.8-1.8l-1.8-1.8l-6.6-6.6l-1.8-1.8l-1.8,1.8L56,25.3c-1.2-0.7-2.5-1.2-3.8-1.6v-2.6
				V18.6L52.2,18.6z"
            />
          </g>
          <path
            d="M60.4,45.1c0,8.5-6.9,15.3-15.3,15.3c-8.4,0-15.3-6.8-15.3-15.3c0-8.4,6.8-15.3,15.3-15.3C53.5,29.8,60.4,36.6,60.4,45.1z
			"
          />
          <circle
            style={{
              fill: "none",
              stroke: "black",
              strokeWidth: 1.0223,
              strokeMiterlimit: 10,
            }}
            cx="45.1"
            cy="45.1"
            r="17.3"
          />
        </g>
        <g style={{ opacity: 0.75 }}>
          <path
            style={{ fill: lightColor }}
            d="M39.2,57.8c-0.1,0-0.3,0-0.4-0.1c-0.3-0.2-0.4-0.5-0.3-0.8l3-9.7h-3c-0.2,0-0.5-0.1-0.6-0.3
			c-0.1-0.2-0.2-0.4-0.1-0.7l4.3-12.5c0.1-0.3,0.4-0.5,0.7-0.5h10.4c0.3,0,0.5,0.1,0.6,0.4s0.1,0.5,0,0.7l-5.1,8.2h3.5
			c0.3,0,0.6,0.2,0.7,0.4c0.1,0.3,0.1,0.6-0.1,0.8l-13,13.8C39.6,57.7,39.4,57.8,39.2,57.8z"
          />
          <path
            d="M53.2,33.9l-5.8,9.3h4.9L39.2,57l3.3-10.6h-3.9l4.3-12.5H53.2 M52.3,43.3L52.3,43.3 M53.2,32.5H42.9c-0.6,0-1.2,0.4-1.4,1
			L37.2,46c-0.2,0.4-0.1,0.9,0.2,1.3c0.3,0.4,0.7,0.6,1.2,0.6h2l-2.7,8.7c-0.2,0.6,0.1,1.3,0.7,1.7c0.2,0.1,0.5,0.2,0.7,0.2
			c0.4,0,0.8-0.2,1.1-0.5l13-13.8c0.3-0.3,0.4-0.6,0.4-1c0-0.8-0.6-1.5-1.4-1.5h0H50l4.4-7.1c0.3-0.4,0.3-1,0-1.5
			C54.3,32.8,53.8,32.5,53.2,32.5L53.2,32.5z"
          />
        </g>
      </g>
    </svg>
  );
};
