/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";

interface Props {
  className: any;
}

export const ExpandRightLight7 = ({ className }: Props): JSX.Element => {
  return (
    <svg
      className={`${className}`}
      fill="none"
      height="89"
      viewBox="0 0 88 89"
      width="88"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_d_1312_3077)">
        <rect fill="white" height="60" rx="30" shapeRendering="crispEdges" width="60" x="14" y="13.5" />
        <rect height="59" rx="29.5" shapeRendering="crispEdges" stroke="#DBDDE0" width="59" x="14.5" y="14" />
        <path d="M41 37.5L47 43.5L41 49.5" stroke="#222222" />
      </g>
      <defs>
        <filter
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
          height="88"
          id="filter0_d_1312_3077"
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
          <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_1312_3077" />
          <feBlend in="SourceGraphic" in2="effect1_dropShadow_1312_3077" mode="normal" result="shape" />
        </filter>
      </defs>
    </svg>
  );
};
