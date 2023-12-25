import CircleCards from "@/components/custom/CircleCards";
import Image from "next/image";
import React from "react";
import CmsSection from "./CmsSection";
import ServiceForm from "@/components/custom/ServiceForm";
import ContactBanner from "@/components/Home/ContactBanner";
import ClientSlider from "@/components/sliders/ClientSlider";

const Page = () => {
  const seoData = [
    {
      img1: "/assets/services/seo-icon.png",
      img2: "/assets/services/seo-icon-hover.png",
      t1: "Ecommerce Website",
      t2: " Ecommerce Website",
    },
    {
      img1: "/assets/services/ranking.png",
      img2: "/assets/services/ranking-hover.png",
      t1: "Custom Web Design",
      t2: "Custom Web Design",
    },
    {
      img1: "/assets/services/traffic.png",
      img2: "/assets/services/traffic-hover.png",
      t1: "Mobile Responsive Web Design",
      t2: " Mobile Responsive Web Design",
    },

    {
      img1: "/assets/services/traffic.png",
      img2: "/assets/services/traffic-hover.png",
      t1: "Website Maintenance",
      t2: " Website Maintenance",
    },
  ];

  return (
    <div>
      <div>
        <Image
          className="w-full  h-[400px] "
          width={1200}
          height={600}
          src={"/assets/services/web-bn.jpg"}
        />
      </div>
      {/* form banner */}

      <div className="w-full  gap-x-5 my-5 grid md:grid-cols-2 grid-cols-1 md:px-[8%]   ">
        <div className="border-2 border-gray-200 rounded-lg">
          <Image
            width={600}
            height={400}
            className="w-full h-[400px]  rounded-lg "
            src={"/assets/services/web-banner.png"}
          />
        </div>
        <div>
          <ServiceForm />
        </div>
      </div>

      <div className="my-10 px-[8%]">
        <h1 className="text-[30px] text-center font-bold">
          <span className="text-[#ff4800]">For only Rs 3500/-,</span> <br />{" "}
          We’ll design a stunning business website for your business.
        </h1>
        <p className="text-center">
          Mahira Digital offers professional web design services that are
          tailored to your specific needs. <br /> Contact us today to start
          building your online presence.
        </p>
        <div>
          <CircleCards data={seoData} />
        </div>

        {/* main content */}

        <div>
          <h1 className="text-[30px] text-center font-bold leading-9">
            <span className="font-normal">
              {" "}
              Take Your Business Success on Another Level
            </span>{" "}
            <br /> with Our Affordable Website Designing Services
          </h1>
          <p className="text-center my-4">
            Mahira Digital is a premier provider of website design services.
            With our expertise in creating visually stunning and user-friendly
            websites, we empower brands and businesses across diverse industries
            to establish a compelling online presence.
          </p>
          <p>
            Mahira Digital is a leading website designing company working with
            the mission “go digital with Mahira Digital” with over experience 5
            years & a strong workforce of 25+ professionals. Don’t let your
            business get left behind in the digital landscape. 75% of web users
            judge a company’s credibility based on its website design. We will
            make sure that your website design stands apart from competitors.{" "}
            <br />
            <br />
            Create a fluid and mobile-first website with UX-based design,
            development, and engaging content with the best website design and
            development company. We are a trusted website design and development
            agency in India offering custom website solutions to help you
            connect effectively with your target audience, strengthen your brand
            and generate leads.
          </p>

          <div className="grid md:grid-cols-2 grid-cols-1 mt-10 md:gap-x-10">
            <div>
              <Image
                width={700}
                height={400}
                className="h-full"
                src={"/assets/services/web-bg1.webp"}
              />
            </div>

            <div>
              <h1 className="font-bold text-[20px]">
                We use the following methodology to design websites.{" "}
              </h1>
              <div className="flex  gap-x-10">
                <ul className="space-y-3 mt-3">
                  <li>User-Centric Design</li>
                  <li>Information Architecture</li>

                  <li>Wireframing and Prototyping</li>

                  <li>Visual Design</li>

                  <li>Responsive Design</li>
                </ul>
                <ul className="space-y-3 mt-3">
                  <li>Development and Coding</li>
                  <li>Content Creation and Integration</li>
                  <li>
                    is optimised for search engines. We promise to give you
                  </li>
                  <li>Testing and Quality Assurance</li>
                  <li>Launch and Deployment</li>
                  <li>Continuous Improvement</li>
                </ul>
              </div>

              <p className="my-5">
                Depending on the project requirements and target audience, we
                combine and adapt these approaches.
              </p>
            </div>
          </div>
        </div>
      </div>

      <CmsSection />
      <div className="px-5  md:px-10">
        <ClientSlider />
      </div>
      <ContactBanner />

    </div>
  );
};

export default Page;
