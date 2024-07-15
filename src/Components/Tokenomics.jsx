import React from "react";
import { RiTeamFill } from "react-icons/ri";

const Tokenomics = () => {
  return (
    <>
      <div class="flex flex-col items-center gap-4 my-[2rem] py-[4rem]">
        <span class=" text-center text-[36px] leading-[40px] md:text-[56px] md:leadmd:ing-[62px]  text-[18px]  font-machina font-bold">
          Tokenomics
        </span>
        <div className=" w-[200px] h-[7px] rounded-full bg-[#0BDF0E] mx-auto"></div>
      </div>

      <div className=" flex justify-center gap-[2rem] md:flex-row-reverse flex-col  relative ">
        <div class=" absolute w-[209px] h-[199px] bg-[#0BDF0E] top-2 right-0  blur-[200px]"></div>
        <div class=" absolute w-[209px] h-[199px] bg-[#0BDF0E] bottom-2 left-0  blur-[200px]"></div>

        <div className="md:flex-1 rounded-[8px] bg-[#101010] md:max-w-[800px] w-[95%] border-[1px] border-[#BCBCBC] px-[20px] py-[40px] flex flex-col gap-6">
          <div className="rounded-[8px] bg-secondary h-[105px]  md:h-[100px] flex items-center justify-center">
            <div className="flex items-center">
              <img
                alt="slart"
                loading="lazy"
                width="226"
                height="84"
                decoding="async"
                data-nimg="1"
                src="/logo.png"
                className=" md:w-[80px] w-[80px]"
              />
              <span className=" md:text-[30px] text-[20px] font-bold gradient-text">
                GOD
              </span>
            </div>
          </div>
          <h3 className=" font-semibold text-[28px] leading-[32px]">
            Token Information
          </h3>
          <span className=" whitespace-pre-line text-[14px] font-[350] leading-[22px] font-poppins">
            The God Token, we believe in the power of decentralized finance to
            unlock new opportunities for wealth creation. Our primary goal is to
            offer a secure, transparent, and rewarding investment experience. By
            holding God Token, our users can earn 1% daily USDT rewards and
            benefit from the robust investment strategies of Gworld.
            <br />
            <br />
            To ensure smooth trading and minimize price volatility, a
            substantial portion of the total supply of God Token is
            strategically allocated. Specifically, 60% of the tokens are
            reserved for the Rewards Pool, promoting user engagement and
            long-term participation in the ecosystem. Development receives 10%
            of the supply, ensuring continuous improvement and innovation within
            the project. Additionally, 14% is allocated for Partnerships and
            Ecosystem Growth, fostering collaborations that will expand the
            reach and utility of God Token. The team and advisors are
            incentivized with 10%, aligning their interests with the project's
            success. CEX Listings receive 5%, ensuring God Token is readily
            available on various exchanges, while 1% is kept in the Treasury for
            unforeseen needs. This balanced allocation strategy is designed to
            support sustainable growth and stability for God Token.
          </span>
          <div>
            <img src="/graph.png" alt="" />
          </div>
        </div>
        <div className="md:w-1/2 w-[95%] md:mx-0 mx-auto  flex flex-col gap-[2rem] ">
          <h3 class=" text-[18px]  font-machina  md:text-[42px] text-[24px] leading-[40px] md:leading-[46px]">
            5 Billion - Total Supply
          </h3>
          <span class="text-[14px] md:text-[16px] font-[350] leading-[16px] font-poppins">
            GOD has a big prospect and also one of the best supply structures.
          </span>
          <div className="flex items-center   gap-8 pl-[20px] py-[15px] md:pl-[30px] md:py-[20px] rounded-[4px] bg-[#1D2124]">
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 512 512"
              color="#0BDF0E"
              height="30"
              width="30"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M480 496H48a32 32 0 0 1-32-32V32a16 16 0 0 1 32 0v432h432a16 16 0 0 1 0 32z"></path>
              <path d="M156 432h-40a36 36 0 0 1-36-36V244a36 36 0 0 1 36-36h40a36 36 0 0 1 36 36v152a36 36 0 0 1-36 36zm144 0h-40a36 36 0 0 1-36-36V196a36 36 0 0 1 36-36h40a36 36 0 0 1 36 36v200a36 36 0 0 1-36 36zm143.64 0h-40a36 36 0 0 1-36-36V132a36 36 0 0 1 36-36h40a36 36 0 0 1 36 36v264a36 36 0 0 1-36 36z"></path>
            </svg>
            <div className="flex flex-col flex-1">
              <span className="text-[16px] text-[#FFFFFFE5] font-[350] font-poppins">
                Development
              </span>
              <span className="md:text-[24px]  text-[18px]  font-machina">
                10% (500,000,000 GOD)
              </span>
            </div>
          </div>
          <div className="flex items-center   gap-8 pl-[20px] py-[15px] md:pl-[30px] md:py-[20px] rounded-[4px] bg-[#1D2124]">
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 512 512"
              color="#0BDF0E"
              height="30"
              width="30"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M480 496H48a32 32 0 0 1-32-32V32a16 16 0 0 1 32 0v432h432a16 16 0 0 1 0 32z"></path>
              <path d="M156 432h-40a36 36 0 0 1-36-36V244a36 36 0 0 1 36-36h40a36 36 0 0 1 36 36v152a36 36 0 0 1-36 36zm144 0h-40a36 36 0 0 1-36-36V196a36 36 0 0 1 36-36h40a36 36 0 0 1 36 36v200a36 36 0 0 1-36 36zm143.64 0h-40a36 36 0 0 1-36-36V132a36 36 0 0 1 36-36h40a36 36 0 0 1 36 36v264a36 36 0 0 1-36 36z"></path>
            </svg>
            <div className="flex flex-col flex-1">
              <span className="text-[16px] text-[#FFFFFFE5] font-[350] font-poppins">
                CEX Listings
              </span>
              <span className="md:text-[24px] text-[18px]  font-machina">
                5% (250,000,000 GOD)
              </span>
            </div>
          </div>
          <div className="flex items-center gap-8 pl-[20px] py-[15px] md:pl-[30px] md:py-[20px] rounded-[4px] bg-[#1D2124]">
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 512 512"
              color="#0BDF0E"
              height="30"
              width="30"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M256 228.719c-22.879 0-41.597 18.529-41.597 41.18 0 22.652 18.718 41.182 41.597 41.182 22.878 0 41.597-18.529 41.597-41.182 0-22.651-18.719-41.18-41.597-41.18zm124.8 41.179c0-67.946-56.163-123.539-124.8-123.539s-124.8 55.593-124.8 123.539c0 45.303 24.961 85.447 62.396 107.072l20.807-36.032c-24.972-14.417-41.604-40.153-41.604-71.04 0-45.295 37.433-82.358 83.201-82.358 45.771 0 83.201 37.063 83.201 82.358 0 30.887-16.633 56.623-41.604 71.04l20.807 36.032c37.433-21.624 62.396-61.769 62.396-107.072zM256 64C141.597 64 48 156.654 48 269.898 48 346.085 89.592 411.968 152 448l20.799-36.032c-49.919-28.824-83.207-81.324-83.207-142.069 0-90.593 74.891-164.718 166.408-164.718 91.517 0 166.406 74.125 166.406 164.718 0 60.745-33.284 114.271-83.205 142.069L360 448c62.406-36.032 104-101.915 104-178.102C464 156.654 370.403 64 256 64z"></path>
            </svg>
            <div className="flex flex-col flex-1">
              <span className="text-[16px] text-[#FFFFFFE5] font-[350] font-poppins">
                Treasury
              </span>
              <span className="md:text-[24px] text-[18px]  font-machina">
                1% (50,000,000 GOD)
              </span>
            </div>
          </div>
          <div className="flex items-center gap-8 pl-[20px] py-[15px] md:pl-[30px] md:py-[20px] rounded-[4px] bg-[#1D2124]">
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 16 16"
              color="#0BDF0E"
              height="30"
              width="30"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M15.528 2.973a.75.75 0 0 1 .472.696v8.662a.75.75 0 0 1-.472.696l-7.25 2.9a.75.75 0 0 1-.557 0l-7.25-2.9A.75.75 0 0 1 0 12.331V3.669a.75.75 0 0 1 .471-.696L7.443.184l.004-.001.274-.11a.75.75 0 0 1 .558 0l.274.11.004.001zm-1.374.527L8 5.962 1.846 3.5 1 3.839v.4l6.5 2.6v7.922l.5.2.5-.2V6.84l6.5-2.6v-.4l-.846-.339Z"
              ></path>
            </svg>
            <div className="flex flex-col flex-1">
              <span className="text-[16px] text-[#FFFFFFE5] font-[350] font-poppins">
                Rewards Pool
              </span>
              <span className="md:text-[24px] text-[18px]  font-machina">
                60% (3,000,000,000 GOD)
              </span>
            </div>
          </div>
          <div className="flex items-center gap-8 pl-[20px] py-[15px] md:pl-[30px] md:py-[20px] rounded-[4px] bg-[#1D2124]">
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 16 16"
              color="#0BDF0E"
              height="30"
              width="30"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M15.528 2.973a.75.75 0 0 1 .472.696v8.662a.75.75 0 0 1-.472.696l-7.25 2.9a.75.75 0 0 1-.557 0l-7.25-2.9A.75.75 0 0 1 0 12.331V3.669a.75.75 0 0 1 .471-.696L7.443.184l.004-.001.274-.11a.75.75 0 0 1 .558 0l.274.11.004.001zm-1.374.527L8 5.962 1.846 3.5 1 3.839v.4l6.5 2.6v7.922l.5.2.5-.2V6.84l6.5-2.6v-.4l-.846-.339Z"
              ></path>
            </svg>
            <div className="flex flex-col flex-1">
              <span className="text-[16px] text-[#FFFFFFE5] font-[350] font-poppins">
                Partnerships and Ecosystem Growth
              </span>
              <span className="md:text-[24px] text-[18px]  font-machina">
                14% (700,000,000 GOD)
              </span>
            </div>
          </div>
          <div className="flex items-center gap-8 pl-[20px] py-[15px] md:pl-[30px] md:py-[20px] rounded-[4px] bg-[#1D2124]">
            <div className=" text-[#0BDF0E] text-[30px]">
              <RiTeamFill />
            </div>
            <div className="flex flex-col flex-1">
              <span className="text-[16px] text-[#FFFFFFE5] font-[350] font-poppins">
                Team and Advisors
              </span>
              <span className="md:text-[24px] text-[18px]  font-machina">
                10% (500,000,000 GOD)
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Tokenomics;
