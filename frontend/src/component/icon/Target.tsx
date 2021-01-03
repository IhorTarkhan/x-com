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
      xmlSpace="preserve"
      style={{ height: props.size }}
    >
      <path
        style={{ fill: props.color }}
        d="M49.7,21.1v4.4c2.3,0.5,4.6,1.5,6.7,2.9l3.1-3.1l6.6,6.6l-3.3,3.3c0.9,1.7,1.6,3.5,2.1,5.3h4.5v9.3h-4.5
		c-0.6,2.4-1.6,4.6-2.9,6.6l3.1,3.1l-6.6,6.6L55,62.7c-1.4,0.8-3,1.4-4.6,1.9v4.4h-9.3v-4.1c-2.4-0.5-4.6-1.4-6.5-2.6l-3.1,3.1
		l-6.6-6.6l3.1-3.1c-1.3-2-2.2-4.3-2.7-6.8h-4.3v-9.3l4.7,0c0.5-1.6,1.1-3.1,1.9-4.6l-3.1-3.1l6.6-6.6l2.9,2.9
		c1.9-1.3,4.1-2.2,6.4-2.8v-4.5H49.7
		M52.2,18.6h-2.5h-9.3H38v2.5v2.6c-1.2,0.4-2.4,0.9-3.5,1.5l-1.6-1.6l-1.8-1.8l-1.8,1.8
		l-6.6,6.6L21,31.9l1.8,1.8l1.8,1.8c-0.2,0.5-0.5,1-0.7,1.6l-2.9,0l-2.5,0v2.5v9.3v2.5h2.5h2.3c0.4,1.3,0.9,2.6,1.5,3.9L23.2,57
		l-1.8,1.8l1.8,1.8l6.6,6.6l1.8,1.8l1.8-1.8l1.8-1.8c1.2,0.6,2.4,1.1,3.6,1.4v2.1v2.5h2.5h9.3h2.5v-2.5v-2.5
		c0.5-0.2,1.1-0.4,1.6-0.6l2.1,2.1l1.8,1.8l1.8-1.8l6.6-6.6l1.8-1.8l-1.8-1.8L65,56.1c0.7-1.2,1.2-2.5,1.6-3.7h2.6h2.5v-2.5v-9.3
		V38h-2.5h-2.6c-0.3-0.8-0.6-1.5-0.9-2.3l2-2l1.8-1.8l-1.8-1.8l-6.6-6.6l-1.8-1.8l-1.8,1.8L56,25.3c-1.2-0.7-2.5-1.2-3.8-1.6v-2.6
		V18.6L52.2,18.6z"
      />
    </svg>
  );
};
