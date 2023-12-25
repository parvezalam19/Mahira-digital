import Image from "next/image";
import Link from "next/link";
import React from "react";

const ServiceCards = ({data}) => {
  return (
    <div className=" flex justify-center gap-y-2 flex-col items-center">
      <Image
        className="w-[70px] h-[70px]"
        width={100}
        height={100}
        src={data?.img}
      />
      <h2 className="text-[20px] font-bold">{data?.title}</h2>
      <p className="text-center">
       {data?.desc}
      </p>
      <Link
        className="bg-[#3d3d3d] rounded-[20px] text-white w-[120px] h-[35px] flex justify-center items-center"
        href="#"
      >
        Read More
      </Link>
    </div>
  );
};

export default ServiceCards;
