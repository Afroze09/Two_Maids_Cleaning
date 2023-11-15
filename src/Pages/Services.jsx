import React from "react";
import OneTime from "../Components/OneTime";
import { serviceinfo} from "../data"
import Recurring from "../Components/Recurring";
import CommonQuestion from "../Components/CommonQuestion";
import Modal from "../Components/Modal";
const Services = () => {
  return (
    <>
      <div className=" w-screen ">
        <div
          className="main-info md:flex h-full w-full md:p-1 p-3  md:bg-cover sm:bg-cover bg-contain lg:bg-cover bg-no-repeat  bg-top lg:bg-center md:bg-center sm:bg-center"
          style={{
            backgroundImage:
              'url("https://twomaidscleaning.com/_next/image/?url=https%3A%2F%2Fres.cloudinary.com%2Ftwomaidsengi%2Fimage%2Fupload%2Fc_scale%2Cq_44%2Cw_2515%2Fv1670256609%2Fhubsite-reskin%2FTwoMaids_3.jpg&w=3840&q=75")'
           
          }}
        >
          <div className="sm:ml-4 ml-0 sm:mt-4 mt-[250px]  md:ml-2 lg:ml-4 flex flex-col">
            <div className="lg:w-[520px]  md:w-[400px] sm:w-[250px] w-full">
            <h1 className="text-3xl lg:text-6xl md:text-5xl  font-bold text-[#015d9c] ">Our Services</h1>
            {serviceinfo.map((info) => {
              return (
                <p className="text-sm md:text-[15px] lg:text-lg break-words sm:mt-4 text-gray-500">
                  {info}
                </p>
              );
            })}
            </div>
            <div className="flex flex-col sm:flex-row  mt-4 md:-ml-4 sm:mt-16 ">
              <button className="h-10 p-2 rounded sm:mr-1 md:mr-1 text-white font-bold bg-[#015d9c] my-2 sm:my-0">
                ONE-TIME-CLEAN
              </button>
              <button className="h-10 p-2 rounded text-white sm:mr-1 md:mr-1 font-bold bg-[#015d9c] my-2 sm:my-0">
                RECURRING CLEAN
              </button>
              <button className="h-10 p-2 rounded text-white font-bold bg-[#015d9c] my-2 sm:my-0">
                COMMON QUESTION
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className=" w-full">
        <OneTime />
        <Recurring/>
        <CommonQuestion/>
      </div>
      <div className=" w-full"></div>
      <Modal />
    </>
  );
};
export default Services;
