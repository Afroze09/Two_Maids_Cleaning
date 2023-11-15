import React from "react";
import Modal from "../Components/Modal";
import { aboutUs, chesterfield } from "../utils";
const AboutUs = () => {
  return (
    <section className="bg-transparent w-screen relative pt-3 overflow-x-hidden mt-5">
      <div className="bg-dots"></div>
      <div className=" flex xl:px-[225px] lg:px-[225px] md:px-[70px] sm:px-2 px-2 flex-wrap">
        <div className=" lg:px-[50px] ">
          <h1 className="text-[#015d9c] font-[TiemposFine] font-bold  tracking-tighter text-7xl">
            About Us
          </h1>
          <div className="my-10">
            <h5 className="text-[#015d9c] mb-11 font-bold text-[22px]">
              Killer Clean prioritizes customer service and quality
            </h5>
            {aboutUs.map((v) => (
              <p className=" mb-3 leading-6 text-left text-[17.5px] text-[#4d4d4d]">
                
                {v}
              </p>
            ))}
          </div>
          <div className="my-10">
            <h5 className="text-[#015d9c] font-bold mb-10 text-xl">
              Our Chesterfield Team
            </h5>
            {chesterfield.map((v) => (
              <p className=" mb-3 leading-6 text-[17px] text-left text-[#4d4d4d]">
                {v}
              </p>
            ))}
          </div>
        </div>
        <div className="mt-[50px] lg:h-[90vh] sm:h-[80vh] h-[60vh] photos  relative">
          <div className="photo-circle"></div>
          <div className="absolute bg-[#a0dcffd5] rounded-[50%]
          h-[225px] w-[225px] 
          sm:h-[250px] sm:w-[250px]
          md:h-[300px] md:w-[300px] 
          lg:h-[400px] lg:w-[400px] 
          bottom-[75px] -right-[100px]
          sm:bottom-[25px] sm:-right-[170px]
          md:bottom-[30px] md:-right-[225px] 
          lg:bottom-[160px] lg:-right-[330px] 
          xl:-right-[320px] xl:bottom-[40px] flex flex-col text-left justify-center items-start">
           <div className="lg:p-11 md:p-10 sm:p-10 p-8 text-[#015d9c] ">
           <p className="text-left lg:text-lg md:text-xs sm:text-xs text-[9.5px]">Hi, we are Jordan and Carly Black, and are the proud owners and leaders of the maid service team at Two Maids & A Mop serving Chesterfield, MO! I consider myself a late bloomer in the business world, as I was first a music teacher for 10 years.</p>
            <p className="text-left font-bold lg:text-lg md:text-[14px] sm:text-xs text-[10px]">Chesterfield, MO</p>
           </div>
          </div>
        </div>
      </div>
      <Modal />
    </section>
  );
};

export default AboutUs;
