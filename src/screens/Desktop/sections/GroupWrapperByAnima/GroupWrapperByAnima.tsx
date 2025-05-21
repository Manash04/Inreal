import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

export const GroupWrapperByAnima = (): JSX.Element => {
  return (
    <section className="w-full max-w-[1181px] mx-auto py-12">
      <div className="flex flex-col items-center">
        <h2 className="text-center text-[75px] leading-[88.1px] [font-family:'Ding_Dong-Regular',Helvetica] font-normal mb-12">
          <span className="text-[#da2653]">Registration For The Next </span>
          <span className="text-black">Masterclass Closes Soon</span>
        </h2>

        <div className="w-full mb-12">
          <img
            className="w-full h-64 object-cover"
            alt="Masterclass banner"
            src="/asset-1-2.png"
          />
        </div>

        <Card className="w-full max-w-[390px] h-[134px] rounded-[11.27px] border-[7.51px] border-solid border-[#d11746] shadow-[0px_11.3px_9.69px_#fcff5e3d] bg-[#faff00] overflow-hidden mb-12">
          <CardContent className="p-0 h-full flex items-center justify-center">
            <div className="[font-family:'Ding_Dong-Regular',Helvetica] font-normal text-black text-[52.6px] text-center">
              Reserve Your Spot - Rs.499
            </div>
          </CardContent>
        </Card>

        <div className="flex justify-end w-full">
          <img
            className="w-[164px] h-[11px]"
            alt="Decorative element"
            src="/xmlid-826--1.svg"
          />
        </div>
      </div>
    </section>
  );
};
