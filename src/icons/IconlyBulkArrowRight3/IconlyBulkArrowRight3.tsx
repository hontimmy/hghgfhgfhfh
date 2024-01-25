/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";

interface Props {
  className: any;
}

export const IconlyBulkArrowRight3 = ({ className }: Props): JSX.Element => {
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
        d="M3.71101 11.3408H12.189C12.5812 11.3408 12.8995 11.6591 12.8995 12.0513C12.8995 12.4435 12.5812 12.7618 12.189 12.7618H3.71101C3.3188 12.7618 3.00049 12.4435 3.00049 12.0513C3.00049 11.6591 3.3188 11.3408 3.71101 11.3408Z"
        fill="#200E32"
        opacity="0.4"
      />
      <mask
        height="12"
        id="mask0_964_10696"
        maskUnits="userSpaceOnUse"
        style="mask-type:luminance"
        width="10"
        x="11"
        y="6"
      >
        <path
          clipRule="evenodd"
          d="M11.4788 17.4998V6.60336H20.4182V17.4998H11.4788Z"
          fill="white"
          fillRule="evenodd"
        />
      </mask>
      <g mask="url(#mask0_964_10696)">
        <path
          d="M12.1893 6.60307C12.3219 6.60307 12.4527 6.64002 12.5682 6.71202L20.0865 11.4498C20.2931 11.5805 20.4191 11.807 20.4191 12.0514C20.4191 12.2958 20.2931 12.5222 20.0865 12.653L12.5682 17.3908C12.3494 17.5281 12.0728 17.5367 11.8463 17.4107C11.619 17.2856 11.4788 17.0478 11.4788 16.7892V7.3136C11.4788 7.05497 11.619 6.81718 11.8463 6.69213C11.9534 6.63244 12.0718 6.60307 12.1893 6.60307Z"
          fill="#200E32"
        />
      </g>
    </svg>
  );
};
