import React, { useState, useEffect } from "react";
import EventButton from "./EventButton";
import { Link } from "react-router-dom";
export default function Modal() {
  const [modalVisible, setModalVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [isTablet , setTablet] = useState(window.innerWidth<=1024);
  useEffect(() => {
    // Update isMobile when the window is resized
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
      setTablet(window.innerWidth <= 1024);
    };

    window.addEventListener("resize", handleResize);

    // Cleanup the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const handleScroll = () => {
    const navbarHeight = document.querySelector("#navbar").clientHeight;
    const footerTop = document
      .querySelector(".footer")
      .getBoundingClientRect().top;
    const scrollY = window.scrollY;

    if (scrollY >= navbarHeight && footerTop > window.innerHeight) {
      setModalVisible(true);
    } else {
      setModalVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div
      className={`sm:h-[100px] lg:h-[100px] md:h-[180px] h-[150px] w-screen bg-[#58c2ff] flex items-center fixed bottom-0 left-0 z-10 py-2 px-10 ${
        modalVisible ? "translate-y-0" : "translate-y-full"
      } transition-transform duration-300 ease-in-out transform`}
    >
      {(isMobile || isTablet) ? (
        <div className="flex flex-col items-center justify-evenly h-full w-full">
          <div className="flex items-center justify-center">
          <Link to="/book">
            <button className="btn modal-btn mr-3">Book Your Cleaning </button>
          </Link>
          <Link to="/book">
            <button className="btn modal-btn">Calculate Your Price</button>
          </Link>
          </div>
          <div className="text-sm  text-[#015d9c] flex flex-col items-center">
            <h1 className="font-semibold text-xs md:text-[15px]">Call for a Free Estimate!</h1>
            <Link className="text-[#015d9c] font-bold no-underline text-2xl md:text-3xl mr-2">
              (636) 600-4611
            </Link>
          </div>
        </div>
      ) : (
        <div className="flex flex-col sm:flex-row justify-between items-center w-full px-4 sm:px-0">
          <EventButton className={`gap-x-4`} />
          <div className="h-full text-md text-[#015d9c]">
            <span className="font-bold mr-3">Call for a Free Estimate!</span>
            <Link className="text-[#015d9c] font-bold no-underline mr-2">
              (636) 600-4611
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
