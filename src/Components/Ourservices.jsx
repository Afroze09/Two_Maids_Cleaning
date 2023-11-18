import React, { useState, useEffect } from "react";
import { services } from "../utils";
import { Link } from "react-router-dom";
export default function Ourservices() {
  const rotatingWords = [
    "better",
    "brighter",
    "sunnier",
    "more delightful",
    "more fulfilling",
  ];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex(
        (prevIndex) => (prevIndex + 1) % rotatingWords.length
      );
    }, 2000); // Change the word every 2 seconds (you can adjust this interval)

    return () => {
      clearInterval(interval);
    };
  });

  return (
    <section className="py-12 lg:px-[200px] md:px-[60px] h-full w-screen ourservices mt-3 overflow-x-hidden">
      <div className="w-full mb-5">
        <h1 className="sm:text-[58px] lg:text-[58px] text-5xl text-left font-bold font-[TiemposFine]  mb-5 text-[#015d9c] ">
          <span className="sm:inline md:hidden lg:inline hidden mb-5">
            Your day just got a <br /> whole lot 
          </span>
          <span className="sm:hidden md:block lg:hidden block mb-2 md:text-6xl text-5xl">Your day just</span>
          <span className="sm:hidden md:block lg:hidden block mb-2 md:text-6xl text-5xl">
            got a whole lot
          </span>
          <span className="sm:ml-4 lg:ml-4 lg:text-[58px] md:text-[58px] md:ml-0">{rotatingWords[currentWordIndex]}</span>.
        </h1>
        <p className="sm:text-[27px] lg:text-[27px] md:text-lg text-lg text-left lg:tracking-[0.02em]  sm:tracking-[0.07em] text-[#7b6c73] leading-9">
          Let Two Maids do all of the dirty work for you. Focus on everything
          else you need to get done and schedule a cleaning with us today.
        </p>
      </div>
      <div className="w-full">
        <h4 className="text-[#015d9c] font-bold mb-3 md:text-[30px] text-[25px] lg:text-3xl   sm:text-3xl">
          Your Resident Home Cleaning Expert
        </h4>
        <p className="sm:text-[16px] lg:text-[16px] md:text-[17px] text-[15px] text-left text-[#5f6060] font-medium leading-7 mb-5">
          At Two Maids, our purpose is to make a difference in people’s daily
          lives. We help busy families maintain beautiful, clean and healthy
          homes and take care of the chores that no one has the time or energy
          to do. We proudly serve our customers, putting their needs ahead of
          our own, so they can focus on what matters most to them. Everything we
          do makes lives a little easier and homes a little brighter.
        </p>
        <div className="bg-[#a0dcff] sm:bg-transparent flex flex-col items-center justify-center py-4 sm:py-0">
          <div className="sm:grid lg:grid sm:grid-cols-3 lg:grid-cols-3 md:grid md:grid-cols-3 flex flex-col items-center sm:gap-7 lg:gap-32 lg:h-[260px] sm:h-[260px] md:gap-x-6 md:h-[260px] w-full mb-4">
            {services.map((v) => {
              return (
                <div
                  key={v.id}
                  className="flex h-64 w-[240px] md:w-auto lg:w-[240px] flex-col items-center"
                >
                  <span className="text-6xl text-[#015d9c]">{v.icon}</span>
                  <h4 className="text-center text-lg text-[#015d9c] font-bold ">
                    {v.title}
                  </h4>
                  <p className="text-center text-sm text-[#5f6060] font-medium leading-6">
                    {v.desc}
                  </p>
                </div>
              );
            })}
          </div>
          <div className="flex items-center justify-center text-center mb-5">
            <Link to={'/services'} className="no-underline">
              <button className=" pink-btn font-extrabold  p-2 w-64">
                VIEW OUR SERVICES
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
