import Image from "next/image";
import React from "react";

const Channel = () => {
    const imagArray = [
        "/assets/channel/facebook.png",
        "/assets/channel/instagram.png",
        "/assets/channel/ads.png",
        "/assets/channel/youtube.png",
        "/assets/channel/snap.png",
        "/assets/channel/quora.png",
        "/assets/channel/twitter_1.jpg",



        
    ]
  return (
    <div>
      <h1 className="font-bold md:text-[40px] text-center">
        <span className="text-[#ff4800] mr-2">Marketing</span>
        Channel
      </h1>
      <p className=" text-[20px] text-center">WE WORK WITH</p>

      <div className="flex flex-wrap justify-center my-5 md:px-[6%] gap-10">
       {
        imagArray?.map((elm,i)=>(
            <div className="md:h-[80px] rounded-xl dark_shadow p-4 w-[200px]">
            <Image
              width={200}
              height={90}
              className="w-full object-contain h-full"
              src={elm}
            />
          </div>
        ))
       } 
      
      </div>
    </div>
  );
};

export default Channel;
