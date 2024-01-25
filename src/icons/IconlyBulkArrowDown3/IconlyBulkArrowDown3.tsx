/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";

interface Props {
  className: any;
}

export const IconlyBulkArrowDown3 = ({ className }: Props): JSX.Element => {
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
        d="M12.6593 3.71089V12.1889C12.6593 12.5811 12.341 12.8994 11.9488 12.8994C11.5566 12.8994 11.2383 12.5811 11.2383 12.1889V3.71089C11.2383 3.31868 11.5566 3.00037 11.9488 3.00037C12.341 3.00037 12.6593 3.31868 12.6593 3.71089Z"
        fill="#200E32"
        opacity="0.4"
      />
      <mask
        height="10"
        id="mask0_964_10726"
        maskUnits="userSpaceOnUse"
        style="mask-type:luminance"
        width="12"
        x="6"
        y="11"
      >
        <path clipRule="evenodd" d="M6.50024 11.4785H17.3966V20.418H6.50024V11.4785Z" fill="white" fillRule="evenodd" />
      </mask>
      <g mask="url(#mask0_964_10726)">
        <path
          d="M17.3969 12.189C17.3969 12.3217 17.36 12.4524 17.288 12.568L12.5502 20.0863C12.4195 20.2928 12.193 20.4188 11.9486 20.4188C11.7042 20.4188 11.4778 20.2928 11.347 20.0863L6.60924 12.568C6.47187 12.3491 6.46335 12.0725 6.58935 11.8461C6.7144 11.6187 6.95219 11.4785 7.21082 11.4785H16.6864C16.945 11.4785 17.1828 11.6187 17.3079 11.8461C17.3676 11.9531 17.3969 12.0716 17.3969 12.189Z"
          fill="#200E32"
        />
      </g>
    </svg>
  );
};
