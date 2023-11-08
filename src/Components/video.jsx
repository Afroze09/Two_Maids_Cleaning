import React from "react";
import { Link } from "react-router-dom";
export default function Video() {
  return (
    <section className="sm:px-[250px] px-10 sm:bg-[#a0dcff] bg-transparent  w-full py-4">
      <h1 className="text-center text-5xl font-semibold font-[TiemposFine] mb-5 text-[#015d9c] ">Powered by Caring</h1>
      <video
        controls
        preload="metadata"
        poster="https://res.cloudinary.com/twomaidsengi/image/upload/f_auto/v1614356825/next-site/pay.jpg"
        className="sm:h-full h-auto w-full mx-auto mb-4"
      >
        <source
          src="https://res.cloudinary.com/twomaidsengi/video/upload/q_auto/v1601655744/next-site/pay-for-performance-h265.mp4"
          type="video/mp4"
        />
      </video>
      <div className='flex justify-center items-center text-center mb-4 sm:px-24 px-2 text-[17.5px] leading-7' >
        <p className=" text-[#4d4d4d]">
      <span className="font-bold">You Have a Say in What We Pay.</span> After each cleaning, you have the opportunity to rate our work on a scale of 1 to 10. Your rating alone determines the compensation level for the Two Maids assigned to your home. This performance-based approach encourages excellence and is the primary reason that Inc. Magazine recognized us as one of the fastest growing cleaning companies in America.
      </p>
        </div>
      
      <div className='flex justify-center items-center text-center mb-4' >
        <Link className='no-underline'><button className=' pink-btn font-extrabold sm:p-2 p-3' >LEARN ABOUT PAY FOR PERFORMANCE</button></Link>
        </div>
    </section>
  );
}
