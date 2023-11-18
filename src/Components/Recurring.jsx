import React, { useState } from "react";
import { data } from "../data";
import Collapse from "react-bootstrap/Collapse";
import { title } from "../data";
import Rooms from "./Rooms";

const Recurring = () => {
    const [visibleA, setVisibleA] = useState(true);
  const [visibleB, setVisibleB] = useState(false);
  const [open, setOpen] = useState(false);

  const handleButtonClick = (buttonIndex) => {
    setVisibleA(buttonIndex === 3);
    setVisibleB(buttonIndex === 4);
  };
  return (
    <div className="flex w-full flex-col overflow-x-hidden">
      <div
        className={`${data[1].bg} h-12 sm:max-md:h-16 md:max-lg:h-20 lg:max-xl:h-24 flex  items-center justify-center  w-full`}
      >
        <h1 className="text-[#015d9c] text-[18px] sm:max-md:text-[21px] md:max-lg:text-[24px] text-center font-semibold">
          {data[1].title}
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
      <Collapse in={open}>
        <div className={`${data[1].bg} text-center w-full px-[10px]`}>
          <div className="flex flex-col  w-full ">
            <div className="flex items-center font-semibold justify-evenly w-full ">
              <button
                onClick={() => handleButtonClick(3) ? 'using':''}
                aria-controls="example-collapse-text"
                aria-expanded={visibleA}
                className="text-[14px] sm:max-md:text-[16px] md:max-lg:text-[18px]"
              >
                {title[3].title}
              </button>
              <button
                onClick={() => handleButtonClick(4) ? 'using':''}
                aria-controls="example-collapse-text"
                aria-expanded={visibleB}
                className="text-[14px] sm:max-md:text-[16px] md:max-lg:text-[18px]"
              >
                {title[4].title}
              </button>
              
            </div>
            <div className="px-[2px] text-[12px] sm:max-md:text-[14px] md:max-lg:text-[16px] flex items-center justify-center  text-justify my-2">
              <Collapse in={visibleA}>
                <p >{title[3].desc}</p>
              </Collapse>
              <Collapse in={visibleB}>
                <p>{title[4].desc1}</p>
                {/* <p>{title[4].desc2}</p>
                <p>{title[4].desc3}</p> */}

              </Collapse>
             
            </div>
          </div>
          <Rooms />
        </div>
      </Collapse>
      
    </div>
  );
  }

export default Recurring;
