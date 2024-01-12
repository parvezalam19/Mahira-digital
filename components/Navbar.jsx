"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { SlArrowDown } from "react-icons/sl";
import { CgMenuLeft } from "react-icons/cg";
import { RxCross1 } from "react-icons/rx";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";
import { IoIosCall } from "react-icons/io";
import { usePathname } from "next/navigation";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

const Navbar = () => {
  const pathname = usePathname();

  const [open, setOpen] = useState(false);

  const navigation = [
    { name: "Home ", href: "/" },
    { name: "About", href: "/about" },
    { name: "Portfolio", href: "/portfolio" },

    { name: "Service", href: "#" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
    { name: "Career", href: "/career" },
  ];

  const services = [
    {
      name: "SEO Services",
      href: "/seo-services",
    },
    {
      name: "Digital Marketing Course",
      href: "/digital-marketing-course",
    },
    {
      name: "Website Development",
      href: "/web-development",
    },
    {
      name: "Google Ads",
      href: "/ppc-company-delhi",
    },
    {
      name: "Digital Marketing Services",
      href: "/digital-marketing-agency",
    },
    {
      name: "SEO Courses",
      href: "/seo-course",
    },
    {
      name: "Instagram Marketing",
      href: "/instagram-marketing",
    },
    {
      name: "Search Engine Marketing",
      href: "/search-engine-marketing",
    },
    {
      name: "Online Reputation Management",
      href: "/online_reputation_management",
    },

    {
      name: "Content Writing",
      href: "/content-marketing",
    },
  ];

  useEffect(() => {
    if (typeof document !== "undefined") {
      const mainDiv = document.querySelector("nav");

      window?.addEventListener("scroll", () => {
        if (window.scrollY > 0) {
          mainDiv.classList.add("sticky-top");
        } else {
          mainDiv.classList.remove("sticky-top");
        }
      });
    }
  }, []);

  return (
    <div>
      <nav>
        <div className="md:flex justify-between items-center hidden z-[200]  bg-white md:px-[50px] h-[70px]">
          <div>
            <Image
              width={200}
              height={60}
              src={"/assets/logo.png"}
              className="w-[180px] h-[60px]"
            />
          </div>
          <div className="flex gap-x-10 items-start  ">
            <span className=" font-mono flex items-center text-[16px]">
              {" "}
              <IoIosCall /> +91-8239773529
            </span>
            <span className=" font-mono flex items-center text-[16px]">
              {" "}
              <IoMdMail /> info@mahiradigital.com
            </span>

            <button className="text-[#ff4800] main-Light_border rounded-[25px]  md:px-[20px] md:py-[5px] hover:bg-[#ff4800] hover:text-white ">
              Book an Appointment
            </button>
          </div>
          <div className="flex justify-between gap-x-9">
            {/* <h1 className='text-[16px] font-semibold'></h1> */}

            <div className="flex  gap-x-4">
              <Link
                href="#"
                className="w-[35px] h-[35px] flex justify-center items-center bg-[#557dbc] rounded-[25px] text-white  "
              >
                <span>
                  <FaFacebookF />
                </span>
              </Link>
              <Link
                href="#"
                className="w-[35px] h-[35px] flex justify-center items-center bg-[#405DE6] rounded-[25px] text-white "
              >
                <span>
                  <FaInstagram />
                </span>
              </Link>{" "}
              <Link
                href="#"
                className="w-[35px] h-[35px] flex justify-center items-center bg-[#0077b5] rounded-[25px] text-white "
              >
                <span>
                  <FaLinkedinIn />
                </span>
              </Link>{" "}
              <Link
                href="#"
                className="w-[35px] h-[35px] flex justify-center items-center bg-[#1DA1F2] rounded-[25px] text-white "
              >
                <span>
                  <FaTwitter />
                </span>
              </Link>
            </div>
          </div>
        </div>

        <div className="flex justify-between items-center shadow-lg md:hidden bg-white px-3 md:px-[50px] h-[80px]">
          <div>
            <Image
              width={150}
              height={66}
              alt="mahira_logo"
              src={"/assets/home/logo.png"}
              className="w-[140px] h-[46px]"
            />
          </div>
          <button className="text-[#ff4800] main-Light_border rounded-[25px] text-[14px] p-2 md:text-[25px] md:px-[20px] md:py-[5px] hover:bg-[#ff4800] hover:text-white ">
            Book an Appointment
          </button>

          <div className="w-[20px] h-[20px] " onClick={() => setOpen(true)}>
            <CgMenuLeft size="2rem" />
          </div>
        </div>

        <div
          className={`justify-between hidden md:flex  text-white py-3 px-[100px] ${
            pathname !== "/" ? "bg-[#ff4800]" : "bg-transparent"
          } `}
        >
          <div>
            {/* <Image width={150} height={70} className='w-[150px] h-[80px]' src={"/assets/home/logo.png"} /> */}
          </div>
          <ul className="flex justify-between gap-x-10">
            {navigation?.map((item, i) => (
              <div className="hidden lg:block" key={item.name}>
                {item.name === "Service" ? (
                  <Link href="#" className={`text-white menu_hover`}>
                    <div className="">
                      <div className="group relative cursor-pointer ">
                        <div className="flex">
                          <a
                            className="menu-hover   text-base font-medium  "
                            onClick=""
                          >
                            Services
                          </a>
                          <span>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              className="h-6 w-6"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                              />
                            </svg>
                          </span>
                        </div>
                        <ul
                          className="invisible absolute z-50  top-[25px] flex  flex-col w-[200px] bg-gray-100  text-gray-800 shadow-xl group-hover:visible"
                          onClick=""
                        >
                          {services?.map((item, i) => {
                            return (
                              <li className="" key={i}>
                                <Link
                                  href={item?.href}
                                  className="   border-gray-200 w-full h-[40px] border-b-[2px] px-2  hover:bg-[#ff4800] hover:text-white flex items-center  "
                                >
                                  {item?.name}
                                </Link>
                              </li>
                            );
                          })}
                        </ul>
                      </div>
                    </div>
                  </Link>
                ) : (
                  <Link
                    href={item?.href}
                    className={`text-white ${
                      item.href === pathname ? "active-link" : ""
                    }`}
                  >
                    {item?.name}
                  </Link>
                )}
              </div>
            ))}
          </ul>
        </div>
      </nav>

      <div className="fixed left-[20px] bottom-[10%] z-[100] ">
        {/* <Link
          href="#"
          className="md:w-[50px] md:h-[40px] w-[40px] h-[30px] block cursor-pointer "
        >
          <Image
            width={50}
            height={40}
            className="w-full h-full"
            src={"/assets/home/facebook.png"}
          />
        </Link>
        <Link
          href="#"
          className="md:w-[50px] md:h-[40px] w-[40px] h-[30px] block  cursor-pointer "
        >
          <Image
            width={50}
            height={40}
            className="w-full h-full"
            src={"/assets/home/linkdin.png"}
          />
        </Link>
        <Link
          href="#"
          className="md:w-[50px] md:h-[40px] w-[40px] h-[30px] block cursor-pointer"
        >
          <Image
            width={50}
            height={40}
            className="w-full h-full"
            src={"/assets/home/instagram.png"}
          />
        </Link> */}
        <button className=" font-medium rounded-[25px] mt-5 outline-none border-none px-[35px] py-[6px] text-white bg-[#ff4800]">
          Get Quote
        </button>
      </div>

      <div className="fixed right-[10px] bottom-[10%] z-[100] ">
        <Link
          href="#"
          className="w-[50px] h-[50px]  flex justify-center items-center bg-[#25d366]  my-3 rounded-[50%]"
        >
          <FaWhatsapp size="25px" className="text-white" />
        </Link>
        <Link
          href="#"
          className="w-[50px] h-[50px]  flex justify-center items-center bg-[#dd6938]  rounded-[50%] "
        >
          <IoIosCall size="25px" className="text-white" />
        </Link>
      </div>

      {/* mobile menu */}
      {
        <div
          className={`h-[100vh] top-0 p-[60px] left-0 absolute w-[350px] bg-white z-50 transition-transform transform ${
            open ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="absolute" onClick={() => setOpen(false)}>
            <RxCross1 size="2rem" />
          </div>{" "}
          <br />
          <ul className="flex flex-col justify-center items-center gap-y-4 py-[100px]">
            {navigation?.map((item, i) => (
              <li className="" key={item?.title} onClick={() => setOpen(false)}>
                <Link href={item?.href} className="">
                  {item?.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      }
    </div>
  );
};

export default Navbar;



