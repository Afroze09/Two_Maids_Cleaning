import React from "react";
import {
  BsFacebook,
  BsGoogle,
} from "react-icons/bs";
import EventButton from "./EventButton";
import { Link } from "react-router-dom";

export default function CustomFooter() {
  return (
    <footer >
      <div
        className="bg-[#f9ddeb] h-[30vh] w-full flex items-center justify-center "
        style={{
          backgroundImage:
            'url("https://res.cloudinary.com/twomaidsengi/image/upload/c_scale,q_auto,w_1920/v1670256573/hubsite-reskin/opaque-dots.webp ")',
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <img
          src="https://res.cloudinary.com/twomaidsengi/image/upload/c_scale,f_auto,q_auto,w_2000/v1670273202/hubsite-reskin/let-life-shine-pink.webp"
          alt=""
          className="h-10 "
        />
      </div>
      <div className="bg-[#cf2680] overflow-hidden relative footer text-white h-[85vh] w-full py-2  px-[100px]">
        <div className="footer-circle"></div>
        <div className="footer-circle-two"></div>
        <div className="flex justify-between items-center h-[150px] py-[60px]">
          <EventButton className={`gap-x-4`} />
          <div className="h-full text-md">
            <span className="font-bold mr-3">Call for a Free Estimate!</span>
            <Link className="text-white font-bold no-underline mr-2">
              (636) 600-4611
            </Link>
          </div>
        </div>
        <hr className="font-extrabold opacity-100  h-1 text-[#f9ddeb] text-lg" />
        <div className="flex  w-full py-[90px] ">
          <div className="mr-5">
            <img
              src="https://res.cloudinary.com/twomaidsengi/image/upload/c_scale,q_auto,w_314/v1670257150/hubsite-reskin/two-maids-logo-white.webp"
              alt=""
              className="h-9 mb-3"
            />
            <h4 className="text-sm font-extrabold mb-3">
              18118 Chesterfield Airport Road Unit N Chesterfield, MO 63005
            </h4>
            <p className="text-[11px] font-bold">
              &copy; 2023 Two Maids®. All rights reserved.
            </p>
          </div>
          <div className="grid grid-cols-3 gap-y-3 w-full text-lg gap-x-24 font-bold">
            <Link className="text-white no-underline">Locations</Link>
            <Link className="text-white no-underline">Services</Link>
            <Link className="text-white no-underline">
              Franchise Opportunities
            </Link>
            <Link className="text-white no-underline">Why Two Maids</Link>
            <Link className="text-white no-underline">Careers</Link>
            <Link className="text-white no-underline">About</Link>
            <Link className="text-white no-underline">FAQS</Link>
            <Link className="text-white no-underline">Reviews</Link>
            <Link className="text-white no-underline">
              Cleaning for a Reason
            </Link>
            <Link className="text-white no-underline">
              Terms and Conditions
            </Link>
            <Link className="text-white no-underline">Privacy Policy</Link>
            <Link className="text-white no-underline">
              Privacy Policy for CA Residents
            </Link>
            <Link className="text-white no-underline">Accessibility</Link>
            <Link className="text-white no-underline">Contact Us</Link>
            <Link className="text-white no-underline ">
              <ul className="p-0">
                <li className="flex items-center justify-start">
                  <BsFacebook className="mr-5" />
                  <BsGoogle />
                </li>
              </ul>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
