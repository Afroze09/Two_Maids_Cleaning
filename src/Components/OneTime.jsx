import React, { useState } from "react";
import { data } from "../data";
import Collapse from "react-bootstrap/Collapse";
import { title } from "../data";
import Rooms from "./Rooms";
const OneTime = () => {
  const [visibleA, setVisibleA] = useState(true);
  const [visibleB, setVisibleB] = useState(false);
  const [visibleC, setVisibleC] = useState(false);
  const [open, setOpen] = useState(false);

  const handleButtonClick = (buttonIndex) => {
    setVisibleA(buttonIndex === 0);
    setVisibleB(buttonIndex === 1);
    setVisibleC(buttonIndex === 2);
  };
  return (
    <div className="flex w-screen overflow-x-hidden flex-col">
      <div
        className={`${data[0].bg} h-12 sm:max-md:h-16 md:max-lg:h-20 lg:max-xl:h-24 flex  items-center justify-center  w-full`}
      >
        <h1 className="text-[#015d9c] text-[18px] sm:max-md:text-[21px] md:max-lg:text-[24px] text-center font-semibold">
          {data[0].title}
        </h1>
        <button
          onClick={() => setOpen(!open)}
          aria-controls="example-collapse-text"
          aria-expanded={open}
          className="down"
        >
          <i className="fi fi-rs-angle-circle-down ml-5 text-[18px] sm:max-md:text-[21px] md:max-lg:text-[24px] text-[#015d9c] font-semibold cursor-pointer" />
        </button>
      </div>
      <Collapse in={open} className=" w-full">
        <div className={`${data[0].bg} text-center w-full  px-[14px]`}>
          <div className="flex flex-col  w-full ">
            <div className="flex items-center font-bold  mb-2 justify-between sm:max-xxl:justify-evenly  w-full ">
              <button
                onClick={() => handleButtonClick(0) ? 'using':''}
                aria-controls="example-collapse-text"
                aria-expanded={visibleA}
                className="text-[14px] sm:max-md:text-[16px] md:max-lg:text-[18px]"
              >
                {title[0].title}
              </button>
              <button
                onClick={() => handleButtonClick(1)}
                aria-controls="example-collapse-text"
                aria-expanded={visibleB}
                className="text-[14px] sm:max-md:text-[16px] md:max-lg:text-[18px]"
              >
                {title[1].title}
              </button>
              <button
                onClick={() => handleButtonClick(2)}
                aria-controls="example-collapse-text"
                aria-expanded={visibleC}
                className="text-[14px] sm:max-md:text-[16px] md:max-lg:text-[18px]"
              >
                {title[2].title}
              </button>
            </div>
            <div className="px-[2px] text-[12px] sm:max-md:text-[14px] md:max-lg:text-[16px] flex items-center justify-center text-justify mx-2">
              <Collapse in={visibleA}>
                <p>{title[0].desc}</p>
              </Collapse>
              <Collapse in={visibleB}>
                <p>{title[1].desc}</p>
              </Collapse>
              <Collapse in={visibleC}>
                <p>{title[2].desc}</p>
              </Collapse>
            </div>
          </div>
          <Rooms />
        </div>
      </Collapse>
      
    </div>
  );
};

export default OneTime;
