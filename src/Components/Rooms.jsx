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
    <div className="px-[100px] w-full">
      <div className="border-t border-[#9f9f9d]">
        {rooms.map((r) => {
          return (
            <>
              <div
                key={r.id}
                className="border-b px-2 h-[65px] flex flex-col justify-center border-[#9f9f9d]"
              >
                <div className="flex justify-between items-center">
                  <h1 className="text-[#015d9c] text-2xl text-left font-semibold">
                    {r.title}
                  </h1>
                  <button
                    onClick={() => handleButtonClick(r.id)}
                    aria-controls={`example-collapse-text-${r.id}`}
                    aria-expanded={visibleButtons[r.id]}
                    className="using"
                  >
                    &times;
                  </button>
                </div>
              </div>
              <Collapse in={visibleButtons[r.id]}>
                <div className="kitchen-data py-5">
                  
                 
                        <ul className="list-disc grid gap-3  grid-cols-3">
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
