/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";

interface Props {
  className: any;
}

export const IconlyTwoToneArrowUpCircle = ({ className }: Props): JSX.Element => {
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
        clipRule="evenodd"
        d="M21.2498 12C21.2498 6.892 17.1088 2.75 11.9998 2.75C6.89176 2.75 2.74976 6.892 2.74976 12C2.74976 17.108 6.89176 21.25 11.9998 21.25C17.1088 21.25 21.2498 17.108 21.2498 12Z"
        fillRule="evenodd"
        opacity="0.4"
        stroke="#200E32"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
      <path
        d="M15.4709 13.4423L11.9999 9.95626L8.52895 13.4423"
        stroke="#200E32"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
    </svg>
  );
};
