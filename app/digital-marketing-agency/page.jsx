import ServiceForm from "@/components/custom/ServiceForm";
import Image from "next/image";
import React from "react";
import TopSection from "./TopSection";
import MarketingServicesCards from "@/components/custom/MarketingCervicesCards";
import CallUsBanner from "@/components/custom/CallUsBanner";
import ClientLogo from "@/components/Home/ClientLogo";

const Page = () => {
  const Services = [
    "Google AdWords",
    "Content Writing services",
    "Search engine marketing",
    "Content Marketing Services ",
    " Digital Marketing Course ",
    "  SEO Courses & Training ",
    "PPC Services in India",
    "ORM Services",
  ];

  const marketingType = [
    {
      title: "Search Engine Optimization",
      desc: "As the best digital marketing company in Delhi, Mahira Digitals owns a team who works to frame the best SEO strategies to convert the client into top rankers.",
      href: "#",
    },

    {
      title: "Google AdWords",
      desc: "Being the best digital marketing agency in Delhi, we help you strengthen your paid advertisement strategy with google Adwords",
      href: "#",
    },

    {
      title: "Online Reputation Management",
      desc: "Mahira Digital helps businesses burnish their brand reputation and present a clean and adorable image in the online world",
      href: "#",
    },

    {
      title: "Digital Marketing Courses & Training",
      desc: "Mahira Digitals offer you the most premium digital marketing courses at extremely affordable charges",
      href: "#",
    },
    {
      title: "Search Engine Marketing",
      desc: "All our SEM techniques are conversion-focused, which helps companies meet their revenue goals.",
      href: "#",
    },
    {
      title: "Website Development",
      desc: "At Mahira Digitals, our expert web developer designs the most user-friendly and responsive websites.",
      href: "#",
    },
    {
      title: "Content Writing & Marketing",
      desc: "Our team at Mahira Digitals is specially trained to offer the most premium content to clients.",
      href: "#",
    },
    {
      title: "Facebook Marketing",
      desc: "We help businesses understand the Facebook marketing mechanism and assist them in generating leads through Facebook ads.",
      href: "#",
    },
    {
      title: "Social Media Optimization",
      desc: "Mahira Digitals, the best digital marketing agency in Delhi offers result-oriented SMO services in Delhi.",
      href: "#",
    },
  ];

  return (
    <div>
      <div>
        <Image
          width={1200}
          height={400}
          className="w-full h-[400px]"
          src={"/assets/services/digital.jpg"}
        />
      </div>

      <TopSection data={Services} />
      <div className=" relative gradient_bg z-[25] px-[8%] py-10">
        <h2 className="text-[30px] text-center  font-bold ">
          Our Highly-Tailored{" "}
          <span className="text-white font-bold">
            Digital Marketing Services in Delhi
          </span>
        </h2>
        <MarketingServicesCards />
      </div>

      <div className="bg-gray-100 h-auto  py-10 ">
        <h1 className="text-[25px] font-bold mb-5 text-center">
          What type of{" "}
          <span className="text-[#ff4800]">digital marketing services </span> in
          Delhi do we offer?
        </h1>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl pl-[8%]">
          {marketingType?.map((item, i) => (
            <div
              key={i}
              class="bg-white rounded-lg overflow-hidden shadow-md p-6 transform hover:scale-105 transition duration-300"
            >
              <h2 class="text-[18px] font-bold mb-4">{item?.title}</h2>
              <p class="mb-4 text-[14px]">{item?.desc}</p>
            </div>
          ))}
        </div>
      </div>
      <CallUsBanner />
      
      <ClientLogo/>
    </div>
  );
};

export default Page;
