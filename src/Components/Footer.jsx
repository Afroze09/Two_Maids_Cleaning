import { Link } from "react-router-dom";
import EventButton from "./EventButton";
import { useState,useEffect } from "react";
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
    <footer className="w-screen" >
      <div
        className="bg-[#a0dcff] sm:h-[30vh] h-[15vh]  w-full flex items-center justify-center "
        style={{
          backgroundImage:
            'url("https://res.cloudinary.com/twomaidsengi/image/upload/c_scale,q_auto,w_1920/v1670256573/hubsite-reskin/opaque-dots.webp ")',
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
       <h1 className="lg:text-9xl text-5xl md:text-7xl md:text-start text-center  font-normal lg:text-center text-[#015d9c] ">
        Let Life Shine
      </h1>
      </div>
      <div className="bg-[#015d9c] lg:overflow-hidden relative footer text-white lg:h-[85vh]  w-full lg:py-2 py-10 md:py-20  lg:px-[100px]   ">
        <div className="footer-circle hidden lg:block"></div>
        <div className="footer-circle-two hidden lg:block"></div>
        {(isMobile || isTablet) ? (
        <div className="flex flex-col items-center w-full py-10  justify-evenly">
          <Link className="text-2xl no-underline text-white mb-4 font-bold">KILLER CLEAN.ORG</Link>
          <Link to="/book">
            <button className="btn event-btn  mb-4">Book Your Cleaning </button>
          </Link>
          <Link to="/book">
            <button className="btn event-btn  mb-4">Calculate Your Price</button>
          </Link>
          <div className="text-sm text-white flex flex-col items-center">
            <span className="font-bold text-xl mb-4">Call for a Free Estimate!</span>
            <Link className="text-white text-xl font-bold no-underline">
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
        
        <hr className="font-extrabold opacity-100  h-1 text-[#a0dcff]  text-lg" />
        <div className="flex  w-full py-5 lg:py-[90px] lg:mb-0 mb-2 ">
          <div className="mr-5 hidden lg:block">
          <Link className="text-2xl no-underline mb-4 text-white font-bold">KILLER CLEAN.ORG</Link>
          <h4 className="text-sm font-extrabold  mb-3">
              18118 Chesterfield Airport Road Unit N Chesterfield, MO 63005
            </h4>
            <p className="text-[11px] font-bold">
              &copy; 2023 Two Maids®. All rights reserved.
            </p>
          </div>
          <div className="grid lg:grid-cols-3 grid-cols-2 lg:gap-y-3 gap-y-4 w-full gap-x-8 text-center lg:text-lg text-[16px] lg:gap-x-24 font-bold">
            <Link className="text-white no-underline">Locations</Link>
            <Link className="text-white no-underline">Services</Link>
            <Link className="text-white no-underline">
              Join Our Team
            </Link>
            <Link className="text-white no-underline">Why Two Maids</Link>
            {/* <Link className="text-white no-underline">Careers</Link> */}
            <Link className="text-white no-underline">About</Link>
            <Link className="text-white no-underline">FAQS</Link>
            <Link className="text-white no-underline">Reviews</Link>
            <Link className="text-white no-underline">
              Cleaning for a Reason
            </Link>
            <Link className="text-white no-underline">
              Terms and Conditions
            </Link>
            <Link className="text-white no-underline">Privacy Policy</Link>
            <Link className="text-white no-underline">
              Privacy Policy for CA Residents
            </Link>
            <Link className="text-white no-underline">Accessibility</Link>
            <Link className="text-white no-underline">Contact Us</Link>
            <Link className="text-white no-underline ">
              <ul className="p-0">
                <li className="flex items-center justify-start">
                {/* //   <BsFacebook className="mr-5" />
                //   <BsGoogle /> */}
                </li>
              </ul>
            </Link>
          </div>
        </div>
        <div className="lg:hidden sm:block flex items-center flex-col ">
        <h4 className="text-sm font-extrabold text-center mb-3">
              18118 Chesterfield Airport Road Unit N Chesterfield, MO 63005
            </h4>
            <p className="text-[11px] text-center font-bold">
              &copy; 2023 Two Maids®. All rights reserved.
            </p>
        </div>
      </div>
    </footer>
  );
}
                