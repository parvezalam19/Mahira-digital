"use client";
import React, { useEffect, useState } from "react";
import CountUp from "react-countup";

const WebProgress = () => {
  const [showCounter, setShowCounter] = useState(false);

  useEffect(() => {
    setShowCounter(true);
  }, []);


  return (
      <div className="mt-20" >
        <div class="app__container">
          <div className="my-10 md:px-[6%]">
            <dl class="grid grid-cols-1 gap-x-8 gap-y-16 text-center md:grid-cols-2 lg:grid-cols-4">
              <div class="single-counter-two mx-auto  shadow_1   flex w-full flex-col gap-y-4 py-5 px-5">
                <div class="flex justify-center items-center text-[#ff6a00]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                    class="h-12 w-12 "
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5"
                    ></path>
                  </svg>
                </div>
                <dd class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                  {showCounter && (
                    <CountUp start={0} end={1000} delay={0}>
                      {({ countUpRef }) => (
                        <div>
                          <span ref={countUpRef} />+
                        </div>
                      )}
                    </CountUp>
                  )}
                </dd>
                <dt class="text-base leading-7 app__text">Web Development</dt>
              </div>
              <div class="single-counter-two mx-auto   shadow_1  flex w-full flex-col gap-y-4 py-5 px-5">
                <div class="flex justify-center items-center text-[#ff6a00]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                    class="h-12 w-12 "
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z"
                    ></path>
                  </svg>
                </div>
                <dd class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                {showCounter && (
                    <CountUp start={0} end={3000} delay={0}>
                      {({ countUpRef }) => (
                        <div>
                          <span ref={countUpRef} />+
                        </div>
                      )}
                    </CountUp>
                  )}                </dd>
                <dt class="text-base leading-7 app__text">
                  Digital Marketing for a Brand
                </dt>
              </div>
              <div class="single-counter-two mx-auto  shadow_1   flex w-full flex-col gap-y-4 py-5 px-5">
                <div class="flex justify-center items-center text-[#ff6a00]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                    class="h-12 w-12 "
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M15.042 21.672L13.684 16.6m0 0l-2.51 2.225.569-9.47 5.227 7.917-3.286-.672zm-7.518-.267A8.25 8.25 0 1120.25 10.5M8.288 14.212A5.25 5.25 0 1117.25 10.5"
                    ></path>
                  </svg>
                </div>
                <dd class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                {showCounter && (
                    <CountUp start={0} end={100} delay={0}>
                      {({ countUpRef }) => (
                        <div>
                          <span ref={countUpRef} />+
                        </div>
                      )}
                    </CountUp>
                  )}                </dd>
                <dt class="text-base leading-7 app__text">
                  PPC campaign maintained
                </dt>
              </div>
              <div class="single-counter-two mx-auto  shadow_1   flex w-full flex-col gap-y-4 py-5 px-5">
                <div class="flex justify-center items-center text-[#ff6a00]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                    class="h-12 w-12 "
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-3 2.148 2.148A12.061 12.061 0 0116.5 7.605"
                    ></path>
                  </svg>
                </div>
                <dd class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                {showCounter && (
                    <CountUp start={0} end={100} delay={0}>
                      {({ countUpRef }) => (
                        <div>
                          <span ref={countUpRef} />+
                        </div>
                      )}
                    </CountUp>
                  )}                </dd>
                <dt class="text-base leading-7 app__text">
                  SEO Optimized Website
                </dt>
              </div>
            </dl>
          </div>
        </div>
      </div>
  );
};

export default WebProgress;
