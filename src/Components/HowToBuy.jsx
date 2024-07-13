import React from "react";

const HowToBuy = () => {
  return (
    <div className=" max-w-[1600px] mx-auto">
      <div class="flex flex-col md:flex-row gap-8 md:gap-20">
        <div class="md:flex-1 relative">
          <div class="flex flex-col items-center gap-4">
            <span class=" text-center text-[36px] leading-[40px] md:text-[56px] md:leading-[62px] font-[350] font-machina">
              How to Buy
            </span>
            <div class=" h-[10px] w-[200px] bg-[#0BDF0E] rounded-full"></div>
          </div>
        </div>
        <div class="md:flex-1 md:flex gap-12">
          <div class="hidden md:flex relative h-[470px]  justify-center">
            <div class="h-full border-l-[2px] border-[#9E9E9E] border-dashed"></div>
            <div class="absolute flex flex-col justify-between h-full top-0 ">
              <div class="flex items-center justify-center rounded-[50%] w-[34px] h-[34px] border-[1px] border-[#A5A5A5] bg-[#0BDF0E]/80 font-machina text-[18px]">
                1
              </div>
              <div class="flex items-center justify-center rounded-[50%] w-[34px] h-[34px] border-[1px] border-[#A5A5A5] bg-[#0BDF0E]/80 font-machina text-[18px]">
                2
              </div>
              <div class="flex items-center justify-center rounded-[50%] w-[34px] h-[34px] border-[1px] border-[#A5A5A5] bg-[#0BDF0E]/80  font-machina text-[18px]">
                3
              </div>
            </div>
          </div>
          <div class="flex flex-col gap-4 md:gap-6 ">
            <div class="relative flex flex-col gap-6 rounded-[8px] bg-[#0BDF0E]/10 border-[1px] border-[#BCBCBC] p-[20px] md:p-[30px]">
              <h3 class=" font-machina text-[24px] leading-[24px]">
                Setup A wallet
              </h3>
              <span class=" whitespace-pre-line text-[13px] font-[350] leading-[16px] font-poppins">
                Choose and install a wallet that supports BNB Smart Chain (e.g.,
                MetaMask, Trust Wallet, Binance Chain Wallet).
              </span>
              <div class="hidden md:block absolute w-[388px] h-[370px] bg-[#0BDF0E] right-8 top-20  blur-[300px]"></div>
            </div>
            <div class="relative flex flex-col gap-6 rounded-[8px] bg-[#101010]/10 border-[1px] border-[#BCBCBC] p-[20px] md:p-[30px]">
              <h3 class=" font-machina text-[24px] leading-[24px]">
                Purchase BNB and Transfer to Your Wallet
              </h3>
              <span class=" whitespace-pre-line text-[13px] font-[350] leading-[16px] font-poppins">
                Buy BNB from exchanges like Binance or Coinbase. Transfer BNB to
                your BNB Smart Chain wallet address.
              </span>
              <div class=" absolute w-[209px] h-[199px] bg-[#0BDF0E] top-2 right-0  blur-[200px]"></div>
            </div>
            <div class="relative flex flex-col gap-6 rounded-[8px] bg-[#101010]/10 border-[1px] border-[#BCBCBC] p-[20px] md:p-[30px]">
              <h3 class=" font-machina text-[24px] leading-[24px]">
                Swap BNB for SLART
              </h3>
              <span class=" whitespace-pre-line text-[13px] font-[350] leading-[16px] font-poppins">
                {" "}
                Make use of the Official website. Enter the amount of BNB to
                swap, review, and proceed to start. Be Aware of Gas Fees:
                Transactions on the BNB Smart Chain require a small fee in BNB.
                Ensure you have enough BNB smartchain in your wallet to cover
                these fees.
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowToBuy;
