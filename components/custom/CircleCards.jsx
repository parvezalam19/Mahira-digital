import Image from "next/image";
import React from "react";

const CircleCards = ({ data }) => {
  return (
    <div className="relative my-10  md:flex md:justify-between grid gap-2 grid-cols-2 ">
      {data?.map((item, i) => (
        <div
          key={i}
          className="md:w-[192px] cursor-pointer  sec_circle p-10  md:h-[192px] flex flex-col justify-center items-center  border-[1px] rounded-full border-gray-600"
        >
          <Image
            width={100}
            height={100}
            className="md:w-[100px]  md:h-[100px]  w-[50px] h-[50px]"
            src={item?.img1}
          />
          <h1 className="text-[13px] text-center font-bold">{item?.t1}</h1>

          <div className="seo_hover  p-5">
            <Image
              width={80}
              height={80}
              src={item?.img2}
              className="md:w-[80px]  md:h-[80px]  w-[40px] h-[40px]"
            />
            <h1 className="text-[14px] text-center text-white font-bold">
              {item?.t2}
            </h1>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CircleCards;
