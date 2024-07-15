import Btn from "./Btn";
import { RxCross1 } from "react-icons/rx";
import { AiOutlineMenu } from "react-icons/ai";
import { useState } from "react";
import { BiLogoTelegram } from "react-icons/bi";
import { IoLogoTwitter } from "react-icons/io";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  const togglerNav = () => {
    setToggle(!toggle);
  };

  const navlinks = [
    {
      link: "#Home",
      text: "About us",
    },
    {
      link: "#Tokenomics",
      text: "Tokenomics",
    },

    {
      link: "#HowtoBuy",
      text: "How to",
    },
    {
      link: "#Roadmap",
      text: "Roadmap",
    },
    {
      link: "#Faqs",
      text: "FAQ",
    },

    {
      link: "https://www.mygoodway.world/",
      text: "GWorld",
    },
  ];
  return (
    <div className=" fixed w-[100%] z-50">
      <div className="  bg-[#040B11]  max-w-full mx-auto z-50">
        {/* for large screens */}
        <div className="md:block hidden">
          <nav className="flex md:justify-around  items-center item-start py-[2rem] md:flex-row flex-col">
            <div>
              <a className="flex items-center">
                <img src="/logo.png" alt="" className=" w-[80px]" />{" "}
                <h1 class="gradient-text font-[Poppins] text-[35px] font-bold tracking-widest">
                  GOD
                </h1>
              </a>
            </div>
            <div className="flex gap-[1.5rem] items-center  md:flex-row flex-col md:my-0 my-2">
              {navlinks.map((items, index) => {
                return (
                  <li
                    key={index}
                    className="text-[#fff] hover:text-[#0BDF0E] duration-all transition-all  text-[14px]   leading-24 tracking-wider  list-none"
                  >
                    <a href={items.link}>{items.text}</a>
                  </li>
                );
              })}
              <a href="/whitespaper.pdf" target="_blank">
                Whitepaper
              </a>
            </div>
            <div className="flex items-center gap-[1rem]">
              <div className="flex gap-[1rem] text-[24px]  ">
                <a
                  href="https://t.me/+0Rk3y7LzbmZiZmRl"
                  target="_blank"
                  className=" bg-[#0BDF0E]/70 p-[1rem] border border-[#0BDF0E]/70 rounded-full hover:bg-transparent  hover:text-[#0BDF0E]/70 transition-all ease-linear delay-150  "
                >
                  <BiLogoTelegram className="  " />
                </a>
                <a
                  href="https://x.com/gworldgod "
                  target="_blank"
                  className="  bg-[#0BDF0E]/70 p-[1rem] border border-[#0BDF0E]/70 rounded-full hover:bg-transparent  hover:text-[#0BDF0E]/70 transition-all ease-linear delay-150"
                >
                  <IoLogoTwitter />
                </a>
              </div>
            </div>
          </nav>
        </div>

        {/* for mobile view */}
        <div className="md:hidden block">
          <nav className="flex md:justify-around  flex-col py-[1.5rem]">
            <div>
              <a className="flex">
                <img src="/logo.png" alt="" className=" w-[80px]" />
              </a>
            </div>
            <div className="text-[#fff] absolute right-10 top-10 text-[26px]">
              {toggle ? (
                <RxCross1 onClick={togglerNav} />
              ) : (
                <AiOutlineMenu onClick={togglerNav} />
              )}
            </div>

            <div
              className={`${
                toggle
                  ? "absolute h-screen bg-black w-[70%] top-[12%] transition-all ease-out delay-150"
                  : "hidden"
              }`}
            >
              <div className="flex gap-[2rem] absolute left-[5%]   flex-col md:my-0 my-[2rem]">
                {navlinks.map((items, index) => {
                  return (
                    <li
                      key={index}
                      className="text-[#fff] font-clash-display text-16   leading-26 tracking-wider  list-none"
                    >
                      <a href={items.link}> {items.text}</a>
                    </li>
                  );
                })}
              </div>
              <div className="absolute bottom-[40%] left-[5%]">
                <div className="flex gap-[1rem] text-[24px] my-[2rem] ">
                  <a
                    href="https://t.me/KAAthePythonSOL"
                    target="_blank"
                    className=" bg-[#fff]/30 p-[1rem] rounded-full hover:bg-[#fff] hover:text-[#000] transition-all ease-linear delay-150  "
                  >
                    <BiLogoTelegram className="  " />
                  </a>
                  <a
                    href="https://twitter.com/KAAcoinSOL"
                    target="_blank"
                    className="  bg-[#fff]/30 p-[1rem] rounded-full hover:bg-[#fff] hover:text-[#000] transition-all ease-linear delay-150"
                  >
                    <IoLogoTwitter />
                  </a>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
