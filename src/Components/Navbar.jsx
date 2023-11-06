import React from "react";

export default function Navbar() {
  return (
    <>
      <div >
        <navtop className="h-10 flex mx-2 mt-2">
          <text className="text-gray-400">
            Your Store <span className="text-pink-600 font-bold">Auburn</span>
          </text>

          <text
            className="text-gray-400 mx-8">
            Call for a Free Estimate! <span className="text-pink-600 font-bold">(334) 729-2174</span> 
          </text>
          <button className="h-10 w-40 text-white font-bold bg-pink-600">Book Your Cleaning</button>
        </navtop>
        <hr/>
        <navmain >
          <img
            className="h-8"
            src="https://twomaidscleaning.com/_next/image/?url=https%3A%2F%2Fres.cloudinary.com%2Ftwomaidsengi%2Fimage%2Fupload%2Fc_scale%2Cf_auto%2Cq_auto%2Cw_1014%2Fv1670257150%2Fhubsite-reskin%2Ftwo-maids-logo-pink.png&w=2048&q=75"
            alt="logo"
          />
        </navmain>
        <hr/>
      </div>
    </>
  );
}
