import Image from "next/image";
import React from "react";
import MarketingServicesCards from "../custom/MarketingCervicesCards";

const Homebanner = () => {
  return (
    <>
      <div className="home_banner p-5  md:px-[100px] ">
        <h1 className="md:text-[50px] text-[24px] md:mt-40 font-bold text-white">
          Digital Marketing Agency <br />
          in Delhi NCR - <span className="text-[#ff4800]"> Mahira Digital</span>
        </h1>
        <p className="text-white md:w-[500px]">
        Mahira Digital Marketing Agency is the one-stop solution for all your digital marketing services requirement in Delhi NCR.


        </p>
        {/* <button className=" font-medium rounded-[25px] mt-5 outline-none border-none px-[30px] py-[12px] text-white bg-[#ff4800]">
          Contact Us
        </button> */}
   <div className=" grid md:grid-cols-3  grid-cols-1 mt-10    ">
      <div className="col-span-1 md:border-l-2 border-b-2 md:border-b-0  border-[#ff4800]   py-5 md:px-5 top_card ">
        <Image
          width={100}
          height={100}
          className="w-[60px] h-[60px]  "
          src={"/assets/home/service/seo.png"}
        />
        <h1 className="text-white font-bold my-3">
          SEO Services, Search Engine Optimization.
        </h1>
        <ul className="ml-5 text-white space-y-2 ">
          <li>On- Page SEO Services</li>
          <li>OFF Page SEO Services</li>
          <li>Backlink Building Services</li>
          <li>Technical SEO</li>
          <li>Local SEO</li>
          <li>Ecommerce SEO</li>
          <li>YouTube SEO</li>
          <li>National SEO</li>
        </ul>
      </div>
      <div className=" col-span-1 md:border-l-2 border-b-2 md:border-b-0  border-[#ff4800] py-5 md:px-5 top_card ">
        <Image
          width={100}
          height={100}
          className="w-[60px] h-[60px]  "
          src={"/assets/home/service/social_add.png"}
        />
        <h1 className="text-white font-bold my-3">
          Social Media Marketing Services
        </h1>
        <ul className="ml-5 text-white space-y-2">
          <li>
            Facebook, Twitter, Linkedin, Instagram Business Page Optimization
            and Marketing
          </li>
          <li>Facebook and Instagram Ad Campaign Marketing</li>
          <li>Business’s Social Media Platforms Management and Maintenance.</li>
          <li>
            Additional social media services, like contests, with an aggressive
            social media strategy.
          </li>
        </ul>
      </div>
      <div className="col-span-1 md:border-l-2 border-b-2 md:border-b-0  border-[#ff4800] py-5 md:px-5 top_card">
        <Image
          width={100}
          height={100}
          className="w-[60px] h-[60px]  "
          src={"/assets/home/service/webdev.png"}
        />
        <h1 className="text-white font-bold my-3">
          Website Design and Development Service
        </h1>
        <ul className="text-white ml-5 space-y-2 ">
          <li>Service Business Website</li>
          <li>Just Product Showcase Website</li>
          <li>Ecommerce Website</li>
          <li>One Page Website</li>
          <li>Blogging Website</li>
          <li>Dynamic website</li>
          <li>Mobile-Optimised Website</li>
          <li>Website maintenance and support services</li>
        </ul>
      </div>
    </div>      </div>
    </>
  );
};

export default Homebanner;
