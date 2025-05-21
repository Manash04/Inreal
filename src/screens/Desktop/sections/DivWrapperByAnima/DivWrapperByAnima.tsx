import React from "react";

export const DivWrapperByAnima = (): JSX.Element => {
  return (
    <section className="w-full bg-[#03da8d] py-12">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Trustpilot logo and review count */}
          <div className="flex flex-col items-center">
            <div className="mb-4">
              <img
                className="h-auto w-full max-w-[497px]"
                alt="Trustpilot logo"
                src="/group-37179.png"
              />
            </div>
            <p className="font-['Ding_Dong-Regular',Helvetica] text-2xl text-black text-center">
              Based on 800 Reviews
            </p>
          </div>

          {/* Rating information */}
          <div className="flex flex-col items-center md:items-end">
            <h2 className="font-['Helvetica_Neue_LT_Std-Regular',Helvetica] text-5xl text-black text-center mb-2">
              Excellent 4.7 out of 5
            </h2>
            <img
              className="h-auto w-[138px]"
              alt="Star rating"
              src="/xmlid-826-.svg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
