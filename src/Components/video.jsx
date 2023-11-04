import React from "react";
import { Link } from "react-router-dom";
export default function Video() {
  return (
    <section className="px-[250px] bg-[#efedee] h-full w-full py-5">
      <h1 className="text-center text-5xl font-semibold font-[TiemposFine] mb-5 text-[#cf2680] ">Powered by Caring</h1>
      <video
        controls
        preload="metadata"
        poster="https://res.cloudinary.com/twomaidsengi/image/upload/f_auto/v1614356825/next-site/pay.jpg"
        className="h-96 mx-auto mb-5"
      >
        <source
          src="https://res.cloudinary.com/twomaidsengi/video/upload/q_auto/v1601655744/next-site/pay-for-performance-h265.mp4"
          type="video/mp4"
        />
      </video>
      <div className='grid grid-cols-1 text-center mb-4 px-24 text-[17.5px] leading-7' >
        <p className=" text-[#4d4d4d]">
      <span className="font-bold">You Have a Say in What We Pay.</span> After each cleaning, you have the opportunity to rate our work on a scale of 1 to 10. Your rating alone determines the compensation level for the Two Maids assigned to your home. This performance-based approach encourages excellence and is the primary reason that Inc. Magazine recognized us as one of the fastest growing cleaning companies in America.
      </p>
        </div>
      
      <div className='grid grid-cols-1 text-center mb-4' >
        <Link className='no-underline'><button className=' pink-btn font-extrabold mr-10 p-2' >LEARN ABOUT PAY FOR PERFORMANCE</button></Link>
        </div>
    </section>
  );
}
