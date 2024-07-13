import React from "react";
import Form from "./Form";
import Btn from "./Btn";

const Header = () => {
  return (
    <section className="header">
      <div className=" flex justify-around md:h-[115vh] h-auto py-[4rem] items-center max-w-[1600px] mx-auto  ">
        <div className=" max-w-[800px] py-[3rem] flex flex-col justify-center  gap-[1rem] md:w-1/2 w-full">
          <h2 className=" md:text-[64px] text-[24px] max-w-[1000px] mx-auto   tracking-[3px] font-bold leading-[70px]   ">
            SLART: Where Memes Meet Meaning
          </h2>
          <p className="max-w-[1200px] mx-auto  md:text-[16px] text-[16px] leading-[36px]">
            SLART, the Silly Legendary And Rad Token, merges the fun of memes
            with real utility on the Binance Smart Chain. Join us in
            revolutionizing the meme coin space!
          </p>
          <div className=" md:w-[300px] my-[1rem]">
            <Btn text={"Connect Wallet"} />
          </div>
        </div>
        <div className="w-1/2 py-[2rem]">
          <Form />
        </div>
      </div>
    </section>
  );
};

export default Header;
