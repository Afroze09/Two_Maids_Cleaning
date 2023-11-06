import React, { useState } from "react";
import Navbar from "../Components/Navbar";
import { Footer } from "flowbite-react";
import { data, title } from "../data";
import OneTime from "../Components/OneTime";
import { Collapse } from "react-bootstrap";
import Rooms from "../Components/Rooms";
import { serviceinfo} from "../data"
const Services = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleDropdown = () => {
        setIsOpen(!isOpen);
      };
      
    return (
        <>
            <Navbar/> 
            <div className='h-full w-full'>
            <div className='main-info h-[100vh] w-full p-3' style={{backgroundImage:'url("https://twomaidscleaning.com/_next/image/?url=https%3A%2F%2Fres.cloudinary.com%2Ftwomaidsengi%2Fimage%2Fupload%2Fc_scale%2Cq_44%2Cw_2515%2Fv1670256609%2Fhubsite-reskin%2FTwoMaids_3.jpg&w=3840&q=75")',backgroundPosition:'center',backgroundSize:'cover'}}>
                <div className='ml-20 mt-40 w-[520px]'>
                <h1 className="text-6xl font-bold text-pink-600">Our Services</h1>
                <p className=" text-lg break-words mt-10 text-gray-500">
                We’re proud to provide safe and reliable professional-grade cleaning supplies and products. Each of our teams of Two Maids has been professionally trained to deliver high quality house cleaning services. We offer multiple cleaning packages that are designed to meet the demands of any home owner. Whether you need your house cleaning services on a regular basis or just one time, we have a cleaning option that's right for you. A comprehensive description of each cleaning package is below.
                </p>
                <div className='flex justify-evenly mt-16 -ml-5'>
                    <button className='h-10 w-48 text-white font-bold justify-evenly bg-pink-600'>ONE-TIME-CLEAN</button>
                    <button className='h-10 w-48 text-white font-bold justify-evenly bg-pink-600'>RECURRING CLEAN</button>
                </div>
                </div>
                {/* <img className='h-[100%] w-full' src= alt="" /> */}
                
            </div>
            <div className="flex justify-evenly mt-16 -ml-5">
              <button className="h-10 w-48 text-white font-bold justify-evenly bg-pink-600">
                ONE-TIME-CLEAN
              </button>
              <button className="h-10 w-48 text-white font-bold justify-evenly bg-pink-600">
                RECURRING CLEAN
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className=" w-full">
        <OneTime />
      </div>
      <div className=" w-full">
        
      </div>
    </>
  );
};
export default Services;
