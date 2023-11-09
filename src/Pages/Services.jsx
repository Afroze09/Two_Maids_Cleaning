import React from "react";
import OneTime from "../Components/OneTime";
import { serviceinfo} from "../data"
import Recurring from "../Components/Recurring";
import CommonQuestion from "../Components/CommonQuestion";
const Services = () => {
  return (
    <>
      <div className="h-full w-full">
        <div
          className="main-info h-[100vh] w-full p-3 bg-cover sm:bg-cover bg-center sm:bg-center"
          style={{
            backgroundImage:
              'url("https://twomaidscleaning.com/_next/image/?url=https%3A%2F%2Fres.cloudinary.com%2Ftwomaidsengi%2Fimage%2Fupload%2Fc_scale%2Cq_44%2Cw_2515%2Fv1670256609%2Fhubsite-reskin%2FTwoMaids_3.jpg&w=3840&q=75")'
           
          }}
        >
          <div className="ml-4 sm:ml-20 mt-4 sm:mt-40 w-[520px] ">
            <h1 className="text-3xl sm:text-6xl font-bold text-[#015d9c] ">Our Services</h1>
            {serviceinfo.map((info) => {
              return (
                <p className=" text-base sm:text-lg break-words mt-4 sm:mt-10 text-gray-500">
                  {info}
                </p>
              );
            })}
            <div className="flex flex-col sm:flex-row justify-center sm:justify-evenly mt-4 sm:mt-16 ">
              <button className="h-10 sm:w-40 text-white font-bold bg-[#015d9c] my-2 sm:my-0">
                ONE-TIME-CLEAN
              </button>
              <button className="h-10 sm:w-48 text-white font-bold bg-[#015d9c] my-2 sm:my-0">
                RECURRING CLEAN
              </button>
              <button className="h-10 sm:w-48 text-white font-bold bg-pink-600 my-2 sm:my-0">
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
    </>
  );
};
export default Services;
