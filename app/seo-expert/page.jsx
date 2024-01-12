import ServiceForm from "@/components/custom/ServiceForm";
import Image from "next/image";
import React from "react";

const Page = () => {
  return (
    <div>
      <div>
        <Image
          width={1200}
          height={400}
          className="w-full h-[400px]"
          src="/assets/services/SEO-Expert.jpg"
        />
      </div>

      <div className="md:px-[6%]">
        <div className="grid md:grid-cols-3 gap-x-3 my-5">
          <div className="col-span-2">
            <h1 className="text-[25px] font-bold">SEO Experts in Delhi</h1>

            <p>
              Search Engine Optimization is the heart of the modern business.
              Without an efficient SEO mechanism, a business lacks the authority
              to interact with new customers. If you are a business owner in
              Delhi, hiring an SEO expert in Delhi can be the ideal investment
              to push your business to the heights of success.
              <br /> <br />
              Proper SEO strategies help businesses organize and maintain their
              website. It promotes organic search, which is the biggest driver
              of traffic in today’s date. SEO possesses an incredible strength
              to connect businesses with customers by ranking their websites on
              search engine results. A search engine optimization expert like
              Mahira Digitals analyses the needs of a business and formulate the
              best techniques to polish its organic reach.
            </p>
          </div>
          <div>
            <ServiceForm />
          </div>
        </div>

        <div className="">
          <h1 class="text-3xl font-bold mb-6">
            Why Do Your Business Need SEO Expert & SEO Strategies?
          </h1>

          <p>
            SEO strategies coming from an SEO expert in Delhi can be the magic
            wand of growth for your business. But is SEO over-hyped? Or do
            businesses mandatory invest in SEO? The answer is yes. In today’s
            online space, every business requires a highly efficient SEO
            mechanism. Good SEO practices not only elevate the rank of a website
            but also offer some more mind-boggling perks. Here are the most
            prominent reasons to hire a search engine optimization expert –
          </p>

          <section className="space-y-4">
            <div class="bg-white rounded-lg overflow-hidden shadow-md p-6">
              <h2 class="text-xl font-semibold mb-3">
                Why Is Mahira Digitals One Of The Reputed Search Engine
                Optimization Experts In Delhi?{" "}
              </h2>
              <p class="text-gray-600">
                In today’s market, there are a bunch of SEO agencies serving the
                customers with different packages. However, in the last few
                years, Mahira Digitals has turned out to be the game-changer for
                several clients. With years of experience in the industry and an
                efficient team of SEO experts, it has successfully grabbed the
                No. 1 position in the list of top SEO service providers. Here
                are some good reasons to quote Mahira Digitals as an SEO expert
                in Delhi –
              </p>
              <ul class="list-disc pl-6">
                <li>
                  With the effective SEO techniques of Mahira Digitals, hundreds
                  of websites are ranking on the first page of Google.
                </li>
                <li>
                  Its team of highly skilled members presents 100% ROI-focused
                  SEO solutions, which are designed as per the requirements and
                  size of the businesses.
                </li>
                <li>
                  As a Search Engine Optimization expert, it’s constantly
                  updating itself with the strongest and the most effective
                  strategies to bring a significant change in businesses.
                </li>
                <li>
                  Mahira Digital brings years of practical experience to
                  clients. Its team implements a blend of their knowledge,
                  skills, and experience to rank websites higher in search
                  engine results.
                </li>

                <li>
                  At Mahira Digitals, the dedicated team understands the core of
                  the client’s requirements, target audience and offers
                  efficient communication support to the customers.
                </li>

                <li>
                  Mahira Digitals has helped tons of brands to bring out
                  business from their target audience with the most competitive
                  keywords and other SEO tactics.
                </li>
              </ul>
            </div>
          </section>
        </div>
        <div class=" mx-auto px-4 py-8">
          <h1 class="text-3xl font-bold mb-6">Benefits of SEO</h1>

          <div class="space-y-6">
            <div class="bg-white rounded-lg p-6 shadow-md">
              <h2 class="text-xl font-semibold mb-3">Organic traffic</h2>
              <p class="text-gray-600">
                Over 50% of total traffic comes from organic searches.
                Customizing your website for users' needs and implementing SEO
                measures can significantly boost organic traffic.
              </p>
            </div>

            <div class="bg-white rounded-lg p-6 shadow-md">
              <h2 class="text-xl font-semibold mb-3">Long-term traffic</h2>
              <p class="text-gray-600">
                Quality SEO combined with compelling content helps retain and
                convert new customers, ensuring long-term traffic.
              </p>
            </div>

            <div class="bg-white rounded-lg p-6 shadow-md">
              <h2 class="text-xl font-semibold mb-3">Rank higher</h2>
              <p class="text-gray-600">
                Effective SEO techniques can propel a website to higher search
                engine results pages, attracting new audiences and improving
                visibility.
              </p>
            </div>

            <div class="bg-white rounded-lg p-6 shadow-md">
              <h2 class="text-xl font-semibold mb-3">
                Elevate brand recognition
              </h2>
              <p class="text-gray-600">
                Establishing brand value is crucial. Strong SEO practices can
                elevate your brand's visibility, attracting more customers and
                improving brand recognition.
              </p>
            </div>

            <div class="bg-white rounded-lg p-6 shadow-md">
              <h2 class="text-xl font-semibold mb-3">Higher conversion</h2>
              <p class="text-gray-600">
                SEO attracts more customers, leading to higher conversion rates.
                Implementing effective SEO strategies can significantly boost
                sales and profits for your business.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
