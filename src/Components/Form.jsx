import React from "react";
import { CgSwapVertical } from "react-icons/cg";

const Form = () => {
  return (
    <div className=" max-w-[650px] relative border border-[#fff]/60 rounded-[12px] p-[1.5rem] mx-auto h-[70vh] flex justify-center flex-col">
      <h2 className=" text-center  text-[24px]">Buy and stake Slart</h2>
      <div className=" py-[1rem] flex justify-center gap-[2rem]">
        <button class="text-14px font-poppins py-[8px] px-[30px] rounded-[32px] bg-[#FFFFFF1F] border-[1px] border-[#FFFFFF]">
          BNB
        </button>
        <button class="text-14px font-poppins py-[8px] px-[30px] rounded-[32px] bg-[#FFFFFF1F] border-[1px] border-[#FFFFFF]">
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
          <div class="bg-[#27173A] h-[52px] rounded-[4px] border-[1px] border-[#444444] flex gap-6 p-4 items-center ">
            <input
              id="coin-input"
              required=""
              placeholder="Enter BNB value"
              class="flex-1 h-full bg-inherit outline-none text-[#FFFFFFB2]"
              type="text"
              value=""
            />
            <div class="w-[1px] h-[100%] bg-[#444444]"></div>
            <div class="flex gap-2 items-center" />
            <span class="text-[12px] text-[#FFFFFFE5] uppercase">BNB</span>
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
          <div class="bg-[#27173A] h-[52px] rounded-[4px] border-[1px] border-[#444444] flex gap-6 p-4 items-center ">
            <input
              id="coin-input"
              required=""
              placeholder="Enter BNB value"
              class="flex-1 h-full bg-inherit outline-none text-[#FFFFFFB2]"
              type="text"
              value=""
            />
            <div class="w-[1px] h-[100%] bg-[#444444]"></div>
            <div class="flex gap-2 items-center" />
            <span class="text-[12px] text-[#FFFFFFE5] uppercase">BNB</span>
          </div>
          <div className=" flex justify-center items-center my-4">
            <button
              type="submit"
              class=" w-full min-h-[58px] flex justify-center items-center rounded-[8px] text-[13px] md:text-[16px] font-[700]  gap-2 !w-[240px] !md:w-[300px] !bg-secondary !rounded-[30px] mt-4 shadow-md shadow-primary bg-[#993bff]"
            >
              <span class="font-machina text-[18px] font-[350]">
                Buy Slart now
              </span>
            </button>
          </div>

          <div class="hidden md:block absolute w-[98px] h-[93px] bg-[#7304C2] left-8 top-8 blur-[30px]"></div>
        </div>
      </div>
    </div>
  );
};

export default Form;
