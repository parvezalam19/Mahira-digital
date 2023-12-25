"use client"
import Image from "next/image";
import React from "react";
import Slider from "react-slick";
import { RiStarSFill } from "react-icons/ri";

const TestimonialSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    // autoplay: true,
  };

  return (
    <div className="testimonial_slider md:my-20 md:p-10  ">
      <h1 className="text-center md:text-[36px] text-[24px] font-semibold ">
        What Clients Say About Us
      </h1>
      <p className="text-center my-2 ">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>

      <div className=" md:flex px-5 md:px-0 justify-center  my-10 ">
        <div className="md:w-[600px] h-full relative">
          <Slider {...settings}>
            {[1, 2, 3, 4].map((item, i) => (
              <div className="light_boxShadow" >
                <div className="bg-white p-3 md:p-[40px] grid md:grid-cols-4 grid-cols-1">
                  <div className="col-span-1 flex flex-col gap-y-2 ">
                    <div className="w-[80px] h-[80px] border-2 p-1">
                      <Image
                        width={80}
                        height={80}
                        src={"/assets/client/author2.jpg"}
                      />
                    </div>
                    <div>
                      <h2 className="font-semibold">Steven Smith</h2>
                      <p className="text-[#ff4800] leading-4  text-[14px]">
                        CEO at Envato
                      </p>
                    </div>
                  </div>
                  <div className="col-span-3 p-2">
                    <p className="text-[14px]">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Tempore officiis earum reiciendis a sunt cum dolorum quia
                      nisi soluta repellendus.
                    </p>
                    <div className="flex gap-x-1">
                      {[1, 2, 3, 4, 5].map((item, i) => (
                        <span>
                          <RiStarSFill style={{ color: "yellow" }} />
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default TestimonialSlider;
