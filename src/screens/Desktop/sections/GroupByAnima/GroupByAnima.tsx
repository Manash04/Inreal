import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";
import { Separator } from "../../../../components/ui/separator";

export const GroupByAnima = (): JSX.Element => {
  // Data for statistics to enable mapping
  const statistics = [
    {
      number: "100+",
      description: "Cities Around\nthe World",
    },
    {
      number: "10,000+",
      description: "Parents\nAttended",
    },
    {
      number: "2000+",
      description: "Kids Became\nFabreaders",
    },
  ];

  return (
    <div className="w-full py-8">
      <Card className="rounded-[30.77px] shadow-[0px_0px_17.58px_#00000038]">
        <CardContent className="p-5">
          <div className="rounded-[30.77px] border-[4.4px] border-solid border-[#da2653] p-6">
            <div className="flex justify-center items-center">
              {statistics.map((stat, index) => (
                <React.Fragment key={index}>
                  <div className="flex flex-col items-center text-center px-8">
                    <div className="[font-family:'Ding_Dong-Regular',Helvetica] font-normal text-[#da2653] text-[87.6px] leading-normal whitespace-nowrap">
                      {stat.number}
                    </div>
                    <div className="[font-family:'Andika',Helvetica] font-normal text-black text-[32.9px] leading-[41px] mt-5 whitespace-pre-line">
                      {stat.description}
                    </div>
                  </div>
                  {index < statistics.length - 1 && (
                    <Separator
                      orientation="vertical"
                      className="h-[87px] bg-black mx-4"
                    />
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
