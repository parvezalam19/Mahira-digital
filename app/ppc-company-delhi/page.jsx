import CircleCards from "@/components/custom/CircleCards";
import ServiceCards from "@/components/custom/ServiceCards";
import ServiceForm from "@/components/custom/ServiceForm";
import Image from "next/image";
import React from "react";

const Page = () => {
  const ppcData = [
    {
      img1: "/assets/services/ppc_icon.png",
      img2: "/assets/services/ppc-white.png",
      t1: "PPC",
      t2: "Pay-Per-Click Marketing",
    },
    {
      img1: "/assets/services/traffic.png",
      img2: "/assets/services/traffic-hover.png",
      t1: "Boost Traffic",
      t2: " Boost Website Traffic",
    },
    {
      img1: "/assets/services/click.png",
      img2: "/assets/services/click-white.png",
      t1: "Pay on Clicks",
      t2: " Pay Only or Clicks",
    },
    {
      img2: "/assets/services/leads.png",
      img1: "/assets/services/leads-hover.png",
      t1: "More Leads",
      t2: " More Leads",
    },
    {
      img1: "/assets/services/roll.png",
      img2: "/assets/services/roll-hover.png",
      t1: "Increased Sales",
      t2: "Increased Sales",
    },
  ];

  const ppcService = [
    {
      img: "/assets/services/ppc4.svg",
      title: "Search Ads",
      desc: "Search Advertising is paramount to establish your business through Google ads. Search Advertising involves three significant steps – Bidding, Advertisements, and Keywords.",
    },
    {
      img: "/assets/services/ppc1.svg",
      title: "Display Ads",
      desc: "Digital Advertising’ must be mastered by every digital marketer to unleash its brand’s true potential to reach out to the maximum audience. ",
    },
    {
      img: "/assets/services/traffic.png",
      title: "Remarketing ",
      desc: "Remarketing is one of the witty and unique strategies of a PPC Services Company in India. This technique enables the marketers to highlight different relevant ads to the visitors",
    },
    {
      img: "/assets/services/ppc2.svg",
      title: "Product Listing Ads",
      desc: "Advertise more and more products and related information to convert your leads into assured sales with our customized product listing ads",
    },
    {
      img: "/assets/services/ppc2.svg",
      title: "Google Shopping ads",
      desc: "Retails marketing businesses can create campaigns and sell products to their online customers through Google Shopping Ads.",
    },
    {
      img: "/assets/services/ppc3.svg",
      title: "Mobile Advertising",
      desc: "Actively reach your targeted audience and interact with them directly with the help of mobile advertising.",
    },
  ];

  return (
    <div>
      <div>
        <Image
          width={1200}
          height={400}
          className="w-full h-[400px]"
          src={"/assets/services/ppc.png"}
        />
      </div>

      <div className="my-5 md:px-[6%]">
        <div className="grid md:grid-cols-2 gap-x-5 grid-cols-1 ">
          <div className="col-span-1  ">
            <h1 className="text-[30px] font-bold">
              PPC Services Company in India
            </h1>

            <p className="mt-5">
              Are you tired of wondering about the best PPC Management Service?
              Well, no more worries now, as Mahira Digital is here as the best
              PPC Services Company in India. In today’s time of content
              marketing and other direct advertisements, such as best PPC
              management services strengthen the core of nurturing and
              generating mid-funnel utilising advertising content entries,
              content downloads, seeking signups in newsletters channelising for
              application download. <br /> <br /> PPC Campaign Management refers
              to Pay-Per-Click (PPC) Management is the mechanism of managing and
              monitoring an agency’s overall Pay-Per-Click( PPC) ad expenses. It
              accelerates the company’s growth by analysing its investment
              pattern on PPC ads to generate maximum conversion. <br /> <br />{" "}
            </p>
          </div>
          <div className="col-span-1">
            <ServiceForm />
          </div>
        </div>

        <h1 className="text-[30px] text-center font-bold">
          How Can We Help You Grow?
        </h1>
        <p className="text-center">
          PPC Management Services are a boon to your online business and are an
          efficient digital marketing campaign mechanism. Many companies
          overlook PPC management’s benefits, which acts as a significant set
          back in their growth. Here, we will explore how the best PPC
          Management Series can present your company the hack to growth and
          success.
        </p>
        <div>
          <CircleCards data={ppcData} />
        </div>

        <div className="grid md:grid-cols-2 grid-cols-1 my-5 md:gap-x-10">
          <div>
            <Image
              width={700}
              height={400}
              className="h-full"
              src={"/assets/services/ppc3.png"}
            />
          </div>
          <div>
            <h2 className="font-bold text-[25px]">
              Our PPC Advertising Agency
            </h2>

            <p className=" my-5">
              Every business wants to flourish their brands or company with the
              best PPC management services in India. Here at Mahira Digitals, we
              prioritise the customers’ needs and serve them with the best
              service at affordable rates. What makes us the Best PPC
              Advertising Company in India is that the people who experienced
              and loved our PPC Campaign Management and other business-related
              services.
            </p>

            <p className=" my-5">
              Our PPC Advertising Agency comprises the best and efficient group
              members and provides the best marketing or branding mechanism
              through Pay-Per-Click services. Our PPC Advertising Agency team is
              trained to generate the best results for your company and help you
              meet your professional goals of generating maximum sales. We set a
              platform for you to popularise your business, utilising an
              efficient advertising mechanism. We use proper keywords and
              advertisement to engage traffic quickly.
            </p>
          </div>
        </div>

        {/* service cards */}
        <div className="my-5">
          <h1 className="text-[30px] text-center font-bold">
            Our PPC advertising services
          </h1>
          <p className="text-center mb-10">
            Get More Traffic, More Leads and More Sales with Our PPC Services
          </p>

          <div className="grid md:grid-cols-3 gap-y-20 gap-x-10 grid-cold-1">
            {ppcService?.map((item , i) => (
              <div className="col-span-1 border-r-2 border-gray-200 pr-2 "  key={i}>
                <ServiceCards data = {item} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
