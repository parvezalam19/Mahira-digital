import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <div>
      <div>
        <Image
          width={1200}
          height={400}
          className="w-full h-[400px]"
          src={"/assets/portfolio/banner.jpg"}
        />
      </div>

      <div>
        <h1 className="text-[35px] font-bold text-center mt-5">
          Your Project <span className=" text-[#ff4800]">Our Portfolio </span>
        </h1>

        <div className="space-y-4 my-10">
          <div className="grid md:grid-cols-3 grid-cols-1 my-10 px-[6%]">
            <div className=" col-span-2 shadow_1 ">
              {/* Details Section */}
              <div className="space-y-6">
                <div className="bg-white rounded-lg  p-6">
                  <h2 className="text-2xl font-bold mb-4">
                    Details:{" "}
                    <span className="text-[#ff4800] underline">
                      Dr Hera Skin & Hair Clinic
                    </span>{" "}
                  </h2>
                  <ul className="space-y-2">
                    <li>
                      <span className="font-semibold">Name:</span> Dr Hera Skin
                      & Hair Clinic
                    </li>
                    <li>
                      <span className="font-semibold">URL:</span>{" "}
                      <a
                        href="https://drheraskinclinic.com/"
                        className="text-blue-500"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        https://drheraskinclinic.com/
                      </a>
                    </li>
                    <li>
                      <span className="font-semibold">Type:</span> Local
                      Business Service Website
                    </li>
                    <li>
                      <span className="font-semibold">Platform:</span> WordPress
                      CMS
                    </li>
                    <li>
                      <span className="font-semibold">
                        Design, Features, Functionality:
                      </span>{" "}
                      DrHeraSkinClinic.com offers a sophisticated and
                      user-centric website design, reflecting the clinic’s
                      commitment to skin health. Seamless navigation guides
                      visitors through services, treatments, and informative
                      content. Engaging visuals and an intuitive interface
                      enhance user experience, portraying a blend of
                      professionalism and a nurturing approach to skincare.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-span-1 shadow_1">
              <Image
                width={1000}
                height={300}
                className="w-full h-[300px] rounded-lg border-gray-200 border-2   "
                src={"/assets/portfolio/skin.png"}
              />
            </div>
          </div>

          <div className="grid md:grid-cols-3 grid-cols-1 my-10 px-[6%]">
            <div className=" col-span-2 shadow_1 ">
              {/* Details Section */}
              <div className="space-y-6">
                <div className="bg-white rounded-lg  p-6">
                  <h2 className="text-2xl font-bold mb-4">
                    Details:{" "}
                    <span className="text-[#ff4800] underline">
                      Dr Hera Skin & Hair Clinic
                    </span>{" "}
                  </h2>
                  <ul className="space-y-2">
                    <li>
                      <span className="font-semibold">Name:</span> Dr Hera Skin
                      & Hair Clinic
                    </li>
                    <li>
                      <span className="font-semibold">URL:</span>{" "}
                      <a
                        href="https://drheraskinclinic.com/"
                        className="text-blue-500"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        https://drheraskinclinic.com/
                      </a>
                    </li>
                    <li>
                      <span className="font-semibold">Type:</span> Local
                      Business Service Website
                    </li>
                    <li>
                      <span className="font-semibold">Platform:</span> WordPress
                      CMS
                    </li>
                    <li>
                      <span className="font-semibold">
                        Design, Features, Functionality:
                      </span>{" "}
                      DrHeraSkinClinic.com offers a sophisticated and
                      user-centric website design, reflecting the clinic’s
                      commitment to skin health. Seamless navigation guides
                      visitors through services, treatments, and informative
                      content. Engaging visuals and an intuitive interface
                      enhance user experience, portraying a blend of
                      professionalism and a nurturing approach to skincare.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-span-1 shadow_1">
              <Image
                width={1000}
                height={300}
                className="w-full h-[300px] rounded-lg border-gray-200 border-2   "
                src={"/assets/portfolio/skin.png"}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
