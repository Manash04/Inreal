import React from "react";
import { Card } from "../../components/ui/card";

export const Desktop = (): JSX.Element => {
  const stats = [
    { number: "100+", text: "Cities Around the World" },
    { number: "10,000+", text: "Parents Attended" },
    { number: "2000+", text: "Kids Became Fabreaders" },
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* Main Content Container */}
      <div className="max-w-[500px] mx-auto">
        {/* Top Section with Curved Border */}
        <div className="bg-[#FF1B79] rounded-t-[40px] px-6 pt-6 pb-12 relative">
          {/* Date and Time */}
          <div className="text-white text-center mb-4 text-lg">
            13th and 14th May 2025, 6:00 pm - 7:30 pm
          </div>

          {/* White Card with Title */}
          <Card className="bg-white rounded-[25px] p-6 mb-8">
            <h1 className="text-3xl font-bold text-center leading-tight mb-6">
              YOUR CHILD CAN START READING AT HOME - EVEN BEFORE AGE 3
            </h1>
            <div className="text-center">
              <button className="bg-[#FFEB3B] text-black font-bold py-2 px-6 rounded-lg text-lg">
                RESERVE YOUR SPOT - ₹5,499
              </button>
              <div className="text-sm mt-2">(proof below)</div>
            </div>
          </Card>

          {/* Join the World's Text */}
          <div className="text-white text-center text-lg mb-8 px-4">
            Join the World's Highest-Rated Online Masterclass (for Parents) Learn simple, science backed techniques to teach your child to read — in just 15 minutes a day.
          </div>

          {/* Main Image */}
          <div className="mb-8">
            <img 
              src="/chatgpt-image-apr-23--2025--11-57-14-am-1.png"
              alt="Parent reading with child"
              className="w-full rounded-lg"
            />
          </div>

          {/* Stats Section */}
          <div className="bg-white rounded-2xl p-6 mb-8">
            <div className="flex justify-between">
              {stats.map((stat, index) => (
                <div key={index} className="text-center flex-1">
                  <div className="text-[#FF1B79] text-2xl font-bold mb-2">{stat.number}</div>
                  <div className="text-black text-sm leading-tight">{stat.text}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Trustpilot Section */}
          <div className="bg-[#00B67A] rounded-2xl p-4">
            <div className="flex items-center justify-between">
              <div>
                <img src="/group-37179.png" alt="Trustpilot" className="h-8 mb-2" />
                <div className="text-white text-sm">Based on 800 Reviews</div>
              </div>
              <div className="text-right text-white">
                <div className="font-bold text-xl">Excellent 4.7 out of 5</div>
                <div className="flex justify-end mt-1">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                    </svg>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Registration Section */}
        <div className="bg-white px-6 py-8 text-center">
          <h2 className="text-2xl font-bold mb-6">
            <span className="text-[#FF1B79]">REGISTRATION FOR THE NEXT </span>
            <span className="text-black">MASTERCLASS CLOSES SOON</span>
          </h2>
          
          {/* Countdown Timer */}
          <div className="flex justify-center gap-3 mb-8">
            {[
              { value: "30", label: "HOURS" },
              { value: "14", label: "MINUTES" },
              { value: "28", label: "SECONDS" }
            ].map((item, index) => (
              <div key={index} className="bg-black text-white p-3 rounded-lg min-w-[80px]">
                <div className="text-3xl font-bold">{item.value}</div>
                <div className="text-sm">{item.label}</div>
              </div>
            ))}
          </div>

          <button className="bg-[#FFEB3B] text-black font-bold py-3 px-8 rounded-lg text-lg">
            RESERVE YOUR SPOT - ₹5,499
          </button>
        </div>

        {/* Footer with Rainbow Design */}
        <footer className="bg-white px-6 pb-8">
          <div className="flex justify-between mb-8">
            <div>
              <h3 className="font-bold mb-3 text-sm">ABOUT US</h3>
              <ul className="text-sm space-y-2">
                <li>Who We Are</li>
                <li>FAB Masterclass</li>
                <li>Testimonials</li>
                <li>Refund Policy</li>
                <li>FAQs</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-3 text-sm">CONTACT US</h3>
              <ul className="text-sm space-y-2">
                <li>info@fablearner.com</li>
                <li>+91-7045013337</li>
                <li>Mumbai, India</li>
              </ul>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="w-32 h-16 bg-gradient-to-r from-red-500 via-yellow-500 to-green-500 rounded-t-full"></div>
          </div>
        </footer>
      </div>
    </div>
  );
};