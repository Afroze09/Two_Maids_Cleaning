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
          className="main-info h-[100vh] w-full p-3"
          style={{
            backgroundImage:
              'url("https://twomaidscleaning.com/_next/image/?url=https%3A%2F%2Fres.cloudinary.com%2Ftwomaidsengi%2Fimage%2Fupload%2Fc_scale%2Cq_44%2Cw_2515%2Fv1670256609%2Fhubsite-reskin%2FTwoMaids_3.jpg&w=3840&q=75")',
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        >
          <div className="ml-20 mt-40 w-[520px]">
            <h1 className="text-6xl font-bold text-[#015d9c]">Our Services</h1>
            {serviceinfo.map((info) => {
              return (
                <p className=" text-lg break-words mt-10 text-gray-500">
                  {info}
                </p>
              );
            })}
            <div className="flex justify-evenly mt-16 -ml-5">
              <button className="h-10 w-48 text-white font-bold justify-evenly bg-[#015d9c]">
                ONE-TIME-CLEAN
              </button>
              <button className="h-10 w-48 text-white font-bold justify-evenly bg-[#015d9c]">
                RECURRING CLEAN
              </button>
              <button className="h-10 w-48 text-white font-bold justify-evenly bg-pink-600">
                COMMON QUESTION
              </button>
            </div>
          </div>
          {/* <img className='h-[100%] w-full' src= alt="" /> */}
        </div>
        {/* <div className="flex justify-evenly mt-16 -ml-5">
          <button className="h-10 w-48 text-white font-bold justify-evenly bg-pink-600">
            ONE-TIME-CLEAN
          </button>
          <button className="h-10 w-48 text-white font-bold justify-evenly bg-pink-600">
            RECURRING CLEAN
          </button>
        </div> */}
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
