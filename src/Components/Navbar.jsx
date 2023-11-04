import React from "react";
import { Link } from "react-router-dom";
import Dropdown from "react-bootstrap/Dropdown";
import { Button } from "react-bootstrap";
export default function Navbar() {
  return (
    <section className="px-4">
      <nav className=" h-[40px] flex items-center px-4">
        <div className="font-semibold w-full h-[20px] text-gray-600 flex items-center justify-between">
          <div className="text-md flex items-center gap-x-2">
            <span>Your store </span>
            <Link className="text-[#cf2680] font-bold no-underline">
              CHESTERFIELD
            </Link>
          </div>
          <div className="h-full text-md">
            <span className="mr-2">
              Call for a Free Estimate!{" "}
              <Link className="text-[#cf2680] font-bold no-underline mr-2">
                (636) 600-4480
              </Link>
            </span>
            <Link className="no-underline">
              <button className="btn pink-btn">
                BOOK YOUR CLEANING
              </button>
            </Link>
          </div>
        </div>
      </nav>
      <hr />
      <nav className="h-[50px] flex items-center justify-between mb-4 ">
        <Link to="/">
          <img
            src="https://twomaidscleaning.com/_next/image/?url=https%3A%2F%2Fres.cloudinary.com%2Ftwomaidsengi%2Fimage%2Fupload%2Fc_scale%2Cf_auto%2Cq_auto%2Cw_1014%2Fv1670257150%2Fhubsite-reskin%2Ftwo-maids-logo-pink.png&w=2048&q=75"
            alt=""
            className="h-12 -mt-4"
          />
        </Link>
        <ul className="flex items-center -mb-3 gap-x-5 h-full">
            <Button variant="white" >Services</Button>
            <Button variant="white" >Locations</Button>
            <Button variant="white" >Why Hire Us</Button>
            <Button variant="white" >Franchise Opportunities</Button>
          <Dropdown >
            <Dropdown.Toggle
              id="dropdown-button-dark-example1"
              variant="white"
              className="border-none text-[#75757a]"
            >
              More
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1" active>About</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Careers</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Blog</Dropdown.Item>
              <Dropdown.Item href="#/action-4">Reviews</Dropdown.Item>
              <Dropdown.Item href="#/action-4">Contact Us</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </ul>
      </nav>
    </section>
  );
}
