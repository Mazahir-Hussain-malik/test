import React from "react";
import { useState } from "react";
import { FaPlus } from "react-icons/fa6";

const Faqs = () => {
  const [open, setIsOpen] = useState(0);

  function handlePopUp(index) {
    setIsOpen(open === index ? null : index);
  }

  const data = [
    {
      id: 0,
      heading: `   What is God Token?`,
      paragraph: ` God Token is a revolutionary new crypto token on the GBGC chain. Our
          mission is to provide crypto enthusiasts with an opportunity to earn
          daily rewards and gain easy access to high-potential investments
          through our partnership with Gworld.`,
    },
    ,
    {
      id: 1,
      heading: `  1% Daily USDT Rewards`,
      paragraph: ` Earn 1% of your investment in USDT every day just by 
holding God Token.`,
    },
    {
      id: 2,
      heading: `  Backed by Gworld:`,
      paragraph: ` Your rewards are provided by Gworld, a trusted investment 
company.`,
    },
    {
      id: 3,
      heading: ` Easy Access to Investments`,
      paragraph: ` Get a seamless entry into Gworld's investment 
opportunities through God Token.`,
    },
    {
      id: 4,
      heading: `High Liquidity:`,
      paragraph: ` Trade your God Tokens on exchanges for potentially higher prices.`,
    },
    {
      id: 5,
      heading: `  Daily Earnings`,
      paragraph: ` Enjoy the stability of daily USDT rewards.`,
    },
    {
      id: 6,
      heading: ` Investment Opportunities`,
      paragraph: `Benefit from Gworld's proven investment strategies`,
    },
    {
      id: 7,
      heading: ` Growth Potential`,
      paragraph: `Potential to sell your tokens at higher prices on exchanges.`,
    },
    {
      id: 8,
      heading: ` Community`,
      paragraph: `Join a growing community of like-minded investors.`,
    },
  ];

  return (
    <div className="py-[3rem] relative  ">
      <div class="hidden md:block absolute w-[388px] h-[370px] bg-[#0BDF0E] left-8 top-20  blur-[300px]"></div>

      <h2 className="md:text-[56px] text-[30px] font-semibold text-[#0BDF0E] text-center my-[2rem]">
        FAQS
      </h2>

      <div className="flex justify-center flex-col items-center gap-[1rem] md:w-[40%] w-[98%]  mx-auto ">
        {data.map((items, index) => {
          return (
            <div
              key={index}
              className="shadow-xl border-2 border-[#152329] rounded-[10px]  flex flex-col justify-center     w-full hover:bg-[#28323b] transition-all ease-out delay-150 cursor-pointer "
            >
              <div className=" flex justify-between items-center">
                <h2 className="md:text-[16px] text-[14px] shadow-2xl  font-semibold flex md:gap-[2rem] gap-[1rem] md:px-4 px-2 items-center  ">
                  <span>0{items.id + 1}</span> {items.heading}
                </h2>
                <p
                  className=" bg-[#152329] w-[86px] md:h-[80px]  h-[60px] flex items-center justify-center md:text-[25px] text-[18px] hover:bg-[#0BDF0E] transition-all ease-linear delay-150 "
                  onClick={() => handlePopUp(index)}
                >
                  <FaPlus />
                </p>
              </div>
              {open === index && (
                <div className="text-[#C2C3C5] md:text-[18px] text-[16px] font-normal py-[1rem] transition-all ease-in-out delay-150 text-center ">
                  <hr className="bg-[#C2C3C5]" />
                  <p className="md:w-[100%] w-[100%] my-[1rem]">
                    {items.paragraph}
                  </p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Faqs;
