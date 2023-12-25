import Image from "next/image";
import React from "react";

const LatestBlogs = () => {
  return (
    <div className="md:px-[50px] md:my-20 my-10 px-3">
      <div>
        <h1 className="text-center font-semibold md:text-[36px] text-[24px]">
          Our Latest Blogs
        </h1>
        <p className="text-[14px]   text-center ">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum magnam
          delectus sapiente quod cum alias minima omnis vitae cupiditate non.
        </p>
      </div>

      <div className="grid md:grid-cols-3 grid-cols-1 gap-x-5 gap-y-5  my-10" >
        <div className="cols-span-1 bg-[#f4faff] service_card rounded-lg ">
          <div className="md:w-[355px] h-[290px] rounded-lg">
            <Image
              width={355}
              height={290}
              className="h-full w-full rounded-lg "
              src={"/assets/client/blog1.jpg"}
            />
          </div>
          <div className="md:p-6 p-2">
            <p className="text-[14px]">Admin / March 10, 2020</p>
            <h2 className="md:text-[30px] text-[20px]">
              Here Are The 5 Most Telling Signs Of Micromanagement
            </h2>
            <p className="text-[14px] ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod...
            <span className="text-[#ff4800]  ml-5  ">Read More</span>
            </p>
          </div>
        </div>
        <div className="cols-span-1 bg-[#f4faff] service_card rounded-lg">
          <div className="md:w-[355px] h-[290px]">
            <Image
              width={355}
              height={290}
              className="h-full w-full rounded-lg"
              src={"/assets/client/blog2.jpg"}
            />
          </div>
          <div className="md:p-6 p-2">
            <p className="text-[14px]">Admin / March 10, 2020</p>
            <h2 className="md:text-[30px] text-[20px]">
              Here Are The 5 Most Telling Signs Of Micromanagement
            </h2>
            <p className="text-[14px] ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod...
            <span className="text-[#ff4800]  ml-5  ">Read More</span>
            </p>
          </div>
        </div>   <div className="cols-span-1 bg-[#f4faff] service_card rounded-lg ">
          <div className="md:w-[355px] h-[290px]">
            <Image
              width={355}
              height={290}
              className="h-full w-full rounded-lg"
              src={"/assets/client/blog3.jpg"}
            />
          </div>
          <div className="md:p-6 p-2">
            <p className="text-[14px]">Admin / March 10, 2020</p>
            <h2 className="md:text-[30px] text-[20px]">
              Here Are The 5 Most Telling Signs Of Micromanagement
            </h2>
            <p className="text-[14px] ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod...
            <span className="text-[#ff4800]  ml-5  ">Read More</span>
            </p>
          </div>
        </div>
       
      </div>
    </div>
  );
};

export default LatestBlogs;
