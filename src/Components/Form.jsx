import React, { useState } from "react";
import { CgSwapVertical } from "react-icons/cg";
import Btn from "./Btn";

const Form = () => {
  const [activeTab, setActiveTab] = useState(0);
  return (
    <div className=" max-w-[600px] relative border border-[#fff]/80   bg-[#000]  rounded-[12px] p-[1.5rem] mx-auto md:h-[70vh] h-auto flex  flex-col">
      <h2 className=" text-center  text-[40px] font-bold  uppercase">
        Buy and stake GOD
      </h2>
      <div className="hidden md:block absolute w-[98px] h-[93px] bg-[#0BDF0E] left-8 top-8 blur-[30px]"></div>

      <div className=" py-[1rem] flex justify-center gap-[2rem]">
        <button
          className={` ${
            activeTab == 0
              ? "font-poppins py-[8px] px-[30px] rounded-[32px] bg-[#FFFFFF1F] border-[1px] border-[#0BDF0E]"
              : ""
          } text-14px   flex items-center justify-center`}
          onClick={() => setActiveTab(0)}
        >
          USDT
        </button>
        <button
          className={` ${
            activeTab == 1
              ? "font-poppins py-[8px] px-[30px] rounded-[32px] bg-[#FFFFFF1F] border-[1px] border-[#0BDF0E]"
              : ""
          } "text-14px flex items-center justify-center "`}
          onClick={() => setActiveTab(1)}
        >
          GOD
        </button>
      </div>

      <div>
        <div className=" flex justify-between w-[90%] mx-auto text-[12px]">
          <p>$200,000</p>
          <p>$2,000,000</p>
        </div>
        <div className=" w-[95%] ml-2 bg-[#fff] h-[15px] rounded-full  my-[0.5rem]"></div>
        <div className=" flex justify-between w-[90%] mx-auto text-[12px] font-semibold">
          <p>USDT</p>
          <p>GOD</p>
        </div>
      </div>
      <div className={`${activeTab == 0 ? "block" : "hidden "}`}>
        <div>
          <div className="my-[2rem]">
            <label htmlFor="" className=" py-2">
              USDT
            </label>
            <div className="bg-green-900 h-[52px] rounded-[4px] border-[1px] border-[#444444] flex gap-6 p-4 items-center ">
              <input
                id="coin-input"
                required=""
                placeholder="Enter USDT value"
                className="flex-1 h-full bg-inherit outline-none text-[#FFFFFFB2]"
                type="text"
              />
              <div className="w-[1px] h-[100%] bg-[#444444]"></div>
              <div className="flex gap-2 items-center" />
              <span className="text-[12px] text-[#FFFFFFE5] uppercase">
                USDT
              </span>
            </div>
          </div>
        </div>
        <div className=" h-[40px] w-[40px] text-[30px] flex justify-center items-center mx-auto rounded-full border  text-[#fff]">
          <CgSwapVertical />
        </div>
        <div>
          <div className="my-[0.4rem]">
            <label htmlFor="" className=" py-2">
              GOD
            </label>
            <div className="bg-green-900 h-[52px] rounded-[4px] border-[1px] border-[#444444] flex gap-6 p-4 items-center ">
              <input
                id="coin-input"
                required=""
                placeholder="Enter GOD value"
                className="flex-1 h-full  outline-none text-[#fff] bg-transparent"
                type="text"
              />
              <div className="w-[1px] h-[100%] bg-[#444444]"></div>
              <div className="flex gap-2 items-center" />
              <span className="text-[12px] text-[#FFFFFFE5] uppercase">
                GOD
              </span>
            </div>
            <div className=" flex justify-center items-center my-8">
              <Btn text={"BUY GOD NOW "} />
            </div>
          </div>
        </div>
      </div>
      <div className={`${activeTab == 1 ? "block" : "hidden "}`}>
        <h4 class="text-[16px] font-poppins text-[#FFFFFFB2] text-center my-[1rem]">
          Send USDT to the address below:
        </h4>
        <div class="bg-green-900 h-[52px] rounded-[4px] border-[1px] border-[#444444] flex gap-6 p-4 items-center w-full ">
          <span class="text-[#FFFFFFB2] overflow-x-auto overflow-y-hidden">
            6PVFgdUon3HrDhRYF68DFktRWYASVtnNRLuiMkN8zcvw
          </span>
          <button class="ml-auto text-[#FFFFFFB2] hover:text-[#FFFFFF]">
            Copy
          </button>
        </div>
      </div>
    </div>
  );
};

export default Form;
