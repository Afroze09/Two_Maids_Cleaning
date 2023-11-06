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

  // Split the reviews array into chunks of 3
  for (let i = 0; i < reviews.length; i += 3) {
    reviewsChunks.push(reviews.slice(i, i + 3));
  }

  return (
    <div className="w-full bg-[#f9ddeb]">
      <h1 className="pt-3 text-center text-[#cf2680] mb-10 text-5xl">
        A Few Kind Words
      </h1>
      <Carousel indicators={false} className='mb-10'>
        {reviewsChunks.map((review, index) => (
          <Carousel.Item key={index} className="h-full w-full">
            <div className="flex justify-evenly h-full items-center px-10 mx-5">
              {review.map((v) => (
                <div key={v.id} className="text-left min-h-[375px] p-4 rounded bg-white max-w-[370px]">
                  <h1 className="text-[17px] italic font-extrabold text-[#cf2680] ">{v.name}</h1>
                  <span className="text-[17px] italic text-[#cf2680]">{v.location}</span>
                  <div className="flex gap-2 my-4">
                    <img src={star} alt="" className="h-4"/>
                    <img src={star} alt="" className="h-4"/>
                    <img src={star} alt="" className="h-4"/>
                    <img src={star} alt="" className="h-4"/>
                    <img src={star} alt="" className="h-4"/>
                  </div>
                  <p className="text-[#4d4d4d] text-[15px] font-medium">{v.desc}</p>
                </div>
              ))}
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
      <div className='flex justify-center items-center text-center mb-20' >
        <Link className='no-underline'><button className=' pink-btn font-extrabold p-2' >READ MORE REVIEWS</button></Link>
        </div>
        <div >
        <h3 className="text-sm text-center text-[#4d4d4d] ">Featured in:</h3>
          <div className="flex justify-evenly items-center w-full px-32 py-6">
            <img src={readers} alt="" className="h-14" />
            <img src={better} alt="" className="h-14" />
            <img src={cnbc} alt="" className="h-6" />
            <img src={yahoo} alt="" className="h-14" />
            <img src={cnn} alt="" className="h-14" />
          </div>
        </div>
    </div>
  );
}
