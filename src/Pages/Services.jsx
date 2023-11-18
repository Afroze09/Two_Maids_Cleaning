import React from "react";
import OneTime from "../Components/OneTime";
import { serviceinfo} from "../data"
import Recurring from "../Components/Recurring";
import CommonQuestion from "../Components/CommonQuestion";
import Modal from "../Components/Modal";
import img from "../Images/service-bg-img.png"
const Services = () => {
  return (
    <>
      <div className=" w-screen  overflow-x-hidden sm:max-xxl:overflow-x-hidden">
        <div
          className="main-info w-full p-3 bg-contain bg-no-repeat bg-top
            sm:max-md:bg-top sm:max-xl:bg-cover md:max-xl:bg-center "
          style={{
            backgroundImage:
            "url(" + img + ")"
           
          }}
        >
          <div className=" flex flex-col ml-0 mt-[245px] sm:max-xl:mt-11">
            <div className="w-full sm:max-md:w-[400px] md:max-xxl:w-[500px]">
            <h1 className="font-bold text-[#015d9c] font-[TiemposFine] text-3xl  
                          sm:max-md:ml-2 sm:max-md:text-4xl md:max-lg:ml-3 md:max-xxl:text-5xl   ">Our Services</h1>
            {serviceinfo.map((info) => {
              return (
                <p className="text-[14px] text-justify text-gray-500 
                sm:max-md:text-[16px] sm:max-xxl:text-gray-200 sm:max-md:ml-2 sm:max-md:mt-6 
                md:max-lg:text-[18px] md:max-lg:my-6 md:max-lg:ml-3 ">
                  {info}
                </p>
              );
            })}
            </div>
            <div className="flex flex-col items-center sm:max-xxl:flex-row mt-4 
                            sm:max-md:mt-1 sm:max-md:ml-1 sm:max-md:gap-1  
                            md:max-lg:ml-2 md:max-lg:gap-2">
              <button className="service_btn h-10 w-72 p-2 my-2 
                                 sm:max-md:mr-1 sm:max-md:w-[138px] 
                                 md:max-lg:mr-1 md:max-lg:w-44
                                 lg:max-xl:mr-1 lg:max-xxl:w-52  ">
                ONE-TIME-CLEAN
              </button>
              <button className="service_btn h-10 w-72 p-2 
                                 sm:max-md:mr-1 sm:max-md:w-[139px] 
                                 md:max-lg:mr-1 md:max-lg:w-44 my-2 sm:my-0">
                RECURRING CLEAN
              </button>
              <button className="service_btn h-10 w-72 p-2
                                 sm:max-md:mr-1 sm:max-md:w-[141px]  
                                 md:max-lg:mr-1 md:max-lg:w-44 my-2 sm:my-0">
                COMMON QUESTION
              </button>

            </div>
          </div>
        </div>
        <div className="flex flex-col items-center w-full">
        <OneTime />
        <Recurring/>
        <CommonQuestion/>
        <Modal />
      </div>
      
      </div>
      
    
     
    </>
  );
};
export default Services;
