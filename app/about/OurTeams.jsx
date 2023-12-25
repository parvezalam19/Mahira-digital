import Image from "next/image";
import React from "react";

const OurTeams = () => {
  return (
    <>
      <h1 className="text-center mb-5 font-bold text-[30px] ">Our Teams</h1>

      <div className="grid md:grid-cols-4 grid-cols-1 space-x-7  px-[70px] mb-10 ">
        <div className="col-span-1 card_shadow   team_card">
          <div className="w-full h-[261px]  image_scale ">
            <Image
              className="w-full h-full "
              width={261}
              height={261}
              src="/assets/about/ceo.jpeg"
            />
          </div>
          <div className="flex flex-col h-[100px] p-4 items-center justify-center  bg-white card_hover ">
            <h1 className="text-[25px]  font-semibold ">John Smith</h1>
            <p className="text-[#ff4800]">CEO & Founder</p>
          </div>
        </div>
        <div className="col-span-1 card_shadow   team_card">
          <div className="w-full h-[261px]  image_scale ">
            <Image
              className="w-full h-full "
              width={261}
              height={261}
              src="/assets/about/ceo.jpeg"
            />
          </div>
          <div className="flex flex-col h-[100px] p-4 items-center justify-center  bg-white card_hover ">
            <h1 className="text-[25px]  font-semibold ">John Smith</h1>
            <p className="text-[#ff4800]">CEO & Founder</p>
          </div>
        </div>

        <div className="col-span-1 card_shadow   team_card">
          <div className="w-full h-[261px]  image_scale ">
            <Image
              className="w-full h-full "
              width={261}
              height={261}
              src="/assets/about/ceo.jpeg"
            />
          </div>
          <div className="flex flex-col h-[100px] p-4 items-center justify-center  bg-white card_hover ">
            <h1 className="text-[25px]  font-semibold ">John Smith</h1>
            <p className="text-[#ff4800]">CEO & Founder</p>
          </div>
        </div>

        <div className="col-span-1 card_shadow   team_card">
          <div className="w-full h-[261px]  image_scale ">
            <Image
              className="w-full h-full "
              width={261}
              height={261}
              src="/assets/about/ceo.jpeg"
            />
          </div>
          <div className="flex flex-col h-[100px] p-4 items-center justify-center  bg-white card_hover ">
            <h1 className="text-[25px]  font-semibold ">John Smith</h1>
            <p className="text-[#ff4800]">CEO & Founder</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurTeams;
