/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";

interface Props {
  className: any;
}

export const IconlyBulkArrowUp3 = ({ className }: Props): JSX.Element => {
  return (
    <svg
      className={`${className}`}
      fill="none"
      height="24"
      viewBox="0 0 24 24"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11.3407 20.2891L11.3407 11.8111C11.3407 11.4189 11.659 11.1006 12.0512 11.1006C12.4434 11.1006 12.7617 11.4189 12.7617 11.8111L12.7617 20.2891C12.7617 20.6813 12.4434 20.9996 12.0512 20.9996C11.659 20.9996 11.3407 20.6813 11.3407 20.2891Z"
        fill="#200E32"
        opacity="0.4"
      />
      <mask
        height="10"
        id="mask0_964_10706"
        maskUnits="userSpaceOnUse"
        style="mask-type:luminance"
        width="12"
        x="6"
        y="3"
      >
        <path
          clipRule="evenodd"
          d="M17.4998 12.5215L6.60336 12.5215L6.60336 3.58202L17.4998 3.58202V12.5215Z"
          fill="white"
          fillRule="evenodd"
        />
      </mask>
      <g mask="url(#mask0_964_10706)">
        <path
          d="M6.60307 11.811C6.60307 11.6783 6.64002 11.5476 6.71202 11.432L11.4498 3.9137C11.5805 3.70717 11.807 3.58117 12.0514 3.58117C12.2958 3.58117 12.5222 3.70717 12.653 3.9137L17.3908 11.432C17.5281 11.6509 17.5367 11.9275 17.4107 12.1539C17.2856 12.3813 17.0478 12.5215 16.7892 12.5215L7.3136 12.5215C7.05497 12.5215 6.81718 12.3813 6.69213 12.1539C6.63244 12.0469 6.60307 11.9284 6.60307 11.811Z"
          fill="#200E32"
        />
      </g>
    </svg>
  );
};
