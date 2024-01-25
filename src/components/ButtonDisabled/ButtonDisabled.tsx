/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";

interface Props {
  className: any;
  groupClassName: any;
  overlapGroupClassName: any;
  loginClassName: any;
}

export const ButtonDisabled = ({
  className,
  groupClassName,
  overlapGroupClassName,
  loginClassName,
}: Props): JSX.Element => {
  return (
    <button className={`all-[unset] box-border w-[328px] h-[55px] ${className}`}>
      <div className={`w-[330px] h-[55px] ${groupClassName}`}>
        <div
          className={`relative w-[328px] h-[55px] bg-primarymain-blue rounded-[4px] shadow-[0px_9px_20px_#abb4bd26] ${overlapGroupClassName}`}
        >
          <div
            className={`absolute top-[18px] left-[121px] [font-family:'Poppins',Helvetica] font-medium text-white text-[20px] text-center tracking-[0] leading-[20px] whitespace-nowrap ${loginClassName}`}
          >
            Continue
          </div>
        </div>
      </div>
    </button>
  );
};
