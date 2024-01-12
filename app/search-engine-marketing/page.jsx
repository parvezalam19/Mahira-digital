import ServiceForm from "@/components/custom/ServiceForm";
import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <div className=" md:px-[6%]">
      <div className="grid grid-cols-3 gap-x-5  ">
        <div className="col-span-2">
          <Image
            width={1222}
            height={600}
            className="w-full object-contain h-[400px]"
            src={"/assets/services/sem.jpg"}
          />

          <h1 className="text-[25px]  font-bold  ">Search engine marketing</h1>
          <p>
            Search engine marketing is a process to increase your online website
            presence with both ways organically or paid.
          </p>
        </div>
        <div className="col-span-1">
          <ServiceForm />
        </div>
      </div>
      <div className="my-10">
        <h1 className="text-[25px]  font-bold  ">
          How to search engine marketing works?
        </h1>
        <p>
          Search engine marketing is a process to increase your online website
          presence with both ways organically or paid. In SEM for organic
          ranking first we need to search and analyze the best keywords for the
          website and do competitor analysis. After that we are working on your
          website and redesign your website to look good, make it user-friendly,
          mobile responsive and Google friendly. If your website is not user
          friendly, Google-friendly, and mobile-friendly then you are not able
          to rank on Google’s first page. And nowadays all are receiving 80
          percent website traffic from mobile and tablet, it’s become very
          important that your website is mobile responsive.
        </p>

        <h1 className="text-[25px] mt-5 font-bold  ">
          Paid search engine marketing
        </h1>

        <p>
          SEM – If we want to run advertisements on search engines then we need
          to pay fees according to placements, impressions, clicks, and search
          terms. To run ads on search engines what we need to do for great
          performance? Read the below important activities list:
        </p>

        <ul className="text-gray-700 mt-5 space-y-2 ">
          <li>
            First, we should identify which kind of ad is able to fulfill your
            requirements like Search Network ad, Display Network ad, Video
            (YouTube) ad, Shopping ad, and Universal Apps ad, etc…
          </li>
          <li>
            The second thing is we need to identify the fruitful keyword which
            helps our ad to perform.
          </li>

          <li>
            If you want to run display or video ads then you need the most
            attractive creative for your ad. Creative in the sense image design,
            attractive texts, and videos. If your ad is not attractive then
            nobody will be going to click on your ad.
          </li>

          <li>
            Now you need to set the ad budget, it’s depending on your pocket how
            much your pocket allows you to spend on it.
          </li>
        </ul>

        <p className="mt-5">
          For more details you need to consult with the search engine marketing
          experts. If you want to run ads on search engines then you need to
          hire the search engine marketing agency.
          <br />
          Search engine optimization is also a part of search engine marketing,
          search engine optimization helps us to improve our client’s search
          engine rankings and generate organic website traffic and organic
          business.
        </p>

        <h1 className="text-[25px] mt-5 font-bold  ">
          How to improve search engine ranking?
        </h1>
        <p>
          At Mahira Digital, our team do some important research on the ground
          level and make a report; this report will help us to make strategies
          and plan a road map to grow website organic traffic and online
          presence or you can say improve your online visibility with the help
          of organic activities, like Site structure improvement, make your
          website mobile and user friendly, fix the errors which create hurdles
          and Off-page submissions, etc…
          <br /> <br />
          In Search engine marketing both paid and organic activities involved.
          For more information consult with our best search engine marketing
          experts.
        </p>
      </div>
    </div>
  );
};

export default page;
