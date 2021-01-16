import React, { ReactElement, useEffect, useState } from "react";

interface Props {
  color: string;
  size: string;
}

export const Sharpshooter = (props: Props): ReactElement => {
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
          x="175.6"
          y="268.6"
          transform="matrix(0.7071 0.7071 -0.7071 0.7071 271.6722 -58.034)"
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
          x="182.1"
          y="275.1"
          transform="matrix(0.7071 0.7071 -0.7071 0.7071 271.6744 -58.0336)"
          width="47.6"
          height="47.6"
        />
        <g>
          <path
            style={{ fill: mainColor }}
            d="M205.9,323c-13.3,0-24.1-10.8-24.1-24.1s10.8-24.1,24.1-24.1s24.1,10.8,24.1,24.1
			S219.2,323,205.9,323z M205.9,282.6c-9,0-16.3,7.3-16.3,16.3s7.3,16.3,16.3,16.3s16.3-7.3,16.3-16.3S214.9,282.6,205.9,282.6z"
          />
          <path
            d="M205.9,276.3c12.5,0,22.6,10.1,22.6,22.6c0,12.5-10.1,22.6-22.6,22.6c-12.5,0-22.6-10.1-22.6-22.6
			C183.3,286.4,193.4,276.3,205.9,276.3 M205.9,316.7c9.8,0,17.8-8,17.8-17.8c0-9.8-8-17.8-17.8-17.8c-9.8,0-17.8,8-17.8,17.8
			C188.1,308.7,196.1,316.7,205.9,316.7 M205.9,273.3c-14.1,0-25.6,11.5-25.6,25.6c0,14.1,11.5,25.6,25.6,25.6
			c14.1,0,25.6-11.5,25.6-25.6C231.5,284.8,220,273.3,205.9,273.3L205.9,273.3z M205.9,313.8c-8.2,0-14.8-6.7-14.8-14.8
			c0-8.2,6.7-14.8,14.8-14.8c8.2,0,14.8,6.7,14.8,14.8C220.7,307.1,214.1,313.8,205.9,313.8L205.9,313.8z"
          />
        </g>
        <rect
          x="204.2"
          y="270.4"
          style={{ fill: mainColor }}
          width="3.4"
          height="15.1"
        />
        <rect
          x="204.2"
          y="312.2"
          style={{ fill: mainColor }}
          width="3.4"
          height="15.1"
        />
        <rect
          x="219.2"
          y="297.2"
          style={{ fill: mainColor }}
          width="15.1"
          height="3.4"
        />
        <rect
          x="177.4"
          y="297.2"
          style={{ fill: mainColor }}
          width="15.1"
          height="3.4"
        />
        <circle style={{ fill: mainColor }} cx="205.9" cy="298.9" r="3.2" />
        <circle
          style={{
            opacity: 0.5,
            fill: "none",
            stroke: lightColor,
            strokeWidth: 1.4711,
            strokeMiterlimit: 10,
          }}
          cx="205.9"
          cy="298.9"
          r="10.4"
        />
      </g>
      <g>
        <rect
          x="14.6"
          y="14.6"
          transform="matrix(0.7071 0.7071 -0.7071 0.7071 44.9042 -18.5982)"
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
          y="21.1"
          transform="matrix(0.7071 0.7071 -0.7071 0.7071 44.9046 -18.5982)"
          width="47.6"
          height="47.6"
        />
        <g>
          <path
            style={{ fill: mainColor }}
            d="M44.9,69c-13.3,0-24.1-10.8-24.1-24.1c0-13.3,10.8-24.1,24.1-24.1C58.2,20.8,69,31.6,69,44.9
			C69,58.2,58.2,69,44.9,69z M44.9,28.6c-9,0-16.3,7.3-16.3,16.3s7.3,16.3,16.3,16.3c9,0,16.3-7.3,16.3-16.3S53.9,28.6,44.9,28.6z"
          />
          <path
            d="M44.9,22.3c12.5,0,22.6,10.1,22.6,22.6c0,12.5-10.1,22.6-22.6,22.6c-12.5,0-22.6-10.1-22.6-22.6
			C22.3,32.4,32.4,22.3,44.9,22.3 M44.9,62.7c9.8,0,17.8-8,17.8-17.8c0-9.8-8-17.8-17.8-17.8c-9.8,0-17.8,8-17.8,17.8
			C27.1,54.7,35.1,62.7,44.9,62.7 M44.9,19.3c-14.1,0-25.6,11.5-25.6,25.6c0,14.1,11.5,25.6,25.6,25.6C59,70.5,70.5,59,70.5,44.9
			C70.5,30.8,59,19.3,44.9,19.3L44.9,19.3z M44.9,59.8c-8.2,0-14.8-6.7-14.8-14.8c0-8.2,6.7-14.8,14.8-14.8
			c8.2,0,14.8,6.7,14.8,14.8C59.8,53.1,53.1,59.8,44.9,59.8L44.9,59.8z"
          />
        </g>
        <rect
          x="43.2"
          y="16.4"
          style={{ fill: mainColor }}
          width="3.4"
          height="15.1"
        />
        <rect
          x="43.2"
          y="58.2"
          style={{ fill: mainColor }}
          width="3.4"
          height="15.1"
        />
        <rect
          x="58.2"
          y="43.2"
          style={{ fill: mainColor }}
          width="15.1"
          height="3.4"
        />
        <rect
          x="16.5"
          y="43.2"
          style={{ fill: mainColor }}
          width="15.1"
          height="3.4"
        />
        <circle style={{ fill: mainColor }} cx="44.9" cy="44.9" r="3.2" />
        <circle
          style={{
            opacity: 0.5,
            fill: "none",
            stroke: lightColor,
            strokeWidth: 1.4711,
            strokeMiterlimit: 10,
          }}
          cx="44.9"
          cy="44.9"
          r="10.4"
        />
      </g>
    </svg>
  );
};
