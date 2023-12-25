import Image from "next/image";
import Link from "next/link";
import React from "react";

const AboutDetails = () => {
  return (
    <>
      <div className="grid md:grid-cols-4 grid-cols-1 bg-[#f2f6f9] ">
        <div className="col-span-2 relative px-5  md:p-[80px] ">
          <div className="    ">
            <div className="my-5">
              <h1 className="text-[40px] font-semibold">Mustaq Ali</h1>
              <p className="text-[16px] font-medium">Founder CEO</p>
            </div>
            <h2 className="py-3 text-[18px]">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum,
              optio.
            </h2>
            <p className="leading-8 my-5">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur
              officia perspiciatis at voluptatibus qui expedita nemo adipisci
              veniam voluptas ad. Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Corrupti dolores recusandae distinctio
              perspiciatis numquam, similique aut pariatur? Ratione, error
              consequuntur?
            </p>
          </div>
        </div>
        <div className="col-span-2 relative  p-[80px]">
          <Image
            className="w-full rounded-[50%] border-[10px] border-white md:h-[500px]"
            alt="img"
            width={500}
            height={500}
            src={"/assets/about/ceo.jpeg"}
          />
          <Link
            href="https://www.youtube.com/embed/NUKbLK2KbG8?si=vfyYW4cxO4oea37_"
            className="videoBtn_border flex justify-center items-center text-center m-auto border-[1pt] border-white rounded-[50%] w-[50px] h-[50px] absolute right-[50px] bottom-[20px]"
          >
            <img src="assets/home/video-icon.png" className="" alt="" />
          </Link>
        </div>
      </div>

      <div   className="p-[50px]">  
        <p>
          Mahira Digital is India's No. 1 Digital Marketing & SEO Company and
          Your Reliable Growth Partner.
          <br /> <br />
          Mahira Digital, based in Delhi, is one of India's top Digital
          Marketing companies. We are a full-service Digital Marketing Company
          that discusses and expertly implements all of your strategies. Our
          first-rate services include everything from designing your business
          website and providing the best SEO services to developing mobile apps
          and managing your online reputation to engage your targeted and
          potential customers.
          <br /> <br />
          If you're reading this, you're already aware of the power and utility
          of Digital Marketing and SEO. With Mahira Digital experts, you can
          multiply that capability and write a new success story for your online
          business. A single glance is often all that is required to CONVERT a
          VISITOR into a BUYER. At Mahira Digital, one of the leading and most
          affordable Digital Marketing service providers, we are always ready to
          assist you in capitalizing on that GLANCE.
          <br /> <br />
          As a premier SEO company in Delhi NCR, we have highly dedicated
          professionals with extensive experience in Digital Marketing, SEO,
          SMO, content, website design and development, and more. Our team is
          passionate about assisting you in growing your business by leaps and
          bounds and giving your business website the NUMBER #1 spot in search
          engine results.
        </p>
      </div>
    </>
  );
};

export default AboutDetails;
