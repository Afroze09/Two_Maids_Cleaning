import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Dropdown } from "flowbite-react";
import logo from '../Images/logo.png'
function Nav() {
    
  return (
    <section className="px-0 sm:px-4 md:px-4  flex flex-col-reverse md:flex-col sm:flex-col">
      <nav className=" h-[40px] flex items-center mt-3 " id="navbar">
        <div className="font-semibold w-full h-full text-gray-600 flex items-center justify-between">
          <div className="text-md flex items-center h-full sm:h-auto md:h-auto sm:w-auto md:w-auto w-full p-3 sm:px-4 md:px-4 bg-[#a0dcff] sm:bg-transparent md:bg-transparent gap-x-2">
            <span>Your store </span>
            <Link className="text-[#015d9c] font-bold no-underline">
              CHESTERFIELD
            </Link>
          </div>
          <div className="h-full text-md hidden sm:block md:block">
            <span className="mr-2">
              Call for a Free Estimate!{" "}
              <Link className="text-[#015d9c] font-bold no-underline mr-2">
                (636) 600-4480
              </Link>
            </span> 
            <button className="btn pink-btn mr-4">BOOK YOUR CLEANING</button>
          </div>
        </div>
      </nav>
      <hr style={{marginTop:'20px',marginBottom:'0'}} className='hidden sm:block md:block'/>
      <nav className=" px-2  ">
      <Navbar fluid rounded>
        <Navbar.Brand as={Link} to={'/'}>
          <img
            src={logo}
            className="mr-3 sm:h-16 h-20"
            alt=" Logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Navbar.Link as={Link} className='no-underline text-sm sm:text-[#75757a] sm:text-sm md:text-sm font-semibold md:text-[#75757a] hover:text-white sm:hover:text-[#015d9c] hover:bg-[#015d9c] sm:hover:bg-transparent md:hover:bg-transparent' to={"/services"}>
            Services
          </Navbar.Link>
          <Navbar.Link className='no-underline text-sm sm:text-[#75757a] sm:text-sm md:text-sm font-semibold md:text-[#75757a] hover:text-white sm:hover:text-[#015d9c] hover:bg-[#015d9c] sm:hover:bg-transparent md:hover:bg-transparent' as={Link} to="#">
            Locations
          </Navbar.Link>
          <Navbar.Link as={Link} className='no-underline text-sm sm:text-[#75757a] sm:text-sm md:text-sm font-semibold md:text-[#75757a] hover:text-white sm:hover:text-[#015d9c] hover:bg-[#015d9c] sm:hover:bg-transparent md:hover:bg-transparent' to="#">
            Why Hire Us
          </Navbar.Link>
          <Navbar.Link as={Link} className='no-underline text-sm sm:text-[#75757a] sm:text-sm md:text-sm font-semibold md:text-[#75757a] hover:text-white sm:hover:text-[#015d9c] hover:bg-[#015d9c] sm:hover:bg-transparent md:hover:bg-transparent' to="#">
            Franchise Opportunities
          </Navbar.Link>
          <Dropdown label="More" inline id="dropdownHover" className="drop">
            <Dropdown.Item as={Link} className='no-underline text-sm sm:text-[#75757a] sm:text-sm md:text-sm font-semibold md:text-[#75757a] ' to={"/aboutus"}>
              About
            </Dropdown.Item>
            <Dropdown.Item as={Link} className='no-underline text-sm sm:text-[#75757a] sm:text-sm md:text-sm font-semibold md:text-[#75757a]' to="#">
              Careers
            </Dropdown.Item>
            <Dropdown.Item as={Link} className='no-underline text-sm sm:text-[#75757a] sm:text-sm md:text-sm font-semibold md:text-[#75757a]' to="#">
              Blog
            </Dropdown.Item>
            <Dropdown.Item as={Link} className='no-underline text-sm sm:text-[#75757a] sm:text-sm md:text-sm font-semibold md:text-[#75757a]' to="#">
              Reviews
            </Dropdown.Item>
            <Dropdown.Item as={Link} className='no-underline text-sm sm:text-[#75757a] sm:text-sm md:text-sm font-semibold md:text-[#75757a] '>Contact Us</Dropdown.Item>
          </Dropdown>
        </Navbar.Collapse>
      </Navbar>
      </nav>
    </section>
  );
}

export default Nav;
