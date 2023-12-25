import React from "react";

const ServiceForm = () => {
  return (
    <>
      <div class="mx-auto  rounded-[10px] border-2 border-gray-200 bg-white dark:bg-dark-2 py-10 px-6 sm:px-10">
        <h1 className="text-center font-bold  text-[30px]">
          Get A Free Website Audit
        </h1>
        <p className="text-[14px] text-center ">
          Want To Drive More Organic Traffic And Leads? Call Us Now Explore the
          Hidden Potential Of Your Website.
        </p>
        <form>
          <div class="flex flex-wrap -mx-2">
            <div class="w-full px-2 sm:w-1/2">
              <div class="">
                <label
                  for="name"
                  class="block mb-2 text-base font-medium text-dark dark:text-white"
                >
                  Full Name
                </label>
                <input
                  placeholder="Name"
                  type="text"
                  name="name"
                  class="w-full px-5 py-2.5 text-base font-medium bg-transparent border rounded-md outline-none border-stroke dark:border-dark-3 text-body-color dark:text-dark-6 focus:border-primary"
                />
              </div>
            </div>
            <div class="w-full px-2 sm:w-1/2">
              <div class="">
                <label
                  for="email"
                  class="block mb-2 text-base font-medium text-dark dark:text-white"
                >
                  Email address
                </label>
                <input
                  type="email"
                  placeholder="Email"
                  name="email"
                  class="w-full px-5 py-2.5 text-base font-medium bg-transparent border rounded-md outline-none border-stroke dark:border-dark-3 text-body-color dark:text-dark-6 focus:border-primary"
                  fdprocessedid="ek0f1ro"
                />
              </div>
            </div>
            <div class="w-full px-2">
              <div class="">
                <label
                  for="password"
                  class="block mb-2 text-base font-medium text-dark dark:text-white"
                >
                  Password
                </label>
                <input
                  placeholder="Phone"
                  type="number"
                  name="password"
                  class="w-full px-5 py-2.5 text-base font-medium bg-transparent border rounded-md outline-none border-stroke dark:border-dark-3 text-body-color dark:text-dark-6 focus:border-primary"
                />
              </div>
            </div>
            <div class="w-full px-2 mt-10  ">
              <button class="flex items-center justify-center w-full px-3 py-3 bg-[#ff4800] text-sm font-medium text-white rounded-md bg-primary hover:bg-blue-dark">
                Send
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default ServiceForm;
