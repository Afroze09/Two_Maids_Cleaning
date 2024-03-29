import React from "react";
import Carousel from "react-bootstrap/Carousel";
import { reviews } from "../reviews";
import star from '../Images/star.png';
import { Link } from "react-router-dom";
import readers from '../Images/Readers.png';
import cnbc from "../Images/cnbc.png";
import cnn from '../Images/cnn.png';
import better from '../Images/better.png';
import yahoo from '../Images/yahoo.png';

export default function Reviews() {
  const reviewsChunks = [];
  for (let i = 0; i < reviews.length; i += 3) {
    reviewsChunks.push(reviews.slice(i, i + 3));
  }

  return (
    <div className="w-screen bg-[#a0dcff] sm:px-0  px-4 overflow-x-hidden">
      <h1 className="pt-5 text-center text-[#015d9c] mb-10 text-4xl sm:text-5xl">
        A Few Kind Words
      </h1>
      <Carousel indicators={false} className="mb-10 sm:px-5 px-0">
        {reviewsChunks.map((reviewGroup, index) => (
          <Carousel.Item key={index} className="h-full w-full">
            <div className="flex justify-evenly h-full items-center  sm:px-10 px-1 sm:mx-5 mx-[7px] ">
              {reviewGroup.map((v, innerIndex) => (
                <div key={v.id} className={`text-left p-4  md:max-w-[350px] md:min-h-[370px] rounded bg-white max-w-[370px] lg:max-w-[370px] min-h-[370px] lg:min-h-[370px]  ${innerIndex > 0 ? 'hidden sm:block md:hidden lg:block' : ''}`}>
                  <h1 className="text-[17px] italic font-extrabold text-[#015d9c] ">{v.name}</h1>
                  <span className="text-[17px] italic text-[#015d9c]">{v.location}</span>
                  <div className="flex gap-2 my-4">
                    <img src={star} alt="" className="h-4" />
                    <img src={star} alt="" className="h-4" />
                    <img src={star} alt="" className="h-4" />
                    <img src={star} alt="" className="h-4" />
                    <img src={star} alt="" className="h-4" />
                  </div>
                  <p className="text-[#4d4d4d] text-[15px] font-medium md:line-clamp-6">{v.desc}</p>
                </div>
              ))}
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
      <div className='flex justify-center items-center text-center mb-20'>
        <Link className='no-underline'><button className='pink-btn font-extrabold p-2' >READ MORE REVIEWS</button></Link>
      </div>
      <div>
        <h3 className="text-sm text-center text-[#4d4d4d] ">Featured in:</h3>
        <div className="flex flex-wrap justify-evenly items-center w-full sm:px-32 lg:px-32 md:px-0 md:w-full px-2 sm:py-6 lg:py-6 md:py-2 py-4 ">
          <img src={readers} alt="" className="sm:h-14 lg:h-14 md:h-10 h-10" />
          <img src={better} alt="" className="sm:h-14 lg:h-14 md:h-10 h-10" />
          <img src={cnbc} alt="" className="sm:h-6 lg:h-6 md:h-4 h-5" />
          <img src={yahoo} alt="" className="sm:h-14 lg:h-14 md:h-10 h-10" />
          <img src={cnn} alt="" className="sm:h-14 lg:h-14 md:h-10 h-10" />
        </div>
      </div>
    </div>
  );
}
