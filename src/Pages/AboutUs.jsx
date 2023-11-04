import React from "react";
import { aboutUs } from "../utils";
const AboutUs = () => {
  return (
    <section className="bg-transparent py-5">
      <div className="justify-center flex flex-wrap">
        <div className=" w-[1000px]">
          <h1 className="text-[#cf2680] font-[TiemposFine Regular] py-[50px] m-2 text-6xl">
            About Us
          </h1>
          <h5 className="text-[#cf2680] mb-10 text-xl">
            Two Maids prioritizes customer service and quality
          </h5>
          {
                aboutUs.map(v=><p className=" mb-4 leading-6 font-normal text-base"> {v} </p> )
          }
          
          <h5 className="text-[#cf2680] mb-10 text-xl">
            Our Chesterfield Team
          </h5>
          <p className=" mb-4 leading-6 font-normal text-base">
            Hi, we are Jordan and Carly Black, and are the proud owners and
            leaders of the maid service team at Two Maids & A Mop serving
            Chesterfield, MO!
          </p>
          <p className=" mb-4 leading-6 font-normal text-base">
            I consider myself a late bloomer in the business world, as I was
            first a music teacher for 10 years. However, the spirit of
            entrepreneurship has always been with me. I enjoyed teaching,
            however, I was always thinking of new business ideas and taking on
            side ventures. After founding and directing multiple music groups
            and a local musician’s network, I knew the business side of me was
            longing for my 100% commitment.
          </p>
          <p className=" mb-4 leading-6 font-normal text-base">
            Carly’s joy of business comes from building relationships and
            helping others. Carly’s positive energy makes her someone easy to
            connect with and enjoy being around. Her role in Two Maids includes
            being a smiling, welcoming presence in our community, for both
            customers and maid service team. Additionally, Carly works with her
            mother and sister in a business called Revival Society where they
            help entrepreneurial moms get free from the overwhelming role of
            motherhood.
          </p>
          <p className=" mb-4 leading-6 font-normal text-base">
            Carly and I have always felt passionate about having a clean and
            organized home. We believe that this can truly bring positive energy
            to a family. So, when we started to pursue business opportunities,
            we felt deeply connected to the residential cleaning industry. With
            our employee incentive payment plan called Pay for Performance, a
            family-like atmosphere with our wonderful employees and clients, as
            well as the relationship with Cleaning for a Reason, we knew Two
            Maids & A Mop was a perfect match.
          </p>
          <p className=" mb-4 leading-6 font-normal text-base">
            It is because of all of this, that as the local and proud owners of
            Two Maids & A Mop of Chesterfield, that we will give our customers
            the precious gift of time as well as continual positive energy
            through the Two Maids Cleaning Experience.
          </p>
          <p className=" mb-4 leading-6 font-normal text-base">
            Discover why we are a “Maid Service worth talking about!”
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
