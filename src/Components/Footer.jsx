import { Link } from "react-router-dom";
import EventButton from "./EventButton";
import { useState,useEffect } from "react";
import { BsFacebook, BsGoogle } from 'react-icons/bs';
export default function CustomFooter() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [isTablet , setTablet] = useState(window.innerWidth<1024);
  useEffect(() => {
    // Update isMobile when the window is resized
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      setTablet(window.innerWidth < 1024);
    };

    window.addEventListener("resize", handleResize);

    // Cleanup the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <footer className="w-screen overflow-x-hidden" >
      <div
        className="bg-[#a0dcff]  h-[10vh]  w-full flex items-center justify-center  "
        style={{
          backgroundImage:
            'url("https://res.cloudinary.com/twomaidsengi/image/upload/c_scale,q_auto,w_1920/v1670256573/hubsite-reskin/opaque-dots.webp ")',
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
       <h1 className="text-[40px]  md:text-start text-center  font-normal lg:text-center text-[#015d9c] ">
        Let Life Shine
      </h1>
      </div>
      <div className="bg-[#015d9c] lg:overflow-hidden relative footer text-white  w-full lg:py-2 py-1 md:py-20  lg:px-[100px] overflow-x-hidden  ">
        <div className="footer-circle hidden lg:block"></div>
        <div className="footer-circle-two hidden lg:block"></div>
        {(isMobile || isTablet) ? (
        <div className="flex flex-col items-center w-full pt-3 pb-2 overflow-x-hidden">
          <Link className="text-2xl no-underline text-white mb-3 font-bold">KILLER CLEAN.ORG</Link>
          <Link to="/book">
            <button className="footer-btn mb-3">Book Your Cleaning </button>
          </Link>
          <Link to="/book">
            <button className="footer-btn mb-3">Calculate Your Price</button>
          </Link>
          <div className=" text-white flex flex-col items-center">
            <span className="font-semibold text-[15px] mb-2">Call for a Free Estimate!</span>
            <Link className="text-white text-[15px] font-bold no-underline">
              (636) 600-4611
            </Link>
          </div>
        </div>
      ) : (
        <div className="flex justify-between items-center h-[150px] py-[60px]">
          <EventButton className={`gap-x-4`} />
          <div className="h-full text-md">
            <span className="font-bold mr-3">Call for a Free Estimate!</span>
            <Link className="text-white font-bold no-underline mr-2">
              (636) 600-4611
            </Link>
          </div>
        </div>
      )}
        
        <hr className="font-bold opacity-100  h-1 text-[#a0dcff]  text-lg" />
        <div className="flex  w-full py-2  lg:mb-0 mb-2 overflow-x-hidden">
          <div className="mr-5 hidden lg:block">
          <Link className="text-2xl no-underline mb-4 text-white font-bold">KILLER CLEAN.ORG</Link>
          <h4 className="text-sm font-extrabold  mb-3">
              18118 Chesterfield Airport Road Unit N Chesterfield, MO 63005
            </h4>
            <p className="text-[11px] font-bold">
              &copy; 2023 Killer Clean®. All rights reserved.
            </p>
          </div>
          <div className="grid lg:grid-cols-3 grid-cols-2 lg:gap-y-3 gap-y-3 w-full gap-x-6 text-center lg:text-lg text-[15px] lg:gap-x-24 font-semibold overflow-x-hidden">
            <Link className="text-white no-underline">Locations</Link>
            <Link className="text-white no-underline">Services</Link>
            <Link className="text-white no-underline">
              Join Our Team
            </Link>
            <Link className="text-white no-underline">About</Link>
            <Link className="text-white no-underline">Reviews</Link>
            <Link className="text-white no-underline">Privacy Policy</Link>
            <Link className="text-white no-underline">
              Privacy Policy for CA Residents
            </Link>
            <Link className="text-white no-underline">Contact Us</Link>
            <Link className="text-white no-underline ">
              <ul className="p-0">
                <li className="flex items-center justify-center">
                  <BsFacebook className="mr-5" />
                  <BsGoogle />
                </li>
              </ul>
            </Link>
          </div>
        </div>
        <div className="lg:hidden flex items-center flex-col ">
        <h4 className="text-sm font-semibold text-center mb-3">
              18118 Chesterfield Airport Road Unit N Chesterfield, MO 63005
            </h4>
            <p className="text-[12px] text-center font-bold">
              &copy; 2023 Killer Clean®. All rights reserved.
            </p>
        </div>
      </div>
    </footer>
  );
}
                