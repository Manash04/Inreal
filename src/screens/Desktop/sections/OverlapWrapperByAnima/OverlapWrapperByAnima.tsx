import { MailIcon, MapPinIcon, PhoneIcon } from "lucide-react";
import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";
import { Separator } from "../../../../components/ui/separator";

export const OverlapWrapperByAnima = (): JSX.Element => {
  // About us links data
  const aboutUsLinks = [
    { text: "Who We Are", href: "https://fablearner.com/", isExternal: true },
    { text: "FAB Masterclass", href: "#", isExternal: false },
    { text: "Testimonials", href: "#", isExternal: false },
    { text: "Refund Policy", href: "#", isExternal: false },
    { text: "FAQS", href: "#", isExternal: false },
  ];

  // Contact us data
  const contactInfo = [
    { icon: <MailIcon className="w-[15px] h-3" />, text: "info@inreal.com" },
    {
      icon: <PhoneIcon className="w-[13px] h-[13px]" />,
      text: "+91-7045013337",
    },
    {
      icon: <MapPinIcon className="w-[11px] h-3.5" />,
      text: "Test Assignment",
    },
  ];

  // Footer links data
  const footerLinks = [
    {
      text: "All Rights Reserved",
      href: "https://fablearner.com/refund-return-policy/",
      isExternal: true,
    },
    { text: "Terms & Conditions", href: "#", isExternal: false },
    { text: "Privacy Policy", href: "#", isExternal: false },
  ];

  // Background images data
  const backgroundImages = [
    "/clip-path-group-11.png",
    "/clip-path-group-12.png",
    "/clip-path-group-13.png",
    "/clip-path-group-14.png",
    "/clip-path-group-15.png",
    "/clip-path-group-16.png",
    "/clip-path-group-17.png",
    "/clip-path-group-18.png",
    "/clip-path-group-19.png",
  ];

  return (
    <section className="relative w-full py-16">
      <div className="relative mx-auto max-w-[1440px]">
        {/* Background images */}
        <div className="relative w-full h-[690px] bg-[url(/clip-path-group-10.png)] bg-[100%_100%]">
          {backgroundImages.map((src, index) => (
            <img
              key={index}
              className="absolute w-full h-full top-0 left-0"
              alt="Clip path group"
              src={src}
            />
          ))}
        </div>

        {/* Footer content */}
        <Card className="relative w-full max-w-[761px] mx-auto mt-[-176px] border-none shadow-none">
          <CardContent className="p-0">
            {/* Company description */}
            <div className="text-center mt-[170px] mb-16">
              <p className="[font-family:'Andika',Helvetica] font-normal text-black text-base leading-[26.5px]">
                The #1 Family-Centred Ed-Tech <br />
                Provider in India
              </p>
            </div>

            <div className="flex justify-between">
              {/* About Us Section */}
              <div className="w-28">
                <h3 className="[font-family:'Ding_Dong-Regular',Helvetica] font-normal text-black text-[23.8px] text-center leading-[39.5px] whitespace-nowrap mb-[10px]">
                  ABOUT US
                </h3>
                <nav className="flex flex-col space-y-[29px]">
                  {aboutUsLinks.map((link, index) =>
                    link.isExternal ? (
                      <a
                        key={index}
                        className="[font-family:'Andika',Helvetica] font-normal text-black text-[13px] leading-normal"
                        href={link.href}
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        {link.text}
                      </a>
                    ) : (
                      <div
                        key={index}
                        className="[font-family:'Andika',Helvetica] font-normal text-black text-[13px] leading-normal"
                      >
                        {link.text}
                      </div>
                    ),
                  )}
                </nav>
              </div>

              {/* Contact Us Section */}
              <div className="w-[135px]">
                <h3 className="[font-family:'Ding_Dong-Regular',Helvetica] font-normal text-black text-[23.8px] text-center leading-[39.5px] whitespace-nowrap mb-[8px]">
                  cONTACT US
                </h3>
                <ul className="flex flex-col space-y-[29px]">
                  {contactInfo.map((item, index) => (
                    <li key={index} className="flex items-center">
                      <span className="mr-[7px]">{item.icon}</span>
                      <span className="[font-family:'Andika',Helvetica] font-normal text-black text-[13px] leading-normal">
                        {item.text}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Footer */}
            <div className="mt-[88px]">
              <Separator className="w-full h-0.5" />
              <div className="flex justify-between items-center mt-[15px]">
                <div className="[font-family:'Andika',Helvetica] font-normal text-black text-base text-center leading-[26.5px] whitespace-nowrap">
                  Copyright @ 2025 INREAL
                </div>

                <div className="flex items-center">
                  {footerLinks.map((link, index) => (
                    <React.Fragment key={index}>
                      {index > 0 && (
                        <Separator
                          orientation="vertical"
                          className="h-[17px] mx-3"
                        />
                      )}
                      {link.isExternal ? (
                        <a
                          className="[font-family:'Andika',Helvetica] font-normal text-black text-xs text-center leading-[26.5px] whitespace-nowrap"
                          href={link.href}
                          rel="noopener noreferrer"
                          target="_blank"
                        >
                          {link.text}
                        </a>
                      ) : (
                        <div className="[font-family:'Andika',Helvetica] font-normal text-black text-xs text-center leading-[26.5px] whitespace-nowrap">
                          {link.text}
                        </div>
                      )}
                    </React.Fragment>
                  ))}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Decorative elements */}
        <div className="absolute w-full h-[302px] bottom-0 left-0 flex justify-between">
          {/* Left decorative element */}
          <div className="w-[458px] h-[302px]">
            <div className="relative w-[458px] h-[302px] bg-[url(/vector-8.svg)] bg-[100%_100%]">
              <div className="absolute w-[387px] h-[302px] top-0 left-[71px]">
                <img
                  className="absolute w-[168px] h-[85px] top-[213px] left-[214px]"
                  alt="Vector"
                  src="/vector-2.svg"
                />
                <img
                  className="absolute w-[366px] h-[270px] top-1 left-0"
                  alt="Vector"
                  src="/vector-13.svg"
                />
                <img
                  className="absolute w-[278px] h-[184px] top-[38px] left-[51px]"
                  alt="Vector"
                  src="/vector-12.svg"
                />
                <img
                  className="absolute w-[222px] h-[169px] top-[76px] left-[76px]"
                  alt="Vector"
                  src="/vector-6.svg"
                />
                <img
                  className="absolute w-[281px] h-[302px] top-0 left-[106px]"
                  alt="Group"
                  src="/group.png"
                />
                <img
                  className="absolute w-[134px] h-24 top-[3px] left-[21px]"
                  alt="Vector"
                  src="/vector-7.svg"
                />
              </div>
              <img
                className="absolute w-[162px] h-[97px] top-[-3373px] left-[177px]"
                alt="Vector"
                src="/vector-9.svg"
              />
            </div>
          </div>

          {/* Right decorative element */}
          <div className="w-[458px] h-[302px] rotate-180">
            <div className="relative w-[458px] h-[302px] bg-[url(/vector-10.svg)] bg-[100%_100%]">
              <div className="absolute w-[387px] h-[302px] top-0 left-0">
                <img
                  className="absolute w-[168px] h-[85px] top-[213px] left-1"
                  alt="Vector"
                  src="/vector-4.svg"
                />
                <img
                  className="absolute w-[366px] h-[270px] top-1 left-[21px]"
                  alt="Vector"
                  src="/vector-1.svg"
                />
                <img
                  className="absolute w-[278px] h-[184px] top-[38px] left-[57px]"
                  alt="Vector"
                  src="/vector-3.svg"
                />
                <img
                  className="absolute w-[222px] h-[169px] top-[76px] left-[89px]"
                  alt="Vector"
                  src="/vector.svg"
                />
                <img
                  className="absolute w-[261px] h-[302px] top-0 left-0"
                  alt="Group"
                  src="/group-1.png"
                />
                <img
                  className="absolute w-[134px] h-24 top-[3px] left-[232px]"
                  alt="Vector"
                  src="/vector-11.svg"
                />
              </div>
              <img
                className="absolute w-[162px] h-[97px] top-[-3373px] left-[-1179px]"
                alt="Vector"
                src="/vector-5.svg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
