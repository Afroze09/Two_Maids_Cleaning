import React, { useState } from "react";
import { rooms } from "../data";
import { Collapse } from "react-bootstrap";

const Rooms = () => {
  const [visibleButtons, setVisibleButtons] = useState({});
  const handleButtonClick = (buttonId) => {
    setVisibleButtons((prevVisibleButtons) => ({
      ...prevVisibleButtons,
      [buttonId]: !prevVisibleButtons[buttonId],
    }));
  };
const roomDetails = rooms.map(v=>v.details)
  return (
    <div className="px-[2px] w-full ">
      <div className="border-t border-[#9f9f9d]">
        {rooms.map((r) => {
          return (
            <>
              <div
                key={r.id}
                className="border-b h-[45px] xl:max-xxl:h-[65px] flex flex-col justify-center border-[#9f9f9d]"
              >
                <div className="flex justify-between items-center">
                  <h1 className="text-[#015d9c] text-[14px] sm:max-md:text-[16px] md:max-lg:text-[18px] lg:max-xl:text-[20px] xl:max-xxl:text-[22px] text-left font-semibold">
                    {r.title}
                  </h1>
                  <button
                    onClick={() => handleButtonClick(r.id)}
                    aria-controls={`example-collapse-text-${r.id}`}
                    aria-expanded={visibleButtons[r.id]}
                    className="using"
                  >
                <i className="fi fi-rs-angle-circle-down  text-[14px] sm:max-md:text-[16px] md:max-lg:text-[18px] lg:max-xl:text-[20px] xl:max-xxl:text-[22px] text-[#015d9c] font-semibold cursor-pointer" />
                  </button>
                </div>
              </div>
              <Collapse in={visibleButtons[r.id]}>
                <div className="kitchen-data  px-2 py-2">
                  
                 
                        <ul className="list-disc grid gap-x-8 ml-4 text-[10px] sm:max-md:text-[12px] md:max-lg:text-[14px] lg:max-xl:text-[16px] xl:max-xxl:text-[18px] text-left grid-cols-3">
                          {
                            roomDetails[0].map((item,index) =>{
                              return(
                                <li key={index}>{item}</li>
                              )
                            })
                          }
                        </ul>
                      
                </div>
              </Collapse>
              
            </>
          );
        })}
      </div>
    </div>
  );
};

export default Rooms;
