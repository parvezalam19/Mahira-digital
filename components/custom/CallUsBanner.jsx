import React from "react";

const CallUsBanner = () => {
  return (
    <>
      <div class="relative isolate overflow-hidden bg-indigo-700 px-6 pt-16 shadow-2xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
    
        <div class="mx-auto max-w-full grid md:grid-cols-3 text-center lg:mx-0 lg:flex-auto py-10 lg:text-left">
            <div className="col-span-2">

          <h2 class="text-3xl font-bold tracking-tight text-white text-center sm:text-4xl">
            Digital Marketing SMO &amp; SEO Solution!
          </h2>
          <p class="mt-6 text-lg leading-8 text-gray-50 text-center">
            Our digital marketing solutions encompass both SMO (Social Media
            Optimization) and SEO (Search Engine Optimization) strategies,
            designed to maximize online visibility and engagement for
            businesses.
          </p>
            </div>
          <div class="mt-10 flex items-center justify-center gap-x-6 lg:justify-center">
            <a class="primary-btn shadow-lg" href="/contact">
              Connect With Us
            </a>
           
          </div>
        </div>
      </div>
    </>
  );
};

export default CallUsBanner;
