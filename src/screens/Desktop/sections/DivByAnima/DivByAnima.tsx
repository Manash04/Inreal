import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

export const DivByAnima = (): JSX.Element => {
  return (
    <section className="w-full py-16">
      <div className="max-w-[1036px] mx-auto relative">
        {/* Date and time banner */}
        <div className="text-center mb-2">
          <h2 className="[font-family:'Ding_Dong-Regular',Helvetica] font-normal text-[#fffa00] text-[42.8px] [-webkit-text-stroke:2.34px_#000000] tracking-[0] leading-normal whitespace-nowrap">
            13th and 14th May 2025 6:00 pm - 7:30 pm
          </h2>
        </div>

        {/* Main content card */}
        <Card className="bg-white rounded-[26.37px] overflow-hidden">
          <CardContent className="p-0">
            <div className="relative">
              {/* Inner bordered container */}
              <div className="m-[13px] p-6 bg-white rounded-[26.37px] border-[3.77px] border-solid border-[#da2653]">
                {/* Main heading */}
                <h1 className="[font-family:'Ding_Dong-Regular',Helvetica] font-normal text-black text-[69.4px] tracking-[0] leading-[76.7px] mb-8 text-center">
                  Your Child Can Start Reading <br />
                  at Home - Even Before Age 3
                </h1>
              </div>

              {/* CTA Button */}
              <div className="flex justify-center -mt-10">
                <Button className="h-[78px] rounded-[10.61px] border-[7.07px] border-solid border-[#d11746] shadow-[0px_10.64px_9.12px_#fcff5e3d] bg-[#faff00] hover:bg-[#faff00] px-8">
                  <span className="[font-family:'Ding_Dong-Regular',Helvetica] font-normal text-black text-[49.5px] text-center tracking-[0] leading-normal whitespace-nowrap">
                    Reserve Your Spot - Rs.499
                  </span>
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
