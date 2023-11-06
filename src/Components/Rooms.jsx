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
                  <h1 className="text-[#cf2680] text-2xl text-left font-semibold">
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
              <Collapse in={visibleButtons[r.id]} className="w-[100vw]">
                <div className="kitchen-data h-[100vh] grid grid-cols-3 gap-x-5 w-[100vw]">
                  <ul className="list-disc">
                    <li id={`example-collapse-text-${r.id}`}>{r.details}</li>
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
