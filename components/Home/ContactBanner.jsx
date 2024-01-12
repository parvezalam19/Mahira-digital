import Image from "next/image";
import React from "react";

const ContactBanner = () => {
  return (
    <div>
      <div>
        <div className="grid md:grid-cols-2 grid-cols-1 relative my-10">
          <div className="col-span-1">
            <Image
              alt="banner"
              width={500}
              height={400}
              className="w-full h-[250px] md:h-[400px]"
              src={"/assets/home/woman2.jpg"}
            />
          </div>

          <Image
            alt="banner"
            width={500}
            height={400}
            className="w-[65%] h-[400px] top-0 hidden md:block absolute right-0"
            src={"/assets/home/left-shape2.png"}
          />
          <div className="md:absolute md:bg-transparent bg-[#ff4800] top-0 right-0 h-full flex flex-col items-center md:items-start md:w-[50%] mx-auto justify-center md:p-0 p-2 gap-y-5 ">
            <h1 className="md:text-[36px] text-white font-semibold text-[24px]">
              Submit Your Request <br /> for a Free Quote Today
            </h1>
            <form action="" className="">
              <div className="flex md:flex-row flex-col gap-y-6 items-center justify-center gap-x-4">
                <input
                  type="tel"
                  placeholder="Enter Your Name"
                  name="name"
                  id="name"
                  className="max-w-[200px]  text-white rounded-[25px] bg-gray-900   px-[10px] py-[5px] "
                />
                <input
                  type="tel"
                  placeholder="Enter Your Number"
                  name="number"
                  id="number"
                  className="max-w-[200px]  text-white rounded-[25px] bg-gray-900   px-[10px] py-[5px] "
                />

                <button className="outline-none text-[#ff4800] bg-white px-[20px]  py-2 rounded-[25px] ">
                  Submit
                </button>
              </div>
            </form>
            <p className="text-[16px] hidden md:block text-white">
              Connecting with Our Digital Marketing Business <br /> consultant
              Is the Next Step; Let’s Do It Now
            </p>
            <p className="text-[16px] md:hidden block text-white">
              Connecting with Our Digital Marketing Business consultant Is the
              Next Step; Let’s Do It Now
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactBanner;
