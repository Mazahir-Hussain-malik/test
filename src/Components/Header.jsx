import React from "react";
import Form from "./Form";
import Btn from "./Btn";

const Header = () => {
  return (
    <section className="header">
      <div className=" flex md:flex-row flex-col justify-around md:h-[115vh]  md:py-[4rem] py-[8rem] items-center max-w-[1600px] mx-auto  ">
        <div className=" max-w-[800px] py-[3rem] flex flex-col justify-center  gap-[1rem] md:w-1/2 w-full">
          <h2 className=" md:text-[64px] text-[24px] md:max-w-[1000px] w-[95%] mx-auto   md:tracking-[3px] font-bold md:leading-[70px] leading-[45px]    ">
            Earn 1% Daily USDT with God Token
          </h2>
          <h3 className=" text-[20px] font-bold w-[95%] mx-auto">
            The Future of Crypto Investment on the GBGC Chain with Gworld
          </h3>
          <p className="md:max-w-[1200px] w-[95%] mx-auto  md:text-[16px] text-[16px] leading-[33px]">
            Paragraph - God Token is a revolutionary new crypto token on the
            GBGC chain. Our mission is to provide crypto enthusiasts with an
            opportunity to earn daily rewards and gain easy access to
            high-potential investments through our partnership with Gworld.
          </p>
          <div className=" md:w-[300px] my-[1rem] md:ml-3 ml-[1rem]">
            <Btn text={"Connect Wallet"} />
          </div>
        </div>
        <div className="md:w-1/2 w-[95%] py-[2rem] ">
          <Form />
        </div>
      </div>
    </section>
  );
};

export default Header;
