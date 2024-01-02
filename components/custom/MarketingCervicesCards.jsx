import Image from "next/image";
import React from "react";

const MarketingServicesCards = () => {
  return (
    <div className=" grid gap-x-5  md:grid-cols-3   grid-cols-1 mt-10    ">
      <div className="col-span-1 md:border-l-2 border-b-2 md:border-b-0  border-[#ff4800]   py-5 md:px-5 top_card ">
    
    <div className=" flex justify-center items-center" >

        <Image
          width={150}
          height={150}
          className="w-[100px] h-[100px]  "
          src={"/assets/home/service/seo.png"}
        />
    </div>
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
      <div className=" flex justify-center items-center" >
        <Image
          width={150}
          height={150}
          className="w-[100px] h-[100px]  "
          src={"/assets/home/service/social_add.png"}
        />
</div>
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
      <div className=" flex justify-center items-center" >
        <Image
          width={150}
          height={150}
          className="w-[100px] h-[100px]  "
          src={"/assets/home/service/webdev.png"}
        />
</div>
      
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
    </div>
  );
};

export default MarketingServicesCards;
