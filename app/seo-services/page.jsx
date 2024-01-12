import React from "react";
import Image from "next/image";
import Link from "next/link";
import ContactBanner from "@/components/Home/ContactBanner";
import ClientLogo from "@/components/Home/ClientLogo";
import ClientSlider from "@/components/sliders/ClientSlider";
import TestimonialSlider from "@/components/Home/TestimonialSlider";
import CircleCards from "@/components/custom/CircleCards";
import ServiceForm from "@/components/custom/ServiceForm";

const page = () => {
  const seoData = [
    {
      img1: "/assets/services/seo-icon.png",
      img2: "/assets/services/seo-icon-hover.png",
      t1: "SEO",
      t2: " Robust SEO Strategies",
    },
    {
      img1: "/assets/services/ranking.png",
      img2: "/assets/services/ranking-hover.png",
      t1: "Improved Ranking",
      t2: "Improved ranking",
    },
    {
      img1: "/assets/services/traffic.png",
      img2: "/assets/services/traffic-hover.png",
      t1: "Relevant Traffic",
      t2: " Relevant Traffic",
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
      t1: "Increased ROI",
      t2: " Increased ROI",
    },
  ];

  const seoWorks = [
    {
      head: " Website Audit",
      desc: "Before starting with our best SEO services for organic results, it is extremely important for all businesses to allow us to do website auditing.",
    },

    {
      head: "Keyword Research and Analysis",
      desc: "Our meticulous keywords research and analysis are at the heart of our services.  ",
    },
    {
      head: " Link Building",
      desc: " It is one of the most effective and important ways to positively impact your website’s online performance.",
    },

    {
      head: "Keyword and URL Optimization",
      desc: "We help you optimize keywords and URLs of your website to ensure that search engines find it while using keywords relevant to your services.",
    },
    {
      head: "SEO Content Creation",
      desc: "Readability of the content plays a vital role in SEO. We create and optimize content to make your website more readable ensuring that every visitor stays longer",
    },
    {
      head: "Reporting and Analysis",
      desc: "We know the importance of data. Hence, we provide our clients with regular monthly reports on analytics, visibility, conversions, and revenues.",
    },
  ];

  return (
    <>
      <div>
        <div>
          <Image
            className="w-full h-[400]"
            width={1000}
            height={400}
            src={"/assets/services/seo-banner.jpg"}
          />
        </div>

        <div className="md:px-[100px]  ">
          <div className="grid md:grid-cols-2 grid-cols-1 gap-x-5 my-10">
            <div className="col-span-1">
              <h1 className="text-[30px]">Best SEO Agency in Delhi NCR</h1>

              <p>
                Drive Growth through a Custom SEO Strategy
                <br />
                <br />
                Digital Markitors is a reputable marketing and best SEO Company
                based in Delhi providing a complete range of search engine
                optimisation solutions to domestic and global businesses. We’ll
                help you get outstanding results and generate more customers on
                the search engines like Google, Bing, Yahoo, Baidu, etc.
                <br /> <br />
                We have emerged as the leading SEO Agency in Delhi NCR over the
                past 7 years consistently. Businesses focused on improving their
                online presence choose Digital Markitors as their Organic and
                Paid marketing specialist. We have become strong SEO, SMM and
                PPC partners for startups, medium size businesses and brands in
                India and globally.
              </p>
            </div>
            <div className="col-span-1">
             
              <ServiceForm/>
            </div>
          </div>
        </div>

        <div className="my-5 relative">
          <Image
            width={1000}
            height={500}
            className="w-full h-[300px]   "
            src="/assets/services/seo.png"
          />
          <p className="absolute top-[20%] px-[5%] w-[700px] z-10 text-white font-bold text-[30px]">
            WE’RE NOT JUST A SEO SERVICE PROVIDER – WE’RE YOUR DIGITAL PARTNER
            IN PERFORMANCE
          </p>
        </div>

        <div className="md:px-[100px] my-5  ">
          <h1 className="text-center  font-bold text-[30px] ">
            We, as a leading <span className="text-[#ff4800]">SEO Agency</span>{" "}
            in Delhi, <br />
            offer ROI-focused{" "}
            <span className="text-[#ff4800]">SEO Services</span> .
          </h1>
          <p className="text-center">
            Whether you’re looking to rank your website on Google’s list or
            enhance your brand recognition, our SEO Company in Delhi can help
            you reach a greater targeted audience.
          </p>
          <div className="grid md:grid-cols-3 grid-cols-1">
            <div className="col-span-1">
              <Link
                href="#"
                className=" service_card border-2 border-gray-200 flex md:w-[350px] h-auto my-3 md:my-10 flex-col p-5 rounded-md bg-white "
              >
                <div className="w-[75px] h-[75px] ">
                  <Image
                    alt="seo"
                    width={75}
                    height={75}
                    className="w-[75px] h-[75px] bg-[#ff480] rounded-md"
                    src={"/assets/home/service/seo.png"}
                  />
                </div>
                <h2 className="md:text-[20px]   text-[18px] my-4 font-semibold">
                  <a href="#">Local SEO Service</a>
                </h2>
                <p className="text-[14px]">
                  Off-page SEO strategies, when executed by a top SEO Agency in
                  Delhi or SEO Company in Delhi, cannot function properly
                  without local SEO at their core. Like how backlinks work,
                  Google and other search engines use information about your
                  company (like your address, phone number, and website URL) to
                  validate the data it returns in local searches. This data must
                  be current, accurate, and consistent throughout your business
                  listings.
                </p>
              </Link>
            </div>
            <div className="col-span-1">
              <Link
                href="#"
                className=" service_card border-2 border-gray-200 flex md:w-[350px] h-auto my-3 md:my-10 flex-col p-5 rounded-md bg-white "
              >
                <div className="w-[75px] h-[75px] ">
                  <Image
                    alt="seo"
                    width={75}
                    height={75}
                    className="w-[75px] h-[75px] bg-[#ff480] rounded-md"
                    src={"/assets/home/service/seo.png"}
                  />
                </div>
                <h2 className="md:text-[20px]   text-[18px] my-4 font-semibold">
                  <a href="#">National SEO Service</a>
                </h2>
                <p className="text-[14px]">
                  An investment in a National SEO campaign with a trusted SEO
                  Agency in Delhi or an SEO Company in Delhi can help potential
                  customers find your company. The campaign is designed to
                  establish a national search presence, bringing relevant
                  commercial traffic to your website. By reviewing your current
                  website and online marketing plan and making enhancements or
                  “optimizations” in three important areas.
                </p>
              </Link>
            </div>
            <div className="col-span-1">
              <Link
                href="#"
                className=" service_card border-2 border-gray-200 flex md:w-[350px] h-auto my-3 md:my-10 flex-col p-5 rounded-md bg-white "
              >
                <div className="w-[75px] h-[75px] ">
                  <Image
                    alt="seo"
                    width={75}
                    height={75}
                    className="w-[75px] h-[75px] bg-[#ff480] rounded-md"
                    src={"/assets/home/service/seo.png"}
                  />
                </div>
                <h2 className="md:text-[20px]   text-[18px] my-4 font-semibold">
                  <a href="#">Global SEO</a>
                </h2>
                <p className="text-[14px]">
                  When dealing with customers worldwide, it’s crucial to ensure
                  visibility in their preferred search engines. For instance, if
                  you aim to connect with Chinese customers who favor the Baidu
                  search engine over Google, our SEO Agency in Delhi has the
                  expertise you need. Our experienced team of professionals at
                  our SEO Company in Delhi can collaborate with you to develop a
                  tailored strategy to establish a strong presence in this
                  market.
                </p>
              </Link>
            </div>
            <div className="col-span-1">
              <Link
                href="#"
                className=" service_card border-2 border-gray-200 flex md:w-[350px] h-auto my-3 md:my-10 flex-col p-5 rounded-md bg-white "
              >
                <div className="w-[75px] h-[75px] ">
                  <Image
                    alt="seo"
                    width={75}
                    height={75}
                    className="w-[75px] h-[75px] bg-[#ff480] rounded-md"
                    src={"/assets/home/service/seo.png"}
                  />
                </div>
                <h2 className="md:text-[20px]   text-[18px] my-4 font-semibold">
                  <a href="#">Off-Page SEO Services</a>
                </h2>
                <p className="text-[14px]">
                  Off-page SEO is crucial for boosting your online presence and
                  rankings, especially when you’re seeking an SEO Agency in
                  Delhi or an SEO Company in Delhi. Our dedicated SEO team takes
                  care of every facet of off-page SEO, ensuring that your
                  website gains the recognition it deserves. Our comprehensive
                  approach includes conducting thorough SEO audits, constantly
                  improving your backlink profile, harnessing the power of local
                  SEO strategies.
                </p>
              </Link>
            </div>
            <div className="col-span-1">
              <Link
                href="#"
                className=" service_card border-2 border-gray-200 flex md:w-[350px] h-auto my-3 md:my-10 flex-col p-5 rounded-md bg-white "
              >
                <div className="w-[75px] h-[75px] ">
                  <Image
                    alt="seo"
                    width={75}
                    height={75}
                    className="w-[75px] h-[75px] bg-[#ff480] rounded-md"
                    src={"/assets/home/service/seo.png"}
                  />
                </div>
                <h2 className="md:text-[20px]   text-[18px] my-4 font-semibold">
                  <a href="#">Technical SEO Service</a>
                </h2>
                <p className="text-[14px]">
                  In the realm of technical SEO, numerous intricate elements
                  come into play. Monitoring the myriad on-page factors that
                  influence your website’s ranking can indeed be daunting. When
                  searching for an SEO Agency in Delhi or an SEO Company in
                  Delhi, rest assured that our proficient SEO specialists are
                  here to take on this challenge. They will diligently enhance
                  various facets of your website, such as reducing loading
                  times, rectifying broken links.
                </p>
              </Link>
            </div>
            <div className="col-span-1">
              <Link
                href="#"
                className=" service_card border-2 border-gray-200 flex md:w-[350px] h-auto my-3 md:my-10 flex-col p-5 rounded-md bg-white "
              >
                <div className="w-[75px] h-[75px] ">
                  <Image
                    alt="seo"
                    width={75}
                    height={75}
                    className="w-[75px] h-[75px] bg-[#ff480] rounded-md"
                    src={"/assets/home/service/seo.png"}
                  />
                </div>
                <h2 className="md:text-[20px]   text-[18px] my-4 font-semibold">
                  <a href="#">Enterprise SEO</a>
                </h2>
                <p className="text-[14px]">
                  Enterprise SEO is tailored for prominent businesses with
                  expansive websites, typically exceeding a thousand pages. It
                  demands a strategic approach that combines a big-picture
                  perspective with tactical execution to boost visibility,
                  revenue, and traffic. At our SEO Agency in Delhi, or SEO
                  Company in Delhi, we specialize in assisting large enterprises
                  in harnessing the potential of their corporate structure to
                  excel in the digital landscape.
                </p>
              </Link>
            </div>
          </div>
        </div>

        <div className="px-[8%] my-5">
          <h1 className="text-[30px] text-center font-bold">
            How Can We Help You Grow Your Business through SEO?
          </h1>

          <p className="text-center">
            Just remember! Result-driven SEO does not just happen! It requires
            so many things including long-term commitment and robust strategies.
            But when you join your hands with Digital Markitors – a top SEO
            company in Delhi-NCR, you can expect stable and better results.
            <br /> <br />
            Countless service providers are there charging a hefty amount but
            why pay even a single penny when the traffic is not relevant!! Our
            search engine optimisation services, on the other hand, are not just
            focused on keywords and helping people find you online but driving
            relevant traffic to your website. JUST THINK and decide what you
            want!
          </p>

          <CircleCards data={seoData} />

          {/* expert section */}
          <div>
            <h1 className="text-[30px] text-center font-bold">
              Advantages of Using{" "}
              <span className="text-[#ff4800]">
                SEO Services Company in Delhi
              </span>
            </h1>

            <p className="text-center my-3">
              Unlike other SEO companies in Delhi that often make empty promises
              and excuses as deadlines approach, we are not one of them. At our
              SEO Agency in Delhi, we take pride in our commitment to doing what
              we say we’ll do.
            </p>

            <div className="grid md:grid-cols-2 grid-cols-1 my-5 md:gap-x-10">
              <div>
                <Image
                  width={700}
                  height={400}
                  className="h-full"
                  src={"/assets/services/onrepo1.jpg"}
                />
              </div>

              <div>
                <h1 className="font-bold text-[20px]">
                  Here are some of the good qualities of our services:
                </h1>

                <ul className="space-y-3 mt-3">
                  <li>We know how to find relevant keywords that are highly</li>
                  <li>
                    competitive and have much traffic. Get a detailed ranking
                  </li>

                  <li>
                    report so we can keep track of how we’re doing. Our SEO
                  </li>

                  <li>
                    experts create an SEO plan that is specific to what your
                  </li>

                  <li>
                    company does. We plan to get your website to the top of the
                  </li>
                  <li>
                    search results. Our SEO service gets more traffic to your
                  </li>
                  <li>
                    website. Our content writer ensures that your website’s text
                  </li>
                  <li>
                    is optimised for search engines. We promise to give you
                  </li>
                  <li>
                    amazing results in the time you give us. The marketing
                    funnel
                  </li>
                  <li>
                    is better because of our SEO service. With our SEO service,
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* our seo works */}

          <div className="my-10">
            <h2 className="text-[30px] text-center font-bold">
              Our <span className="text-[#ff4800]">SEO Work Includes</span>
            </h2>
            <p className="text-center my03">
              With a dedicated team of professionals, we ensure 360-degree
              solutions to our valuable clients through our bespoke,
              industry-focused, and cost-efficient SEO services. The following
              is included in our SEO work:
            </p>

            <div className="grid grid-cols-2 md:grid-cols-3 my-5 gap-y-4 gap-x-5">
              {seoWorks?.map((item, i) => (
                <div
                  key={i}
                  className="light_boxShadow hover:scale-[1.05] rounded-lg p-3 hover:bg-[#ff4800] hover:text-white p_white "
                >
                  <h3 className="text-center font-bold mb-3">{item?.head}</h3>

                  <p className="text-[14px] leading-5">{item?.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <ContactBanner />
      <div className="px-5  md:px-10">
        <ClientSlider />
      </div>

      <TestimonialSlider />
    </>
  );
};

export default page;
