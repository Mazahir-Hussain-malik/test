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
            <div class="h-[145vh] border-l-[2px] border-[#9E9E9E] border-dashed"></div>
            <div class="absolute flex flex-col justify-between h-[180vh] top-0 ">
              <div class="flex items-center justify-center rounded-[50%] w-[34px] h-[34px] border-[1px] border-[#A5A5A5] bg-[#0BDF0E]/80 font-machina text-[18px]">
                1
              </div>
              <div class="flex items-center justify-center rounded-[50%] w-[34px] h-[34px] border-[1px] border-[#A5A5A5] bg-[#0BDF0E]/80 font-machina text-[18px]">
                2
              </div>
              <div class="flex items-center justify-center rounded-[50%] w-[34px] h-[34px] border-[1px] border-[#A5A5A5] bg-[#0BDF0E]/80  font-machina text-[18px]">
                3
              </div>
              <div class="flex items-center justify-center rounded-[50%] w-[34px] h-[34px] border-[1px] border-[#A5A5A5] bg-[#0BDF0E]/80  font-machina text-[18px]">
                4
              </div>
              <div class="flex items-center justify-center rounded-[50%] w-[34px] h-[34px] border-[1px] border-[#A5A5A5] bg-[#0BDF0E]/80  font-machina text-[18px]">
                5
              </div>
              <div class="flex items-center justify-center rounded-[50%] w-[34px] h-[34px]   font-machina text-[18px]"></div>
            </div>
          </div>
          <div class="flex flex-col gap-4 md:gap-6 ">
            <div class="relative md:h-[310px] h-auto flex flex-col md:gap-[12px] gap-[1rem] rounded-[8px] bg-[#0BDF0E]/10 border-[1px] border-[#BCBCBC] p-[20px] md:p-[30px] ">
              <h3 class=" font-machina text-[24px] leading-[24px]">
                Set Up Your Wallet
              </h3>
              <span class=" whitespace-pre-line text-[13px] font-[350] md:leading-[16px] leading-[24px] font-poppins">
                To get started, you need a wallet compatible with GBGC chain .
                We recommend using MetaMask.
              </span>
              <span class=" whitespace-pre-line text-[13px] font-[350] leading-[16px] font-poppins">
                Instructions to set up MetaMask:
              </span>
              <ol className=" text-[12px] list-decimal mx-auto md:leading-[1.5rem] leading-[2rem]">
                <li>
                  Visit MetaMask and download the extension for your browser or
                  the app for your mobile device.
                </li>
                <li>
                  create a new wallet. Make sure to save your seed phrase
                  securely.
                </li>
                <li className=" font-bold flex flex-col gap-[1rem]">
                  Add GB GC Network:{" "}
                  <ul>
                    <li>
                      {" "}
                      <span className=" font-bold  "> Network Name:</span> GBGC
                    </li>
                    <li className=" flex  gap-[0.5rem]">
                      {" "}
                      <span className=" font-bold"> New RPC URL:</span>{" "}
                      <a
                        href="https://mainnet-rpc.gbgcscan.com/"
                        target="_blank"
                      >
                        https://mainnet-rpc.gbgcscan.com/
                      </a>
                    </li>
                  </ul>
                </li>
              </ol>
              <div class="hidden md:block absolute w-[388px] h-[370px] bg-[#0BDF0E] right-8 top-20  blur-[300px]"></div>
            </div>
            <div class="relative md:h-[310px] h-auto flex flex-col gap-6 rounded-[8px] bg-[#101010]/10 border-[1px] border-[#BCBCBC] p-[20px] md:p-[30px]">
              <h3 class=" font-machina md:text-[24px] text-[22px] md:leading-[24px]">
                Purchase USDT (Bep20)
              </h3>
              <span class=" whitespace-pre-line text-[13px] font-[350] md:leading-[16px] leading-[2rem] font-poppins">
                You will need USDT to purchase God Token. If you don't have any,
                you can buy them from an exchange
              </span>
              <div class=" absolute w-[209px] h-[199px] bg-[#0BDF0E] top-2 right-0  blur-[200px]"></div>
            </div>
            <div class="relative md:h-[310px] h-auto flex flex-col gap-6 rounded-[8px] bg-[#101010]/10 border-[1px] border-[#BCBCBC] p-[20px] md:p-[30px]">
              <h3 class=" font-machina text-[24px] md:sleading-[24px]">
                Add God Token to MetaMask.
              </h3>
              <span class=" whitespace-pre-line text-[13px] font-[350] md:leading-[16px] leading-[24px] font-poppins ">
                {" "}
                Add God Token to your MetaMask wallet to see your token balance
              </span>
              <span class=" whitespace-pre-line text-[13px] font-[350] md:leading-[16px] font-poppins list-item ">
                {" "}
                Open MetaMask and click on "Assets."
              </span>
              <span class=" whitespace-pre-line text-[13px] font-[350] md:leading-[16px] font-poppins list-item ">
                {" "}
                Scroll down and click "Import Tokens."
              </span>
              <span class=" whitespace-pre-line text-[13px] font-[350] md:leading-[16px] leading-[24px] font-poppins list-item ">
                {" "}
                Enter the God Token contract address:
                <br />
                <br />
                0x71DB0111dcDA7Fb5A7464AE9C9b04cD185a5cB5b
              </span>
              <span class=" whitespace-pre-line text-[13px] font-[350] md:leading-[16px] font-poppins list-item ">
                Click "Add Custom Token" and then "Import Tokens."
              </span>
            </div>
            <div class="relative md:h-[310px] flex flex-col gap-6 rounded-[8px] bg-[#101010]/10 border-[1px] border-[#BCBCBC] p-[20px] md:p-[30px]">
              <h3 class=" font-machina text-[24px] md:leading-[24px]">
                Buy God Token
              </h3>
              <span class=" whitespace-pre-line text-[13px] font-[350] md:leading-[16px] leading-[24px] font-poppins ">
                Instructions to buy God Token:
              </span>
              <span class=" whitespace-pre-line text-[13px] font-[350] md:leading-[16px] leading-[24px] font-poppins list-item ">
                {" "}
                Connect your wallet by clicking on "BUYGODNOW."
              </span>
              <span class=" whitespace-pre-line text-[13px] font-[350] md:leading-[16px] leading-[24px] font-poppins list-item ">
                {" "}
                Enter the amount of USDT (Minimum $25) you wish to exchange for
                God Token.
              </span>
              <span class=" whitespace-pre-line text-[13px] font-[350] md:leading-[16px] leading-[24px] font-poppins list-item ">
                {" "}
                Ensure you enter your God Token address correctly to receive
                your tokens.
              </span>
              <span class=" whitespace-pre-line text-[13px] font-[350] md:leading-[16px] leading-[24px] font-poppins list-item ">
                Click and confirm the transaction in your wallet.
              </span>
              <span class=" whitespace-pre-line text-[13px] font-[350] md:leading-[16px] leading-[24px] font-poppins list-item ">
                Copy the code to receive 1% Usdt rewards on Gworld
              </span>
            </div>

            <div class="relative md:h-[310px] flex flex-col gap-6 rounded-[8px] bg-[#101010]/10 border-[1px] border-[#BCBCBC] p-[20px] md:p-[30px]">
              <h3 class=" font-machina text-[24px] md:leading-[24px] ">
                Get 1% USDT Rewards
              </h3>
              <span class=" whitespace-pre-line text-[13px] font-[350] md:leading-[16px] leading-[24px] font-poppins ">
                To receive 1% daily USDT rewards, follow these steps:
              </span>
              <span class=" whitespace-pre-line text-[13px] font-[350] md:leading-[16px] leading-[24px] font-poppins list-item ">
                {" "}
                Visit the Gworld platform: [Gworld URL].
              </span>
              <span class=" whitespace-pre-line text-[13px] font-[350] md:leading-[16px] leading-[24px] font-poppins list-item ">
                {" "}
                Create an account or log in if you already have one.
              </span>
              <span class=" whitespace-pre-line text-[13px] font-[350] md:leading-[16px] leading-[24px] font-poppins list-item ">
                {" "}
                Navigate to the "Rewards" section.
              </span>
              <span class=" whitespace-pre-line text-[13px] font-[350] md:leading-[16px] leading-[24px] font-poppins list-item ">
                Paste your unique code [Your Unique Code] into the designated
                field.
              </span>
              <span class=" whitespace-pre-line text-[13px] font-[350] md:leading-[16px] leading-[24px] font-poppins list-item ">
                Follow the on-screen instructions to complete the setup.
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowToBuy;
