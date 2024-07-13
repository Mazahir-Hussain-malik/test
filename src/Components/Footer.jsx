import React from "react";
import { FaInstagram } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

const Footer = () => {
  const navlinks = [
    {
      id: 1,
      text: "About us",
      linkto: "/",
    },
    {
      id: 2,
      text: "Tokenomics",
      linkto: "/about",
    },
    {
      id: 3,
      text: "How to",
      linkto: "/roadmap",
    },
    {
      id: 4,
      text: "Roadmap",
      linkto: "/Team",
    },
    {
      id: 5,
      text: "FAQ",
      linkto: "/FAQs",
    },
    {
      id: 5,
      text: "Whitepaper",
      linkto: "/FAQs",
    },
  ];

  return (
    <footer className="border-t border-[#0BDF0E]">
      <div className="flex justify-around items-center md:w-[90%] w-[98%] mx-auto relative md:flex-row flex-col md:h-auto h-[450px] ">
        <div>
          <img src="/logo.png" alt="" className=" w-[100px]" />
          <p className=" text-[14px] w-[282px] text-[#fff]/50 my-2">
            The World’s First and largest Digital Marketplace for Crypto
            Collectibles and Non - Fungible Tokens
          </p>
          <div className=" flex gap-[1rem] my-[1rem]">
            <div className=" bg-[#0BDF0E] text-[#000] md:text-[25px] text-[18px] p-[0.7rem] rounded-full hover:text-[#0BDF0E] transition-all ease-linear delay-150 hover:border-[#0BDF0E] hover:bg-transparent hover:border cursor-pointer w-[40px] h-[40px] flex justify-center items-center">
              <FaInstagram />
            </div>
            <div className=" bg-[#0BDF0E] text-[#000] md:text-[25px] text-[18px] p-[0.7rem] rounded-full hover:text-[#0BDF0E] transition-all ease-linear delay-150 hover:border-[#0BDF0E] hover:bg-transparent hover:border cursor-pointer w-[40px] h-[40px] flex justify-center items-center">
              <FaFacebookF />
            </div>
            <div className=" bg-[#0BDF0E] text-[#000] md:text-[25px] text-[18px] p-[0.7rem] rounded-full hover:text-[#0BDF0E] transition-all ease-linear delay-150 hover:border-[#0BDF0E] hover:bg-transparent hover:border cursor-pointer w-[40px] h-[40px] flex justify-center items-center">
              <FaTwitter />
            </div>
          </div>
        </div>
        <div>
          <div className=" flex md:gap-[1.5rem] gap-[1rem] my-4 ">
            {navlinks.map(({ id, text, linkto }, idx) => {
              return (
                <a
                  href="#"
                  key={id}
                  className=" hover:text-[#0BDF0E] transition-all ease-linear delay-150 md:text-[16px] text-[14px]"
                >
                  {text}
                </a>
              );
            })}
          </div>

          <p className=" absolute bottom-3 md:text-[14px] text-[10px] text-[#0BDF0E] ">
            Copyright © 2024 Blast Penguins. All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
