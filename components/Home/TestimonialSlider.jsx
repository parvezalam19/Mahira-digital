"use client";
import Image from "next/image";
import React from "react";
import Slider from "react-slick";
import { RiStarSFill } from "react-icons/ri";
import Link from "next/link";

const TestimonialSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    // autoplay: true,
  };

  return (
    <div className="  ">
      <div className="">
        <div className="">
          <Slider {...settings}>
            {[1, 2, 3, 4].map((item, i) => (
              <div class="relative bg-white h-80 shadow-lg px-6 py-6 rounded-xl">
                <img
                  alt=""
                  loading="lazy"
                  width="150"
                  height="150"
                  decoding="async"
                  class="absolute bottom-0 right-2"
                  src="/assets/services/comma.svg"
                />
                <div class="slide-test app__text ">
                  <h1 className="md:text-[25px] font-semibold">
                    Amazing experience in SEO services
                  </h1>
                  <p>
                    “ One year ago, we began working with the Mahira Digital
                    Marketing Company; their staff helped us with our small
                    business and provided SEO services. We overcame them
                    together, even though the pandemic and inflation caused a
                    few periods of difficult business conditions.
                  </p>
                  <div class="flex items-center justify-start gap-4 mt-6">
                    <img
                      alt=""
                      loading="lazy"
                      width="50"
                      height="50"
                      src="/assets/services/comma.svg"
                      // style="color: transparent;"
                    />
                    <p class=" font-semibold">
                      <strong>Tanveer Ahmad</strong> <br />
                      <Link className="underline" href="https://drheraskinclinic.com/">
                        Dr Hera’s Skin & Hair Clinic
                      </Link>
                    </p>
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
