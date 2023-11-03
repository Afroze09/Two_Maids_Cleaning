import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const options = ["About", "Careers", "Blog",'Reviews','Contact Us'];

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const selectOption = (option) => {
    // You can handle the selected option here
    console.log("Selected option:", option);
    setIsOpen(false);
  };
  return (
    <section className="px-4">
      <nav className=" h-[20px]">
        <div className="font-semibold w-full h-[20px] my-3 flex items-center justify-between">
          <div className="text-[12px] h-full">
            <span>Your store </span>
            <Link className="text-[#cf2680] font-extrabold no-underline">
              CHESTERFIELD
            </Link>
          </div>
          <div className="h-[20px] text-[12px]">
            <span className="mr-2">
              Call for a Free Estimate!{" "}
              <Link className="text-[#cf2680] font-bold no-underline mr-2">
                (636) 600-4480
              </Link>
            </span>
            <Link className="no-underline">
              <button className=" pink-btn font-extrabold p-1">
                BOOK YOUR CLEANING
              </button>
            </Link>
          </div>
        </div>
      </nav>
      <hr />
      <nav className="h-[50px] flex items-center justify-between mb-4 ">
        
          <img
            src="https://twomaidscleaning.com/_next/image/?url=https%3A%2F%2Fres.cloudinary.com%2Ftwomaidsengi%2Fimage%2Fupload%2Fc_scale%2Cf_auto%2Cq_auto%2Cw_1014%2Fv1670257150%2Fhubsite-reskin%2Ftwo-maids-logo-pink.png&w=2048&q=75"
            alt=""
            className="h-12 -mt-4"
          />
          <ul className="flex items-center text-sm font-bold -mb-3 h-full">
            <Link className="no-underline text-[#75757a]"><li className="mr-5">Services</li></Link>
            <Link className="no-underline text-[#75757a]"><li className="mr-5">Locations</li></Link>
            <Link className="no-underline text-[#75757a]"><li className="mr-5">Why Hire Us</li></Link>
            <Link className="no-underline text-[#75757a]"><li className="mr-5">Franchise Opportunities</li></Link>
            <div className="relative inline-block text-[#75757a] text-left">
              <button
              onMouseEnter={() => toggleDropdown(true)}
              onMouseLeave={()=>toggleDropdown(false)}
                className="inline-flex justify-center items-center w-full text-sm font-medium text-[#75757a] hover:bg-gray-50 focus:outline-none"
                id="options-menu"
                aria-haspopup="listbox"
              >
                More
                <i class="fi fi-sr-caret-down mt-[1px] ml-1"></i>
              </button>
              {isOpen && (
                <div className="origin-top-right absolute right-0 mt-2 w-44 ">
                  <ul
                    role="listbox"
                    aria-labelledby="options-menu"
                    // tabIndex={-1}
                    className="py-1 "
                  >
                    {options.map((option, index) => (
                      <li
                        key={index}
                        onClick={() => selectOption(option)}
                        role="option"
                        className=" z-20 bg-white cursor-pointer select-none relative px-4 py-2 text-[#75757a] hover:bg-slate-200"
                      >
                        {option}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </ul>
      </nav>
    </section>
  );
}
