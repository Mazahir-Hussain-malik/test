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
      listStyle: "list-none",
    },
    {
      id: 1,
      heading: `   Why Choose God Token?`,
      paragraph: `  1% Daily USDT Rewards: Earn 1% of your investment in USDT every day just by holding God Token.`,
      paragraph1: ` Backed by Gworld: Your rewards are provided by Gworld, a trusted investment company.`,
      paragraph2: `Easy Access to Investments: Get a seamless entry into Gworld's investment opportunities through God Token.`,
      paragraph3: `High Liquidity: Trade your God Tokens on exchanges for potentially higher prices.`,
      listStyle: "list-disc",
    },
    {
      id: 2,
      heading: `   Why Choose God Token?`,
      paragraph: ` • Daily Earnings: Enjoy the stability of daily USDT rewards.`,
      paragraph1: `Investment Opportunities: Benefit from Gworld's proven investment strategies.`,
      paragraph2: `Growth Potential: Potential to sell your tokens at higher prices on exchanges.`,
      paragraph3: `Community: Join a growing community of like-minded investors.`,
      listStyle: "list-disc",
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
                <div
                  className={`text-[#C2C3C5] md:text-[14px] text-[16px] font-normal py-[1rem] transition-all ease-in-out delay-150 text-center   ${items.listStyle} md:px-[2rem] px-0 `}
                >
                  <hr className="bg-[#C2C3C5]" />
                  <li className="md:w-[95%] text-start w-[100%] my-[1rem]">
                    {items.paragraph}
                  </li>
                  <li className="md:w-[95%] text-start w-[100%] my-[1rem]">
                    {items.paragraph1}
                  </li>
                  <li className="md:w-[95%] text-start w-[100%] my-[1rem]">
                    {items.paragraph2}
                  </li>
                  <li className="md:w-[95%] text-start w-[100%] my-[1rem]">
                    {items.paragraph3}
                  </li>
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
