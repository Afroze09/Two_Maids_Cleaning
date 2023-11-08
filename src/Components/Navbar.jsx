import React from "react";
import { Link } from "react-router-dom";
import { Navbar , Dropdown } from "flowbite-react";

export default function CustomNavbar() {
  return (
    <section className="px-4">
      <div
        style={{
          backgroundImage: "linear-gradient(to right, #fff, #fff)",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundAttachment: "fixed",
        }}
      >
        {" "}
        <nav className=" h-[40px] flex items-center px-4" id="navbar">
          <div className="font-semibold w-full h-[2ixed text-gray-600 flex items-center justify-between">
            <div className="text-md flex items-center gap-x-2 mt-3">
              <span>Your store </span>
              <Link className="text-[#55a7e0] font-bold no-underline">
                CHESTERFIELD
              </Link>
            </div>
            <div className="h-full text-md">
              <span className="mr-2">
                Call for a Free Estimate!{" "}
                <Link className="text-[#55a7e0] font-bold no-underline mr-2">
                  (636) 600-4480
                </Link>
              </span>
              <button className="btn pink-btn">BOOK YOUR CLEANING</button>
            </div>
          </div>
        </nav>
        <hr />
        <nav className="h-[50px] flex items-center justify-between mb-4 ">
        <Navbar fluid rounded>
      <Navbar.Brand as={Link} to="https://flowbite-react.com">
        <img src="/favicon.svg" className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo" />
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Navbar.Link as={Link} to={"/services"} >
          Services
        </Navbar.Link>
        <Navbar.Link as={Link} to="#">
          Locations
        </Navbar.Link>
        <Navbar.Link as={Link} to="#">Why Hire Us</Navbar.Link>
        <Navbar.Link as={Link} to="#">Franchise Opportunities</Navbar.Link>
        <Dropdown label="More" inline id="dropdownHover" className='drop'>
      <Dropdown.Item as={Link} to={'/aboutus'}>About</Dropdown.Item>
      <Dropdown.Item as={Link} to>Careers</Dropdown.Item>
      <Dropdown.Item as={Link} to>Blog</Dropdown.Item>
      <Dropdown.Item as={Link} to>Reviews</Dropdown.Item>
      <Dropdown.Item as={Link}>Contact Us</Dropdown.Item>
    </Dropdown>
      </Navbar.Collapse>
    </Navbar>
          {/* <Link to="/">
            <img
              src="https://twomaidscleaning.com/_next/image/?url=https%3A%2F%2Fres.cloudinary.com%2Ftwomaidsengi%2Fimage%2Fupload%2Fc_scale%2Cf_auto%2Cq_auto%2Cw_1014%2Fv1670257150%2Fhubsite-reskin%2Ftwo-maids-logo-pink.png&w=2048&q=75"
              alt=""
              className="h-12 -mt-4"
            />
          </Link>
          <ul className="flex items-center -mb-3 gap-x-5 h-full">
            <Link to={'/services'}>
              <Button variant="white">Services</Button>
            </Link>

            <Button variant="white">Locations</Button>
            <Button variant="white">Why Hire Us</Button>
            <Button variant="white">Franchise Opportunities</Button>
            <Dropdown>
              <Dropdown.Toggle
                id="dropdown-button-dark-example1"
                variant="white"
                className="border-none text-[#75757a]"
              >
                More
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Link
                  aria-selected="true"
                  data-rr-ui-dropdown-item
                  className="dropdown-item dropdown-active"
                  href="#/action-1"
                  active
                  to={"/aboutus"}
                >
                  About
                </Link>
                <Link
                  aria-selected="true"
                  data-rr-ui-dropdown-item
                  className="dropdown-item"
                  href="#/action-1"
                >
                  Careers
                </Link>
                <Link
                  aria-selected="true"
                  data-rr-ui-dropdown-item
                  className="dropdown-item"
                  href="#/action-1"
                >
                  Blog
                </Link>
                <Link
                  aria-selected="true"
                  data-rr-ui-dropdown-item
                  className="dropdown-item"
                  href="#/action-1"
                >
                  Reviews
                </Link>
                <Link
                  aria-selected="true"
                  data-rr-ui-dropdown-item
                  className="dropdown-item"
                  href="#/action-1"
                >
                  Contact Us
                </Link>
              </Dropdown.Menu>
            </Dropdown>
          </ul> */}
        </nav>
      </div>
    </section>
  );
}
