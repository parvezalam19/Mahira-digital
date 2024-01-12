import React from "react";

export const FAQ = ({data}) => {
  return (
    <div className="px-[6%] faq">
      <h1 className="text-center text-[30px] font-bold mb-5">
        Frequently Asked Questions about Digital Marketing
      </h1>
      <ul
        class=" mx-auto  space-y-2 divide-y  shadow shadow-blue-600 rounded-xl"
        style={{ listStyleType: "none" }}
      >
        {data?.map((elm, i) => (
          <li key={i}>
            <details class="group">
              <summary class="flex items-center gap-3 px-4 py-3 font-medium marker:content-none hover:cursor-pointer">
                <svg
                  class="w-5 h-5 text-gray-500 transition group-open:rotate-90"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                  ></path>
                </svg>
                <span>{elm?.q}</span>
              </summary>

              <article class="px-4 pb-4">
                <p>{elm?.v}</p>
              </article>
            </details>
          </li>
        ))}
      </ul>
    </div>
  );
};
