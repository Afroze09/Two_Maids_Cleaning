import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Dropdown } from "flowbite-react";
import logo from '../Images/logo.png'
function Nav() {
    
  return (
    <section className="px-0 md:px-2 sm:px-2 lg:px-4 lg:flex-col flex flex-col-reverse md:flex-col-reverse w-screen sm:w-screen  md:w-screen lg:w-screen overflow-x-hidden">
      <nav className=" flex w-full items-center sm:my-2 " id="navbar">
        <div className="font-semibold w-full h-full text-gray-600 flex items-center justify-end">
          {/* <div className="text-md flex items-center h-full  md:h-full lg:w-auto  md:w-full w-full p-3 md:px-4 bg-[#a0dcff] md:bg-[#a0dcff] sm:bg-[#a0dcff] lg:bg-transparent gap-x-2">
          {/* <div className="text-md flex items-center h-full  md:h-full lg:w-auto  md:w-full w-full p-3 md:px-4 bg-[#a0dcff] md:bg-[#a0dcff] sm:bg-[#a0dcff] lg:bg-transparent sm:bg-transparent gap-x-2">
            <span>Your store </span>
            <Link className="text-[#015d9c] font-bold no-underline">
              CHESTERFIELD
            </Link>
          </div> */}
          <div className="text-md hidden sm:hidden md:hidden lg:block ">
            <span className="text-sm">
              Call for a Free Estimate!
              <Link className="text-[#015d9c] text-sm font-bold no-underline mx-2">
                (636) 600-4480
              </Link>
            </span> 
            <Link to={'/book'}>
            <button className="btn pink-btn mr-4">BOOK YOUR CLEANING</button>
            </Link>
          </div>
        </div>
      </nav>
      <hr style={{marginTop:'3px',marginBottom:'-3px'}} className='hidden sm:hidden lg:block md:hidden'/>
      <nav className="w-full lg:w-full ">
      <Navbar fluid className="py-0">
        <Navbar.Brand as={Link} to={'/'}>
          <img
            src={logo}
            className="mr-3 sm:h-24 h-24"
            alt=" Logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Navbar.Link as={Link}  id='nav' className='no-underline text-sm sm:text-[#75757a] sm:text-sm md:text-sm font-semibold md:text-[#75757a] hover:text-white sm:hover:text-[#015d9c] hover:bg-[#015d9c] sm:hover:bg-transparent md:hover:bg-transparent' to={"/services"}>
            Services
          </Navbar.Link>
          <Navbar.Link id='nav' className='no-underline text-sm sm:text-[#75757a] sm:text-sm md:text-sm font-semibold md:text-[#75757a] hover:text-white sm:hover:text-[#015d9c] hover:bg-[#015d9c] sm:hover:bg-transparent md:hover:bg-transparent' as={Link} to="#"> 
            Locations
          </Navbar.Link>
          <Navbar.Link id='nav' as={Link} className='no-underline text-sm sm:text-[#75757a] sm:text-sm md:text-sm font-semibold md:text-[#75757a] hover:text-white sm:hover:text-[#015d9c] hover:bg-[#015d9c] sm:hover:bg-transparent md:hover:bg-transparent' to="#">
            Why Hire Us
          </Navbar.Link>
          <Navbar.Link as={Link} id='nav' className='no-underline text-sm sm:text-[#75757a] sm:text-sm md:text-sm font-semibold md:text-[#75757a] hover:text-white sm:hover:text-[#015d9c] hover:bg-[#015d9c] sm:hover:bg-transparent md:hover:bg-transparent' to="#">
            Join Our Team
          </Navbar.Link>
          {/* <Dropdown label="More" inline id="dropdownHover" className="drop">
            <Dropdown.Item as={Link} id='drop-item' className='no-underline text-sm sm:text-[#75757a] sm:text-sm md:text-sm font-semibold md:text-[#75757a] ' to={"/aboutus"}>
              About
            </Dropdown.Item>
            <Dropdown.Item as={Link} id='drop-item' className='no-underline text-sm sm:text-[#75757a] sm:text-sm md:text-sm font-semibold md:text-[#75757a]' to="#">
              Careers
            </Dropdown.Item>
            <Dropdown.Item as={Link} id='drop-item' className='no-underline text-sm sm:text-[#75757a] sm:text-sm md:text-sm font-semibold md:text-[#75757a]' to="#">
              Blog
            </Dropdown.Item>
            <Dropdown.Item as={Link} id='drop-item' className='no-underline text-sm sm:text-[#75757a] sm:text-sm md:text-sm font-semibold md:text-[#75757a]' to="#">
              Reviews
            </Dropdown.Item>
            <Dropdown.Item as={Link} id='drop-item' className='no-underline text-sm sm:text-[#75757a] sm:text-sm md:text-sm font-semibold md:text-[#75757a] '>Contact Us</Dropdown.Item>
          </Dropdown>
          <Navbar.Link as={Link} className='no-underline text-sm sm:text-[#75757a] sm:text-sm md:text-sm font-semibold md:text-[#75757a] hover:text-white sm:hover:text-[#015d9c] hover:bg-[#015d9c] sm:hover:bg-transparent md:hover:bg-transparent' to="#">
            Join our Team
          </Navbar.Link> */}
           <Navbar.Link as={Link} id='nav' className='no-underline text-sm sm:text-[#75757a] sm:text-sm md:text-sm font-semibold md:text-[#75757a] hover:text-white sm:hover:text-[#015d9c] hover:bg-[#015d9c] sm:hover:bg-transparent md:hover:bg-transparent' to={"/aboutus"}>
            About
          </Navbar.Link>
          <Navbar.Link as={Link} id='nav' className='no-underline text-sm sm:text-[#75757a] sm:text-sm md:text-sm font-semibold md:text-[#75757a] hover:text-white sm:hover:text-[#015d9c] hover:bg-[#015d9c] sm:hover:bg-transparent md:hover:bg-transparent' to="#">
            Reviews
          </Navbar.Link>
          <Navbar.Link as={Link} id='nav' className='no-underline text-sm sm:text-[#75757a] sm:text-sm md:text-sm font-semibold md:text-[#75757a] hover:text-white sm:hover:text-[#015d9c] hover:bg-[#015d9c] sm:hover:bg-transparent md:hover:bg-transparent' to="#">
            Contact Us
          </Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
      </nav>
    </section>
  );
}

export default Nav;
