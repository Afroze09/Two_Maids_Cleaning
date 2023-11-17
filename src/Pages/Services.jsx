import React from "react";
import OneTime from "../Components/OneTime";
import { serviceinfo} from "../data"
import Recurring from "../Components/Recurring";
import CommonQuestion from "../Components/CommonQuestion";
import img from "../Images/service-bg-img.png"
const Services = () => {
  return (
    <>
      <div className=" h-full w-full ">
        <div
          className="main-info md:flex h-full w-full md:p-1 p-3  md:bg-cover sm:bg-cover bg-contain lg:bg-cover bg-no-repeat  bg-top lg:bg-center md:bg-center sm:bg-center"
          style={{
            backgroundImage:
            "url(" + img + ")",
           
          }}
        >
          <div className="sm:ml-4 ml-0 sm:mt-4 mt-[250px]  md:ml-2 lg:ml-4 flex flex-col">
            <div className="lg:w-[520px]  md:w-[400px] sm:w-[250px] w-full">
            <h1 className="text-3xl lg:text-6xl xl: md:text-5xl tracking-[-0.07em] font-bold text-[#015d9c] font-[TiemposFine] ">Our Services</h1>
            {serviceinfo.map((info) => {
              return (
                <p className="text-sm md:text-[15px] lg:text-lg break-words sm:mt-4 text-gray-500 sm:text-gray-200">
                  {info}
                </p>
              );
            })}
            </div>
            <div className="flex flex-col sm:flex-row  mt-4 lg:ml-0 md:-ml-4 sm:mt-16 ">
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
    </>
  );
};
export default Services;
