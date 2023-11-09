import React from "react";
import Modal from "../Components/Modal";
import { aboutUs, chesterfield } from "../utils";
const AboutUs = () => {
  return (
    <section className="bg-transparent relative pt-3  mt-5">
      <div className="bg-dots"></div>
      <div className=" flex px-[225px]  flex-wrap">
        <div className="  px-[50px] ">
          <h1 className="text-[#015d9c] font-[TiemposFine] font-bold  tracking-tighter text-7xl">
            About Us
          </h1>
          <div className="my-10">
            <h5 className="text-[#015d9c] mb-11 font-bold text-[22px]">
              Two Maids prioritizes customer service and quality
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
        <div className="mt-[50px] h-[90vh] relative">
          <div className="photo-circle "></div>
          <div className="absolute bg-[#f9ddebd1] px-10 rounded-[50%] h-[400px] w-[400px]  bottom-[110px] -right-[360px] flex flex-col text-left justify-center items-center">
            <div className="text-[#015d9c] text-[17px] p-2"><p>Hi, we are Jordan and Carly Black, and are the proud owners and leaders of the maid service team at Two Maids & A Mop serving Chesterfield, MO! I consider myself a late bloomer in the business world, as I was first a music teacher for 10 years.</p>
            <p className="font-semibold">Chesterfield, MO</p></div>
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
