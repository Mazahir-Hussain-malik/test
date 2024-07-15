import React from "react";

const Roadmap = () => {
  return (
    <div className="roadmap  h-auto">
      <div className="md:my-[5rem] md:pb-0 pb-[8rem] relative ">
        <h2 className="text-[56px] text-center my-[4rem] font-semibold text-[#0BDF0E]">
          Roadmap
        </h2>
      </div>

      <div className=" flex  justify-center md:flex-row flex-col  gap-[3rem] relative md:items-start items-center">
        <div className=" flex flex-col md:my-[4rem] md:gap-[15rem] gap-[3rem] ">
          <div className=" bg-[#141b22]/[20] border border-[#0BDF0E]/40 h-[240px]  md:w-[500px] w-[95%] flex justify-center gap-[0.5rem] px-[1rem] shadow-lg    flex-col  rounded-[20px] backdrop-blur-[60px]     ">
            <p className="md:text-[24px] text-[18px] font-semibold text-left capitalize text-white">
              Q1: Token Creation and Initial Launch
            </p>
            <div className=" flex flex-col gap-[1rem]">
              <p className="w-full   md:text-base text-[14px] text-left text-[#c2c3c5]">
                Successfully created God Token on the GBGC chain.
              </p>

              <p className="w-full   md:text-base text-[14px] text-left text-[#c2c3c5]">
                Developed and deployed smart contracts.
              </p>

              <p className="w-full   md: text-basetext-[14px]  text-left text-[#c2c3c5]">
                Formalized partnership with Gworld
              </p>
            </div>
          </div>
          <div className="bg-[#141b22]/[20] border border-[#0BDF0E]/40 md:h-[250px] h-auto  md:w-[480px] w-[95%] flex justify-center gap-[0.5rem] px-[2rem] shadow-lg    flex-col  rounded-[20px] backdrop-blur-[60px] py-[1rem] ">
            <p className="text-2xl font-semibold text-left capitalize text-white">
              Q3: Enhancement and Integration
            </p>

            <p className="w-full   text-base text-left text-[#c2c3c5]">
              Implemented platform improvements.
            </p>

            <p className="w-full   text-base text-left text-[#c2c3c5]">
              Facilitated access to Gworld's investments.
            </p>

            <p className="w-[full   text-base text-left text-[#c2c3c5]">
              Enhanced the reward distribution system.
            </p>

            <p className="w-[full   text-base text-left text-[#c2c3c5]">
              Sought additional partnerships.
            </p>
          </div>
        </div>
        <div className=" md:block hidden">
          <img src="/roadmap.svg" alt="" />
        </div>
        <div className=" flex flex-col md:my-[16rem] my-[2rem] md:gap-[15rem] gap-[2rem] ">
          <div className=" bg-[#141b22]/[20] border border-[#0BDF0E]/40 md:h-[250px] h-auto  md:w-[480px] w-[95%] flex justify-center gap-[0.5rem] px-[2rem] shadow-lg    flex-col  rounded-[20px] backdrop-blur-[60px] py-[1rem]   ">
            <p className="text-2xl font-semibold text-left capitalize text-white">
              Q2 : Growth and Expansion
            </p>
            <div className=" flex flex-col md:gap-[0.5rem] gap-[1rem]">
              <p className="w-full h-[23px]  text-base text-left text-[#c2c3c5]">
                Official website launched.
              </p>

              <p className="w-full h-[23px]  md:text-[13px] text-[12px] text-left text-[#c2c3c5]">
                Established presence on major social media platforms.
              </p>

              <p className="w-full h-[23px]   md:text-[13px] text-[12px] text-left text-[#c2c3c5]">
                Organized AMA sessions, webinars, and events.
              </p>

              <p className="w-full h-[23px]   md:text-[13px] text-[12px] text-left text-[#c2c3c5]">
                Began building a community of early adopters and supporters.
              </p>
              <p className="w-full h-[23px]   md:text-[13px] text-[12px] text-left text-[#c2c3c5]">
                Initiated targeted marketing campaigns.
              </p>
            </div>
          </div>
          <div className="bg-[#141b22]/[20] border border-[#0BDF0E]/40 md:h-[250px] h-auto  md:w-[480px] w-[95%] flex justify-center gap-[0.5rem] px-[2rem] shadow-lg    flex-col  rounded-[20px] backdrop-blur-[60px] py-[1rem]  ">
            <p className="text-2xl font-semibold text-left capitalize text-white">
              Q4: Future Developments
            </p>

            <p className="w-full text-[14px] text-[#c2c3c5]">
              Introduced new features and tools.
            </p>

            <p className="w-full text-[14px] text-[#c2c3c5]">
              Expanded reach to international markets.
            </p>

            <p className="w-[full text-[14px] text-[#c2c3c5]">
              Focused on sustainable practices.
            </p>

            <p className="w-[full text-[14px] text-[#c2c3c5]">
              God Token will listing on Tier 1 & 2 Exchange.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Roadmap;
