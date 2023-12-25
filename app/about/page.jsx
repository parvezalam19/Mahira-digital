import BreadCrumb from "@/components/BreadCrumb";
import AboutSection from "@/components/Home/AboutSection";
import React from "react";
import AboutDetails from "./AboutSection";
import OurTeams from "./OurTeams";
import ContactBanner from "@/components/Home/ContactBanner";

const page = () => {
  return (
    <div className="">
      <div className="about_bg relative">
        <h1 className="md:text-[35px] absolute bottom-[35%] left-[10%] text-white font-bold ">
          About
        </h1>
        <BreadCrumb current="About" />
      </div>
      <div className="px-[50px]">
        <AboutSection />
        <WhatWeDo />
      </div>
      <AboutDetails/>
      <OurTeams/>
      <ContactBanner />

    </div>
  );
};

export default page;

function WhatWeDo() {
  return (
    <div className="grid md:grid-cols-3 grid-cols-1 mt-[150px] mb-10">
      <div className="col-span-1">
        <h1 className="font-bold text-[25px] ">Our History</h1>
        <p className="text-[#57647c]  text-[14px] ">
          Lorem ipsum dolor sit  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe,
          consequuntur! amet, consectetur adipisicing elit. Saepe,
          consequuntur!
        </p>
      </div>
      <div className="col-span-1">
        <h1 className="font-bold text-[25px] ">Our Mission</h1>
        <p className="text-[#57647c]  text-[14px]  ">
          Lorem ipsum dolor sit   Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe,
          consequuntur!amet, consectetur adipisicing elit. Saepe,
          consequuntur!
        </p>
      </div>

      <div className="col-span-1">
        <h1 className="font-bold text-[25px] ">Who We Are</h1>
        <p className="text-[#57647c]  text-[14px]  ">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe,
          consequuntur! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe,
          consequuntur!
        </p>
      </div>
    </div>
  );
}
