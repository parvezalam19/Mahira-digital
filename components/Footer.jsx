import Image from "next/image";
import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import Link from "next/link";

const Footer = () => {
  const usefulLinks = [
    {
      title: "Best SEO Services",
      href: "#",
    },
    {
      title: " PPC Services Company",
      href: "#",
    },
    {
      title: " Website Designing Services Company",
      href: "#",
    },
    {
      title: "Digital Marketing Course",
      href: "#",
    },
    {
      title: "Website Development Services",
      href: "#",
    },
    {
      title: "SEO Courses & Training",
      href: "#",
    },
    {
      title: "SEO Expert",
      href: "#",
    },
  ];

  const ImportantLink = [
    {
      title: "Facebook Ad marketing",
      href: "#",
    },
    {
      title: "Online Reputation Management",
      href: "#",
    },
    {
      title: "Search engine marketing",
      href: "#",
    },
    {
      title: "Content Writing services",
      href: "#",
    },
    {
      title: "Link building services",
      href: "#",
    },
    {
      title: "Content marketing services",
      href: "#",
    },
    {
      title: "Instagram advertising",
      href: "#",
    },
    {
      title: "Digitalization in Marketing",
      href: "#",
    },
  ];

  return (
    <footer className="bg-[#15171a] w-full h-auto md:h-[400px] text-white p-3  md:p-[30px] relative z-1 ">
      <Image
        width={500}
        height={500}
        className="w-[500px] h-[300px] absolute right-[20%] top-[20%]  "
        src={"/assets/home/circle-map.png"}
      />
      <div className="grid md:grid-cols-4 space-x-5 md:space-x-10 grid-cols-1 ">
        <div className="col-span-1 relative  flex flex-col justify-center gap-y-6 h-full   ">
          <div className="border_right_footer"></div>
          <Image
            alt="logo"
            width={150}
            height={70}
            className="w-[150px] h-[70px] rounded-md "
            src={"/assets/home/logo.png"}
          />
          <p className="text-[14px] leading-6 text-white ">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias
            aliquam, aliquid quidem laudantium cupiditate veritatis voluptas
            dolore expedita ab animi, saepe facilis consequatur assumenda
            similique accusamus esse dignissimos quasi deleniti.
          </p>
          <div className="flex  gap-x-4">
            <Link
              href="#"
              className="w-[35px] h-[35px] flex justify-center items-center bg-[#212529] rounded-[25px] text-white  "
            >
              <span>
                <FaFacebookF />
              </span>
            </Link>
            <Link
              href="#"
              className="w-[35px] h-[35px] flex justify-center items-center bg-[#212529] rounded-[25px] text-white "
            >
              <span>
                <FaInstagram />
              </span>
            </Link>{" "}
            <Link
              href="#"
              className="w-[35px] h-[35px] flex justify-center items-center bg-[#212529] rounded-[25px] text-white "
            >
              <span>
                <FaLinkedinIn />
              </span>
            </Link>{" "}
            <Link
              href="#"
              className="w-[35px] h-[35px] flex justify-center items-center bg-[#212529] rounded-[25px] text-white "
            >
              <span>
                <FaTwitter />
              </span>
            </Link>
          </div>
        </div>
        <div className="col-span-1  relative ">
          <div className="border_right_footer"></div>
          <h1 className="md:text-[25px] text-[20px] md:my-0 my-4 ">
            Useful Links
            <div className="links_border"></div>
          </h1>

          <ul className="flex flex-col h-full justify-between md:py-7 ">
            {usefulLinks.map((item, i) => (
              <li key={i} className="text-[14px]">
                <Link href={item?.href}>{item?.title}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="col-span-1 relative ">
          <div className="border_right_footer"></div>
          <h1 className="md:text-[25px] text-[20px] md:my-0  mt-20  ">
            Important Link
            <div className="links_border"></div>
          </h1>

          <ul className="flex flex-col h-full justify-between md:py-7 ">
            {ImportantLink.map((item, i) => (
              <li key={i} className="text-[14px]">
                <Link href={item?.href}>{item?.title}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="col-span-1 relative  ">
          <div className="border_right_footer"></div>
          <h1 className="md:text-[25px]  text-[20px] mt-[150px] md:mt-0  ">
            Contact Details
            <div className="links_border"></div>
          </h1>

          <div className="md:my-10">
            <p className="text-white">
              <strong>Address : </strong> UG 17 (Upper Ground), Kirti Shikhar
              Tower, District Center Janakpuri, Janakpuri, New Delhi, Delhi,
              110058
            </p>
            <p className="text-white">
              <strong>Contact Number: </strong> +91 9953962966
            </p>
            <p className="text-white">
              <strong>Email Id:</strong> info@mahiradigital.com
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
