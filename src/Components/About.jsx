import React from "react";

const About = () => {
  return (
    <div className=" relative treasury md:h-screen md:my-[4rem]">
      <div className=" md:max-w-[1200px] w-[95%] md:h-[80vh] h-auto  rounded-[14px] shadow-xl mx-auto md:p-[3rem] p-[1rem]  mainDiv md:my-0 my-[2rem] relative ">
        <div className="absolute md:block hidden right-[-10%]   md:top-[-10%] top-[-4%] z-[1]">
          <img src="/star.svg" alt="" className=" w-[100%]" />
        </div>
        <div>
          <h2 className="text-green-500 text-center text-shadow-lg font-Clash font-semibold md:text-[56px] text-[20px] leading-10 py-[2rem]">
            About Us
          </h2>
          <p className=" md:text-[20px] text-[16px] font-[350] ">
            Welcome to God Token, a pioneering crypto asset on the GBGC chain.
            We are a dynamic team of blockchain enthusiasts, financial experts,
            and tech innovators dedicated to transforming the crypto investment
            landscape. Our mission is to provide our community with a unique
            opportunity to earn daily rewards and gain access to high-potential
            investments through our collaboration with Gworld.
          </p>
        </div>
        <div className=" my-[3rem]">
          <h2 className="text-green-500 text-center text-shadow-lg font-Clash font-semibold md:text-[56px] text-[20px] leading-10 py-[2rem]">
            Our Mission
          </h2>
          <p className=" md:text-[20px] text-[16px] font-[350] ">
            At God Token, we believe in the power of decentralized finance to
            unlock new opportunities for wealth creation. Our primary goal is to
            offer a secure, transparent, and rewarding investment experience. By
            holding God Token, our users can earn 1% daily USDT rewards and
            benefit from the robust investment strategies of Gworld.
          </p>
        </div>
        <div className=" absolute md:block hidden  bottom-[-17%] left-[-10%]  w-[300px] ">
          <img src="/cube.svg" alt="" className="md:w-[100%] w-[40%] " />
        </div>
      </div>
    </div>
  );
};

export default About;
