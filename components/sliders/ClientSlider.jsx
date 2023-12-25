"use client";
import Image from "next/image";
import React from "react";
import Slider from "react-slick";

const ClientSlider = () => {
  const images = [
    "/assets/client/client_1.png",
    "/assets/client/client_2.png",
    "/assets/client/client_3.png",
    "/assets/client/client_4.png",
    "/assets/client/client_5.png",
    "/assets/client/client_6.png",
  ];

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 6000,
    cssEase: "linear",
    responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]

  };
  return (
    <>
      <div  className="my-10"  >
        <h1 className=" font-semibold text-center my-5  md:text-[36px] text-[24px]" >
        Clients Who Trust Our SEO Agency in Delhi
        </h1>
        <p className="text-center" >
        Our SEO Agency in Delhi has a proven track record of providing excellent and affordable SEO services. We’ve helped many businesses in various industries, such as healthcare, lifestyle, and more, prosper and expand online.
        </p>
        <Slider {...settings}>
          {images.map((item, i) => (
            <div
              className="w-[280px] h-[150px] flex justify-center items-center  clientSlider "
              key={i}
            >
              <Image
                className="w-full h-full"
                width={280}
                height={150}
                src={item}
              />
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
};

export default ClientSlider;
