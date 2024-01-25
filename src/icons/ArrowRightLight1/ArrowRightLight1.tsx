/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";

interface Props {
  className: any;
}

export const ArrowRightLight1 = ({ className }: Props): JSX.Element => {
  return (
    <svg
      className={`${className}`}
      fill="none"
      height="30"
      viewBox="0 0 31 30"
      width="31"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect fill="#70E484" height="30" rx="15" width="30" x="0.0292969" />
      <path
        d="M20.0293 15L20.3829 14.6464L20.7364 15L20.3829 15.3536L20.0293 15ZM10.0293 15.5C9.75315 15.5 9.5293 15.2761 9.5293 15C9.5293 14.7239 9.75315 14.5 10.0293 14.5V15.5ZM16.3829 10.6464L20.3829 14.6464L19.6757 15.3536L15.6757 11.3536L16.3829 10.6464ZM20.3829 15.3536L16.3829 19.3536L15.6757 18.6464L19.6757 14.6464L20.3829 15.3536ZM20.0293 15.5H10.0293V14.5H20.0293V15.5Z"
        fill="#04012C"
      />
    </svg>
  );
};
