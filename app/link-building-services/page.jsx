import CallUsBanner from "@/components/custom/CallUsBanner";
import ServiceForm from "@/components/custom/ServiceForm";
import Image from "next/image";
import React from "react";

const Page = () => {
  return (
    <>
      <div className="px-[8%] my-10">
        <div className="grid md:grid-cols-2">
          <div>
            <h1 className="text-[25px] font-bold">Link building services</h1>

            <Image
              src={"/assets/services/Link-building-services.png"}
              width={1200}
              height={400}
              className="w-full h-[200px]	 "
            />
            <p className="mt-5">
              Every business desires for high search engine ranking to capture
              more audience. Here a perfect blend of quality backlinks is the
              magic spell to elevate a website ranking on search engines. If you
              are also wondering about having your hands on the best
              link-building services, Mahira Digitals can be your ideal
              companion.
            </p>
          </div>
          <ServiceForm />
        </div>

        <p className="mt-5">
          With one result-oriented approach and cutting-edge backlink building
          strategies, we help websites crawl up in the search engine results
          list. At Mahira Digitals, we formulate the most premium, ethical and
          white hat techniques to reach out to new audiences. Our highly
          advanced link quality backlink building services help brands promote
          their products or services to a large audience base most effortlessly.
          We primarily target reputed websites and influencers relevant to
          customer’s businesses and create customized campaigns to yield
          valuable outputs. Our efficiently crafted link creation techniques
          give the website long-term domain value and help it rank higher in
          search results.
        </p>

        <h1 className="text-[25px] font-bold mt-10 mb-5">
          Benefits of Efficient Backlink Strategies of Mahira Digital
        </h1>

        <strong>
          Quality Backlinks brings a bag full of perks to business. Here are the
          most eye-catchy benefits of link building strategies –
        </strong>

        <p>
          It helps websites to get an incredible boost in search engine ranking,
          thereby reaching out to more audiences, ultimately generating leads
          and promoting sales.
          <br />
          <br />
          It polishes a website’s overall SEO performance and elevates its
          visibility.
          <br />
          At Mahira Digitals, we tailor the most impactful and customized
          link-building services to achieve favorable results for businesses.
          <br />
          <br />
          Our white hat and quality backlink building services boost the SERP
          that elevates the website traffic and conversion rates, ultimately
          generating good revenue for businesses.
          <br />
          <br />
          Mahira Digital being one of India’s leading digital marketing
          companies, presents a team of seasoned professionals who hold
          expertise in link building. Our team is highly versatile, dynamic, and
          ever ready to adopt new trends and technology to craft the best
          services. At Mahira Digitals, its dedicated team collaborates with
          clients to plan and create the best link-building campaigns that
          actually yield results.
        </p>

        <div>
          <div class=" px-4 py-8">
            <h1 class="text-3xl font-bold mb-6">
              Our Services - Link Building
            </h1>

            <div class="space-y-5 space-x-5 grid md:grid-cols-2">
              <div class="bg-white rounded-lg overflow-hidden shadow-md p-6">
                <h2 class="text-xl font-semibold mb-3">Backlink Research</h2>
                <p class="text-gray-600">
                  Mahira Digitals works to offer you the ultimate link
                  portfolio. It monitors and analyzes the sites linking to your
                  website to squeeze out the most reputed ones. After a thorough
                  procedure of research, we bring you the most premium quality
                  backlinks that help you connect to your target audience. Our
                  team utilizes its knowledge and technology-based backlink
                  research tools to monitor the competitor links and unlock
                  their secret formula of growth.
                </p>
              </div>

              <div class="bg-white rounded-lg overflow-hidden shadow-md p-6">
                <h2 class="text-xl font-semibold mb-3">Backlink Strategy</h2>
                <p class="text-gray-600">
                  The whole game of digital marketing stands on the roots of the
                  right strategies and their implementation to blend out
                  beneficial results. Backed with competitive link research
                  techniques and adequate data, our team of expert tailor the
                  most effective link building strategies to elevate your domain
                  authority. Domain authority and quality content are the
                  success mantras of a website. Therefore, Mahira Digitals
                  efficiently capitalize on its team to build an incredible
                  backlink portfolio employing digital PR, blogging, content
                  analysis, and blogger outreach.
                </p>
              </div>

              <div class="bg-white rounded-lg overflow-hidden shadow-md p-6">
                <h2 class="text-xl font-semibold mb-3">Backlink Prospecting</h2>
                <p class="text-gray-600">
                  We collaborate with clients to understand their business
                  vision and their target audience. Then we prepare an in-depth
                  report based on data and analysis to help brands craft
                  relevant content for backlink efficiency. In our quality
                  backlink building services, we understand and analyze
                  competitors to create domain targets. This helps us to
                  identify the relevant backlink opportunities for websites and
                  allows us to get 100% results for the clients.
                </p>
              </div>

              <div class="bg-white rounded-lg overflow-hidden shadow-md p-6">
                <h2 class="text-xl font-semibold mb-3">
                  Why choose Mahira Digitals for link building services?
                </h2>
                <p class="text-gray-600">
                  When it comes to trust and reliable digital marketing
                  services, the first name that strikes clients is Mahira
                  Digitals. Our team of experts offers customers the most
                  reliable white-hat quality backlink building services. After
                  gathering years of experience and knowledge in the field, our
                  team is here to serve clients all around the globe with
                  services that you can trust. It ensures that businesses get
                  100% results with a perfect blend of quality links that are
                  relevant to the website content or niche. We analyze your
                  complete link portfolio, and with the most effective tools, we
                  ensure you don’t get any duplicate or spammy links. Our
                  strategies are highly customizable and easy to implement to
                  get mind-boggling results.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <CallUsBanner />
    </>
  );
};

export default Page;
