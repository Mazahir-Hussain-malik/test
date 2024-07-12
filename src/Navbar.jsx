import React, { useState } from "react";
import { FaXTwitter } from "react-icons/fa6";
import { FaTelegramPlane } from "react-icons/fa";
import { IoMdMenu } from "react-icons/io";

const Navbar = () => {
  const [show, setShow] = useState(false);
  return (
    <div className=" w-full border-b-[0.3px] shadow-lg   py-[2rem] ">
      {" "}
      <nav className=" max-w-[1600px] border border-[#fff]/80 py-[0.8rem] mx-auto md:rounded-full shadow-lg px-4 flex justify-between md:items-center bg-gradient-to-bl from-purple-950 to-zinc-900 text-[#fff] md:flex-row flex-col ">
        <div>
          <img src="/logo.png" alt="" />
        </div>
        <div
          className={` ${
            show
              ? "  flex md:flex-row  flex-col md:px-0 px-[1rem]   md:my-0 my-[2rem] "
              : " md:flex hidden"
          }  text-[14px] list-none md:gap-[1rem] gap-[2rem]`}
        >
          <li>About Us</li>
          <li>Tokenomics</li>
          <li>How to</li>
          <li>FAQ</li>
          <li>Whitepaper</li>
        </div>
        <div
          className={` ${
            show ? "  flex  " : " md:flex hidden"
          }  md:px-0 px-[1rem] gap-[12px] text-[20px]`}
        >
          <FaXTwitter />
          <FaTelegramPlane />
        </div>

        <div
          className=" absolute right-10 text-[24px] md:hidden block"
          onClick={() => setShow(!show)}
        >
          <IoMdMenu />
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
