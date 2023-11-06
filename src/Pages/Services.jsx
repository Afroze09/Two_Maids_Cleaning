import React, { useState } from "react";
import Navbar from "../Components/Navbar";
import { Footer } from "flowbite-react";
import { data, title } from "../data";
import OneTime from "../Components/OneTime";
import { Collapse } from "react-bootstrap";
import Rooms from "../Components/Rooms";
import { serviceinfo} from "../data"
const Services = () => {
  const [open, setOpen] = useState(false);

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
            <div>
              <h1 className="text-6xl font-bold text-pink-600">Our Services</h1>
              {serviceinfo.map((v) => (
              <p className=" services-package-description text-lg break-words mt-10 text-gray-500">
                {v}
              </p>
            ))}
              
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
