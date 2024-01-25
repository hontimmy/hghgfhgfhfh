/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";

interface Props {
  className: any;
}

export const ExpandRightLight6 = ({ className }: Props): JSX.Element => {
  return (
    <svg
      className={`${className}`}
      fill="none"
      height="89"
      viewBox="0 0 88 89"
      width="88"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_d_1312_3020)">
        <rect
          fill="white"
          height="60"
          rx="30"
          shapeRendering="crispEdges"
          transform="matrix(-1 0 0 1 74 13.5)"
          width="60"
        />
        <rect
          height="59"
          rx="29.5"
          shapeRendering="crispEdges"
          stroke="#DBDDE0"
          transform="matrix(-1 0 0 1 73 13.5)"
          width="59"
          x="-0.5"
          y="0.5"
        />
        <path d="M47 37.5L41 43.5L47 49.5" stroke="#6A6A6A" />
      </g>
      <defs>
        <filter
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
          height="88"
          id="filter0_d_1312_3020"
          width="88"
          x="0"
          y="0.5"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            result="hardAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset dy="1" />
          <feGaussianBlur stdDeviation="7" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
          <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_1312_3020" />
          <feBlend in="SourceGraphic" in2="effect1_dropShadow_1312_3020" mode="normal" result="shape" />
        </filter>
      </defs>
    </svg>
  );
};
