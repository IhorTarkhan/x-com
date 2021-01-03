import React, { ReactElement, useEffect, useState } from "react";

interface Props {
  color: string;
  size: string;
}

export const Grenadier = (props: Props): ReactElement => {
  const [red, setRed] = useState<number>(0);
  const [green, setGreen] = useState<number>(0);
  const [blue, setBlue] = useState<number>(0);

  const [mainColor, setMainColor] = useState<string>("");
  const [lightColor, setLightColor] = useState<string>("");
  const [darkColor, setDarkColor] = useState<string>("");

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

    let lightRedColor = toHex(Math.floor(red / 2));
    let lightGreenColor = toHex(Math.floor(green / 2));
    let lightBlueColor = toHex(Math.floor(blue / 2));
    setLightColor(`#${lightRedColor}${lightGreenColor}${lightBlueColor}`);

    let darkRedColor = toHex(Math.floor(red / 3));
    let darkGreenColor = toHex(Math.floor(green / 3));
    let darkBlueColor = toHex(Math.floor(blue / 3));
    setDarkColor(`#${darkRedColor}${darkGreenColor}${darkBlueColor}`);
  }, [red, green, blue]);

  return (
    <svg
      version="1.1"
      id="Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      x="0px"
      y="0px"
      viewBox="0 0 112.5 112.5"
      xmlSpace="preserve"
      style={{ height: props.size }}
    >
      <g>
        <g>
          <polygon
            style={{
              fill: mainColor,
              stroke: "black",
              strokeWidth: 3.6798,
              strokeMiterlimit: 10
            }}
            points="56.3,109.9 2.6,56.3 56.3,2.6
			109.9,56.3 		"
          />
          <polygon points="56.3,98.4 14.1,56.3 56.3,14.1 98.4,56.3 		" />
        </g>
        <g>
          <polygon
            style={{ fill: darkColor }}
            points="44.7,82.8 18.8,55.6 23.7,50.5 		"
          />
          <polygon
            style={{ fill: darkColor }}
            points="46.8,79.8 28.6,41.9 35.2,35.3 		"
          />
          <polygon
            style={{ fill: darkColor }}
            points="52.8,83.6 42.8,30.5 52.8,22.5 53.6,83.6 		"
          />
          <polygon
            style={{ fill: darkColor }}
            points="57.8,74.7 61.5,23 66.3,28 		"
          />
          <polygon
            style={{ fill: darkColor }}
            points="60.3,80.2 74.9,36.5 84.6,46.1 		"
          />
          <polygon
            style={{ fill: darkColor }}
            points="64.7,82.4 89.9,50.9 94.8,56.3 		"
          />
        </g>
        <g>
          <path
            style={{ fill: lightColor }}
            d="M47.6,87.5l1.1-1.2c0,0,3.5-3.9,3.5-15.5C52.2,59.2,45.1,53,45,53l-1.3-1.1l11.6-0.4v-0.1l0.7,0
			l0.7,0l0,0.1l11.7,0.5L67.1,53c-0.1,0.1-7.2,6.3-7.2,17.9c0,11.7,3.3,15.5,3.4,15.5l1.1,1.2H47.6z"
          />
          <path
            d="M56.1,52L56.1,52l10.5,0.4c0,0-7.5,6.4-7.5,18.4c0,12.1,3.6,16,3.6,16h-6.6H56h-6.8c0,0,3.7-3.9,3.7-16
			c0-12.1-7.5-18.4-7.5-18.4L56,52v0H56.1L56.1,52 M54.6,50.6v0.1l-9.2,0.4l-3.5,0.1l2.7,2.3c0.1,0.1,7,6.1,7,17.4
			c0,11.2-3.3,15-3.4,15l-2.1,2.3l3.1,0H56h0.2h6.6h3.1l-2.1-2.3c0,0-3.2-3.8-3.2-15c0-11.3,6.9-17.3,7-17.4l2.6-2.3l-3.5-0.1
			l-9.2-0.4v-0.1l-1.4,0l0,0l0,0L54.6,50.6L54.6,50.6z"
          />
        </g>
        <path
          style={{
            fill: mainColor,
            stroke: "black",
            strokeWidth: 2.5014,
            strokeMiterlimit: 10
          }}
          d="M81.6,40.5c0-7.2-7.5-13-16.8-13
		c-0.3,0-0.5,0-0.8,0c-2.6-1.4-5.8-2.2-9.2-2.2c-3.6,0-6.8,0.9-9.5,2.4c-8.7,0.6-15.5,6.3-15.5,13.1c0,2,0.6,3.8,1.6,5.5
		c-0.3,0.6-0.5,1.3-0.5,2c0,3.6,3.8,6.5,8.4,6.5c1.7,0,3.3-0.4,4.6-1.1c1,0.1,2,0.2,3,0.2c1.3,0,2.7-0.1,3.9-0.3
		c1.2,1.4,3.2,2.4,5.6,2.4c2.5,0,4.7-1.1,5.8-2.7c0.8,0.1,1.7,0.2,2.6,0.2c0.8,0,1.6-0.1,2.4-0.2c1.5,0.9,3.3,1.5,5.3,1.5
		c4.6,0,8.4-2.9,8.4-6.5c0-1-0.3-1.8-0.8-2.7C81.1,44.1,81.6,42.4,81.6,40.5z"
        />
        <path
          style={{
            fill: mainColor,
            stroke: "black",
            strokeWidth: 1.0846,
            strokeMiterlimit: 10
          }}
          d="M66.2,82.4c-0.6,0-1.1,0.3-1.3,0.8
		c-0.4-0.5-0.9-0.8-1.6-0.8c-0.5,0-1,0.2-1.4,0.6c-0.2-0.4-0.7-0.7-1.2-0.7c-0.4,0-0.8,0.2-1.1,0.6c-0.4-0.6-1-1.1-1.8-1.1
		c-0.6,0-1.2,0.3-1.6,0.8c-0.4-0.3-0.8-0.4-1.3-0.4c-0.6,0-1.2,0.3-1.6,0.7c-0.3-0.3-0.6-0.5-1.1-0.5c-0.4,0-0.8,0.2-1.1,0.6
		c-0.4-0.6-1-1.1-1.8-1.1c-0.6,0-1.2,0.3-1.6,0.8c-0.4-0.3-0.8-0.4-1.3-0.4c-1.3,0-3.3,1.5-2.4,2.5c1.5,1.7,1.1,1.4,2.4,2.5
		c0.5,0.5,9.6,9.1,9.6,9.1c0.4,0.5,10.3-10.2,10.3-10.2l0.9-0.9c0.3-0.3,0.5-0.7,0.5-1.2C67.8,83.2,67.1,82.4,66.2,82.4z"
        />
        <g>
          <path
            style={{ fill: mainColor }}
            d="M55.9,71.4c-9.9,0-24.6-1.5-24.6-5.6c0-2.7,6.4-4.1,11.8-4.8c0,0,0.1,0,0.1,0
			c0.3,0,0.6,0.2,0.7,0.6c0.1,0.4-0.2,0.7-0.6,0.8c-4.1,0.8-4.5,1.6-4.5,1.6c0.3,0.9,6.2,2.5,17,2.5c10.7,0,16.7-1.7,17-2.6l0,0
			c0,0-0.5-0.9-5.1-1.7c-0.4-0.1-0.6-0.4-0.6-0.8c0.1-0.3,0.3-0.6,0.7-0.6c0,0,0.1,0,0.1,0c5.8,0.7,12.6,2.1,12.6,4.9
			C80.5,69.9,65.8,71.4,55.9,71.4z"
          />
          <path
            d="M67.8,61.6c7.2,0.8,12,2.4,12,4.3c0,2.7-10.7,4.9-23.9,4.9c-13.2,0-23.9-2.2-23.9-4.9c0-1.7,4.5-3.3,11.2-4.2
			c-3.1,0.6-5.1,1.4-5.1,2.3c0,1.8,7.9,3.3,17.7,3.3c9.8,0,17.7-1.5,17.7-3.3C73.5,63,71.3,62.2,67.8,61.6 M67.8,60.2
			c-0.7,0-1.3,0.5-1.4,1.2c-0.1,0.7,0.4,1.4,1.1,1.6c2.1,0.4,3.3,0.7,3.9,1c-1.9,0.8-7.3,1.9-15.7,1.9c-8.5,0-13.8-1.1-15.7-1.9
			c0.6-0.2,1.6-0.6,3.4-0.9c0.7-0.1,1.2-0.8,1.1-1.6c-0.1-0.7-0.7-1.2-1.4-1.2c-0.1,0-0.1,0-0.2,0c-12.4,1.6-12.4,4.6-12.4,5.5
			c0,6.1,22.7,6.3,25.3,6.3s25.3-0.2,25.3-6.3c0-1,0-4.1-13.3-5.6C67.9,60.2,67.9,60.2,67.8,60.2L67.8,60.2z"
          />
        </g>
        <path
          style={{
            fill: "none",
            stroke: "black",
            strokeWidth: 1.2507,
            strokeMiterlimit: 10
          }}
          d="M39.6,35.3c0,0-5.9,3.5-2.5,6.3
		c0,0-0.6,1.5,1.3,1.6c0,0,1.4,3,3.4,1.5c0,0,3.1,2.2,5.4-0.5"
        />
        <path
          style={{
            fill: "none",
            stroke: "black",
            strokeWidth: 1.2507,
            strokeMiterlimit: 10
          }}
          d="M55.6,36.8c0,0,0.9-2.4,2.9-1.1
		c0,0,1.9-4.2,4.4-0.6c0,0,2.9-6,5.5,0.1"
        />
        <path
          style={{
            fill: "none",
            stroke: "black",
            strokeWidth: 1.2507,
            strokeMiterlimit: 10
          }}
          d="M62.1,45.5c0,0,6.2,4.9,13.3-2.7"
        />
      </g>
    </svg>
  );
};
