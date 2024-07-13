import React from "react";
import { useState } from "react";
import { FaPlus } from "react-icons/fa6";

const Faqs = () => {
  const [open, setIsOpen] = useState(0);

  function handlePopUp(index) {
    setIsOpen(open === index ? null : index);
  }

  const data = [
    {
      id: 1,
      heading: `  Lorem ipsum, dolor sit amet consectetur adipisicing.`,
      paragraph: ` Urna vitae erat et lacus, consectetur ac nulla vestibulum
                lobortis. Nulla dapibus urna volutpat venenatis, risus faucibus.`,
    },
    {
      id: 2,
      heading: `  Lorem ipsum, dolor sit amet consectetur adipisicing.`,
      paragraph: ` Urna vitae erat et lacus, consectetur ac nulla vestibulum
                lobortis. Nulla dapibus urna volutpat venenatis, risus faucibus.`,
    },
    {
      id: 3,
      heading: `  Lorem ipsum, dolor sit amet consectetur adipisicing.`,
      paragraph: ` Urna vitae erat et lacus, consectetur ac nulla vestibulum
                lobortis. Nulla dapibus urna volutpat venenatis, risus faucibus.`,
    },
    {
      id: 4,
      heading: `  Lorem ipsum, dolor sit amet consectetur adipisicing.`,
      paragraph: ` Urna vitae erat et lacus, consectetur ac nulla vestibulum
                lobortis. Nulla dapibus urna volutpat venenatis, risus faucibus.`,
    },
    {
      id: 5,
      heading: `  Lorem ipsum, dolor sit amet consectetur adipisicing.`,
      paragraph: ` Urna vitae erat et lacus, consectetur ac nulla vestibulum
                lobortis. Nulla dapibus urna volutpat venenatis, risus faucibus.`,
    },
  ];

  return (
    <div className="py-[3rem] relative  ">
      <h2 className="md:text-[56px] text-[30px] font-semibold text-[#0BDF0E] text-center my-[2rem]">
        FAQS
      </h2>
      <div className="flex justify-center flex-col items-center gap-[1rem] md:w-[40%] w-[98%]  mx-auto ">
        {data.map((items, index) => {
          return (
            <div
              key={index}
              className="shadow-xl border-2 border-[#152329] rounded-[10px]  flex flex-col justify-center     w-full hover:bg-[#28323b] transition-all ease-out delay-150 cursor-pointer "
            >
              <div className=" flex justify-between items-center">
                <h2 className="md:text-[16px] text-[10px] shadow-2xl  font-semibold flex md:gap-[2rem] gap-[1rem] md:px-4 px-2 items-center  ">
                  <span>0{index + 1}</span> {items.heading}
                </h2>
                <p
                  className=" bg-[#152329] w-[86px] md:h-[80px]  h-[60px] flex items-center justify-center md:text-[25px] text-[18px] hover:bg-[#0BDF0E] transition-all ease-linear delay-150 "
                  onClick={() => handlePopUp(index)}
                >
                  <FaPlus />
                </p>
              </div>
              {open === index && (
                <div className="text-[#C2C3C5] md:text-[18px] text-[10px] font-normal py-[1rem] transition-all ease-in-out delay-150 text-center ">
                  <hr className="bg-[#C2C3C5]" />
                  <p className="md:w-[100%] w-[100%] my-[1rem]">
                    {items.paragraph}
                  </p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Faqs;
