/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";

interface Props {
  className: any;
  rectangle: string;
  img: string;
  vector: string;
}

export const Component = ({
  className,
  rectangle = "https://c.animaapp.com/yghahd5A/img/rectangle-1-1.svg",
  img = "https://c.animaapp.com/yghahd5A/img/rectangle-2-1.svg",
  vector = "https://c.animaapp.com/yghahd5A/img/vector-1-1.svg",
}: Props): JSX.Element => {
  return (
    <div className={`relative w-[121px] h-[25px] ${className}`}>
      <div className="absolute w-[24px] h-[24px] top-0 left-0">
        <div className="relative h-[24px] rounded-[7.12px]">
          <img className="absolute w-[16px] h-[20px] top-0 left-0" alt="Rectangle" src={rectangle} />
          <img className="absolute w-[16px] h-[20px] top-[4px] left-[7px]" alt="Rectangle" src={img} />
          <img className="absolute w-[21px] h-[3px] top-[11px] left-px" alt="Vector" src={vector} />
          <div className="absolute w-[24px] h-[24px] top-0 left-0 rounded-[7.12px] border-[2.85px] border-solid border-white" />
        </div>
      </div>
      <div className="absolute top-0 left-[32px] [font-family:'Roboto',Helvetica] font-bold text-white text-[21.2px] tracking-[0] leading-[normal] whitespace-nowrap">
        PolyPayd
      </div>
    </div>
  );
};
