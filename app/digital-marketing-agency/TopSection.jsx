import ServiceForm from "@/components/custom/ServiceForm";
import Image from "next/image";
import React from "react";

const TopSection = ({ data }) => {
  return (
    <div className="md:px-[8%] my-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
      <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
        <div className="lg:pr-4">
          <div className="lg:max-w-lg">
            <p className="text-[30px] font-semibold leading-7 highlight">
              Digital Marketing
            </p>
            <h1 className="mt-2 primary-heading">
              IMPORTANCE OF DIGITAL MARKETING FOR{" "}
              <span className="highlight">YOUR BRAND</span>
            </h1>
            <p className="mt-6 text-xl leading-8 text-gray-700">
              A brand without digital marketing is just like your choice of
              sweet but with salt.
            </p>
          </div>
        </div>
      </div>
      <div className="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 ">
        <ServiceForm />
        <Image
          alt="banner"
          width={500}
          height={500}
          src={"/assets/services/banner.png"}
          className="w-full max-w-none mt-10"
          style={{ color: "transparent" }}
        />
      </div>
      <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
        <div className="lg:pr-4">
          <div className="max-w-xl text-base leading-7 lg:max-w-lg">
            <p className="app__text">
              Today the digital market is loaded with hurdles and challenges.
              The stiffness of competition in the market has made an online
              presence mandatory. When it comes to the success key for
              businesses in current times, online presence is something
              inevitable. Every entrepreneur desires to scale up their business
              to reach out to more audiences, get leads, and thereby elevate the
              brand value. However, to get the correct ingredients to frame the
              best online ecosystem, every brand must have its hands-on digital
              marketing agency in Delhi, India.
            </p>
            <ul role="list" className="mt-8 space-y-8 app__text">
              <li className="flex gap-x-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                  className="mt-1 h-5 w-5 flex-none text-indigo-600"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span>
                  The ability to reach out to anyone and anywhere, as there are
                  no geographical boundaries with digital
                </span>
              </li>
              <li className="flex gap-x-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                  className="mt-1 h-5 w-5 flex-none text-indigo-600"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span>
                  The ability to target the right audience at the right time
                </span>
              </li>
              <li className="flex gap-x-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                  className="mt-1 h-5 w-5 flex-none text-indigo-600"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span>
                  Assistance to know your audience and drive engagement to
                  create brand loyalty. Get some inspiration from the power of
                  customer loyalty programmes.
                </span>
              </li>
              <li className="flex gap-x-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                  className="mt-1 h-5 w-5 flex-none text-indigo-600"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span>
                  The ability to track and monitor responses to your marketing
                  efforts easily and instantly
                </span>
              </li>
            </ul>
            <p className="mt-8 app__text">
              Mahira Digitals is one of the best digital marketing companies in
              Delhi, presenting the customers with a touch of excellence and
              experience to make a business successful. <br /> <br /> We present
              a comprehensive range of digital marketing services to our
              customers, whether they are just kick-starting their
              entrepreneurial journey or their business is in the mode of
              expansion. <br /> <br /> Our team of well-trained and experienced
              digital marketers works to design the most beneficial digital
              solutions for clients. All the marketing solutions are data-driven
              generated through the perfect blend of analytics tools and
              knowledge.
            </p>
            <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">
              More Digital Marketing Services
            </h2>
            <ul role="list" className="mt-8 space-y-3 app__text">
              {data?.map((item,i) => (
                <li  key={i} className="flex gap-x-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                    className="mt-1 h-5 w-5 flex-none text-indigo-600"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopSection;
