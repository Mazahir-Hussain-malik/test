import React from "react";
import { FaInstagram } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

const Footer = () => {
  const navlinks = [
    {
      id: 1,
      text: "About us",
      linkto: "#Home",
    },

    {
      id: 3,
      text: "How to",
      linkto: "#HowtoBuy",
    },
    {
      id: 4,
      text: "Roadmap",
      linkto: "#Roadmap",
    },
    {
      id: 5,
      text: "FAQ",
      linkto: "#Faqs",
    },
  ];

  return (
    <footer className="border-t border-[#0BDF0E]">
      <div className="flex justify-around items-center md:w-[90%] w-[98%] mx-auto relative md:flex-row flex-col md:h-auto h-[450px] ">
        <div>
          <img src="/logo.png" alt="" className=" w-[80px]" />
          <p className=" text-[14px] w-[282px] text-[#fff]/50 my-2">
            <a href="http://www.gmail.com" target="_blank">
              info@godcoin.world
            </a>
          </p>
          <div className=" flex gap-[1rem] my-[1rem]">
            <div className=" bg-[#0BDF0E] text-[#000] md:text-[25px] text-[18px] p-[0.7rem] rounded-full hover:text-[#0BDF0E] transition-all ease-linear delay-150 hover:border-[#0BDF0E] hover:bg-transparent hover:border cursor-pointer w-[40px] h-[40px] flex justify-center items-center">
              <a href="https://www.instagram.com/_g.world/" target="_blank">
                <FaInstagram />
              </a>
            </div>
            <div className=" bg-[#0BDF0E] text-[#000] md:text-[25px] text-[18px] p-[0.7rem] rounded-full hover:text-[#0BDF0E] transition-all ease-linear delay-150 hover:border-[#0BDF0E] hover:bg-transparent hover:border cursor-pointer w-[40px] h-[40px] flex justify-center items-center">
              <a
                href="https://www.facebook.com/profile.php?id=61561656124722"
                target="_blank"
              >
                <FaFacebookF />
              </a>
            </div>
            <div className=" bg-[#0BDF0E] text-[#000] md:text-[25px] text-[18px] p-[0.7rem] rounded-full hover:text-[#0BDF0E] transition-all ease-linear delay-150 hover:border-[#0BDF0E] hover:bg-transparent hover:border cursor-pointer w-[40px] h-[40px] flex justify-center items-center">
              <a href="  https://x.com/gworldgod" target="_blank">
                {" "}
                <FaTwitter />
              </a>
            </div>
          </div>
        </div>
        <div>
          <div className=" flex md:gap-[1.5rem] gap-[1rem] my-4 ">
            {navlinks.map(({ id, text, linkto }, idx) => {
              return (
                <a
                  href={linkto}
                  key={id}
                  className=" hover:text-[#0BDF0E] transition-all ease-linear delay-150 md:text-[16px] text-[14px]"
                >
                  {text}
                </a>
              );
            })}
            <a href="/whitespaper.pdf" target="_blank">
              Whitepaper
            </a>
          </div>

          <p className=" absolute bottom-3 md:text-[14px] text-[10px] text-[#0BDF0E] ">
            Copyright ©GOD TOKEN 2024 . All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
