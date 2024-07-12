import React from "react";

const Header = () => {
  return (
    <div className=" py-[3rem] flex flex-col justify-center items-center gap-[1rem]">
      <h2 className=" md:text-[40px] text-[20px] max-w-[1000px] mx-auto  tracking-[3px] text-center ">
        SLART: Where Memes Meet Meaning
      </h2>
      <p className="max-w-[1200px] mx-auto text-center md:text-[20px] text-[16px] leading-[40px]">
        SLART, the Silly Legendary And Rad Token, merges the fun of memes with
        real utility on the Binance Smart Chain. Join us in revolutionizing the
        meme coin space!
      </p>
      <button
        className="px-[32px] py-[12px] border rounded-full text-center mx-auto shadow-lg 
      "
      >
        Connect Wallet{" "}
      </button>
    </div>
  );
};

export default Header;
