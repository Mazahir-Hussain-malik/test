import React from "react";
import { CgSwapVertical } from "react-icons/cg";
import Btn from "./Btn";

const Form = () => {
  return (
    <div className=" max-w-[600px] relative border border-[#fff]/60   glass rounded-[12px] p-[1.5rem] mx-auto h-[70vh] flex justify-center flex-col">
      <h2 className=" text-center  text-[40px] ">Buy and stake Slart</h2>
      <div className=" py-[1rem] flex justify-center gap-[2rem]">
        <button className="text-14px font-poppins py-[8px] px-[30px] rounded-[32px] bg-[#FFFFFF1F] border-[1px] border-[#0BDF0E]">
          BNB
        </button>
        <button className="text-14px font-poppins py-[8px] px-[30px] rounded-[32px] bg-[#FFFFFF1F] border-[1px] border-[#0BDF0E]">
          SOL
        </button>
      </div>

      <div>
        <div className=" flex justify-between w-[90%] mx-auto text-[12px]">
          <p>$200,000</p>
          <p>$2,000,000</p>
        </div>
        <div className=" w-[95%] ml-2 bg-[#fff] h-[15px] rounded-full  my-[0.5rem]"></div>
        <div className=" flex justify-between w-[90%] mx-auto text-[12px] font-semibold">
          <p>Softcap</p>
          <p>Hardcap</p>
        </div>
      </div>
      <div>
        <div className="my-[2rem]">
          <label htmlFor="" className=" py-2">
            BNB
          </label>
          <div className="bg-green-900 h-[52px] rounded-[4px] border-[1px] border-[#444444] flex gap-6 p-4 items-center ">
            <input
              id="coin-input"
              required=""
              placeholder="Enter BNB value"
              className="flex-1 h-full bg-inherit outline-none text-[#FFFFFFB2]"
              type="text"
            />
            <div className="w-[1px] h-[100%] bg-[#444444]"></div>
            <div className="flex gap-2 items-center" />
            <span className="text-[12px] text-[#FFFFFFE5] uppercase">BNB</span>
          </div>
        </div>
      </div>
      <div className=" h-[40px] w-[40px] text-[30px] flex justify-center items-center mx-auto rounded-full border  text-[#fff]">
        <CgSwapVertical />
      </div>
      <div>
        <div className="my-[0.4rem]">
          <label htmlFor="" className=" py-2">
            SLRT
          </label>
          <div className="bg-green-900 h-[52px] rounded-[4px] border-[1px] border-[#444444] flex gap-6 p-4 items-center ">
            <input
              id="coin-input"
              required=""
              placeholder="Enter BNB value"
              className="flex-1 h-full  outline-none text-[#fff] bg-transparent"
              type="text"
            />
            <div className="w-[1px] h-[100%] bg-[#444444]"></div>
            <div className="flex gap-2 items-center" />
            <span className="text-[12px] text-[#FFFFFFE5] uppercase">BNB</span>
          </div>
          <div className=" flex justify-center items-center my-8">
            <Btn text={"BUY SLERT NOW "} />
          </div>

          <div className="hidden md:block absolute w-[98px] h-[93px] bg-[#0BDF0E] left-8 top-8 blur-[30px]"></div>
        </div>
      </div>
    </div>
  );
};

export default Form;
