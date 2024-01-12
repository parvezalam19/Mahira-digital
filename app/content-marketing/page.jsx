import ServiceForm from "@/components/custom/ServiceForm";
import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <div className=" md:px-[6%]">
      <div className="grid grid-cols-3 gap-x-5 mt-5  ">
        <div className="col-span-2">
          <Image
            width={1222}
            height={600}
            className="w-full object-contain h-[400px]"
            src={"/assets/services/content.jpg"}
          />

          <h1 className="text-[25px]  font-bold  ">
            Content Marketing Services
          </h1>
          <p>
            For years, paid marketing has been the ultimate tool for businesses
            to convert traffic into customers. However, with the growing age of
            the Internet, paid advertising is slowly losing its potential to
            promote sales. In today’s date, clients consume a lot of content
            online. However, the type of content that adds value to their
            browsing experience attracts them. Here, effective content marketing
            services turn out to be the trump card for businesses.
            <br /> <br />
            However, many small and medium-sized businesses, due to the lack of
            resources or time, fail to create the best content marketing
            strategies, which push them back into the competitive market. Here
            hiring a good content marketing agency in India like Mahira Digitals
            can help these businesses get a higher ROI.
          </p>
        </div>
        <div className="col-span-1">
          <ServiceForm />
        </div>
      </div>
      <div className="my-10">
        <h1 className="text-[25px]  font-bold  ">
          Why Do Businesses Need Content Marketing Mechanisms?
        </h1>
        <p>
          Today, a successful business is all about how much value it provides
          to the customers. Rather than simply pitching a product or service to
          a potential customer, the art of manifesting to turn them into
          faithful customers is the key. Here content marketing steps in as the
          game-changer for all businesses. It’s the most effective and
          cost-effective investment for a brand to reach out to customers.
          Relevant content that attracts your audience elevates your scopes to
          generate more traffic to your site. Thereby, increasing the conversion
          rates. Irrespective of your business size, pushing out catchy content
          can help you drag in customers. Content helps your customers to
          analyze your brand and know your values. <br /> <br />
          However, understanding the needs of your customer and tailoring the
          content to meet their demands is often painful for brands. It’s pretty
          time-consuming and hectic. So, here reaching out to a top content
          marketing agency in India like Mahira Digitals can help you get the
          best content for your business at extremely affordable pricing. Mahira
          Digitals is one of the big names in the world of digital marketing,
          and with years of expertise in content marketing, it has shown
          effective results in attracting clients.
        </p>

        <h1 className="text-[25px] mt-5 font-bold  ">
          Our Content Marketing Services
        </h1>

        <p>
          If you are struggling with your content marketing strategies,
          outsourcing your work to experts who can manage the tactics, help you
          formulate strategies easily, and connect your brand to potential
          customers, is essential. So, here you can choose an experienced
          content marketing services provider like Mahira Digitals to develop
          and manage your content marketing campaigns.
          <br /> <br />
          At Mahira Digitals, we present an exclusive team of top-notch content
          marketing professionals. Our team is efficiently trained to tailor and
          manage attention-grabbing content that actually promotes sales. After
          keen research and analysis, we create target content for your site or
          brand to help you quickly move the prospects through your funnel. Our
          services can help you grab higher returns on minimal investments. Our
          team has offered proven results to thousands of clients we worked for.
        </p>

        <div class=" mx-auto px-4 py-8">
          <h1 class="text-3xl font-bold mb-6">
            Here are our content marketing services
          </h1>

          <div class="space-y-8 gap-x-5 grid md:grid-cols-2">
            <div class="bg-white rounded-lg overflow-hidden shadow-md p-6">
              <h2 class="text-xl font-semibold mb-3">Blog Content Creation</h2>
              <p class="text-gray-600">
                Blogs and articles are highly consumed pieces of content. Our
                dedicated team frames the best blogs and articles for brands,
                generating top-notch quality content that attracts visitors.
              </p>
            </div>

            <div class="bg-white rounded-lg overflow-hidden shadow-md p-6">
              <h2 class="text-xl font-semibold mb-3">
                Infographics and Asset Design
              </h2>
              <p class="text-gray-600">
                Visuals add professionalism to content. We ensure your content
                is profitable, expertly crafting infographics and visual effects
                to engage users.
              </p>
            </div>

            <div class="bg-white rounded-lg overflow-hidden shadow-md p-6">
              <h2 class="text-xl font-semibold mb-3">
                eBooks and White Papers
              </h2>
              <p class="text-gray-600">
                Engaging content educates users and builds trust. We create
                content that not only educates but also builds relationships
                between brands and customers.
              </p>
            </div>

            <div class="bg-white rounded-lg overflow-hidden shadow-md p-6">
              <h2 class="text-xl font-semibold mb-3">Video Production</h2>
              <p class="text-gray-600">
                Video content is highly consumed. Our top video editor innovates
                animations, motion graphics, and more to attract more traffic.
              </p>
            </div>

            <div class="bg-white rounded-lg overflow-hidden shadow-md p-6">
              <h2 class="text-xl font-semibold mb-3">Newsletter & Emails</h2>
              <p class="text-gray-600">
                Regular newsletters and emails keep prospects updated. We
                analyze, plan, and create content that converts leads.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
