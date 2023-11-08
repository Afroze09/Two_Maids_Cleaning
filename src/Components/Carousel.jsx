import React,{useState,useEffect} from "react";
import { Link } from "react-router-dom";
import { Carousel } from "react-bootstrap";
import { corouselImg } from "../utils";
import EventButton from "./EventButton";
export default function CustomCarousel() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    // Update isMobile when the window is resized
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup the event listener when the component unmounts
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return (
    <div className="relative w-full">
      <Carousel controls={false} indicators={false} className="h-[90vh]">
        {corouselImg.map((v) => {
          return (
            <Carousel.Item interval={2000}>
              <img
                className="d-block sm:h-[90vh] h-auto w-100"
                src={v}
                alt="First Slide"
              />
            </Carousel.Item>
          );
        })}
      </Carousel>
      <div>
      <h1 className="sm:text-9xl text-7xl absolute top-72 sm:top-20 md:top-20 font-normal sm:text-center text-center left-0 right-0 sm:left-0 sm:right-0 md:left-0 md:right-0 text-[#015d9c]  sm:text-white">
        Let Life Shine
      </h1>
      <div>
      {isMobile ? (
        <div className='flex flex-col items-center w-full absolute top-96 '>
          <Link to="/book">
            <button className='btn mobile-btn mb-5'>Book Your Cleaning</button>
          </Link>
          <Link to="/book">
            <button className='btn mobile-btn'>Calculate Your Price</button>
          </Link>
        </div>
      ) : (
        <EventButton className="absolute bottom-28 gap-x-8 left-0 right-0 mx-auto" />
      )}
    </div>
      
      </div>
    </div>
  );
}
