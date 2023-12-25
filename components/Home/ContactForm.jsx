import React from "react";

const ContactForm = () => {
  return (
    <div class="grid md:grid-cols-2 items-center overflow-hidden shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] rounded-3xl max-w-6xl mx-auto bg-white my-6 font-[sans-serif]">
      <div class="sm:p-10 max-sm:px-4 max-sm:py-8 bg-gray-900">
        <h2 class="text-3xl font-extrabold text-white">
        Don't Hesitate To Get In <span class="text-yellow-500">Touch</span> With Us

        </h2>
        <p class="text-sm text-gray-400 mt-3">
        Allow us to work for you. To contact us, please fill out the form below.

        </p>
        <form>
          <div class="space-y-4 mt-8">
            <input
              type="text"
              placeholder="Full Name"
              class="px-2 py-3 bg-transparent text-white w-full text-sm border-b border-gray-400 focus:border-white outline-none"
            />
            {/* <input
              type="text"
              placeholder="Street"
              class="px-2 py-3 bg-transparent text-white w-full text-sm border-b border-gray-400 focus:border-white outline-none"
            /> */}
            <div class="grid grid-cols-2 gap-6">
              <input
                type="text"
                placeholder="Your Company's Location"
                class="px-2 py-3 bg-transparent text-white w-full text-sm border-b border-gray-400 focus:border-white outline-none"
              />

              <input
                type="text"
                placeholder="Your Company's Name"
                class="px-2 py-3 bg-transparent text-white w-full text-sm border-b border-gray-400 focus:border-white outline-none"
              />
            </div>
            <input
              type="number"
              placeholder="Phone No."
              class="px-2 py-3 bg-transparent text-white w-full text-sm border-b border-gray-400 focus:border-white outline-none"
            />

            <input
              type="email"
              placeholder="Email"
              class="px-2 py-3 bg-transparent text-white w-full text-sm border-b border-gray-400 focus:border-white outline-none"
            />

            <textarea
              placeholder="Your Query"
              class="px-2 pt-3 bg-transparent text-white w-full text-sm border-b border-gray-400 focus:border-white outline-none"
            ></textarea>
          </div>
          <button
            type="button"
            class="mt-8 flex items-center justify-center text-sm w-full rounded px-4 py-2.5 font-semibold bg-[#ff4800] text-white hover:bg-yellow-700"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16px"
              height="16px"
              fill="#fff"
              class="mr-2"
              viewBox="0 0 548.244 548.244"
            >
              <path
                fill-rule="evenodd"
                d="M392.19 156.054 211.268 281.667 22.032 218.58C8.823 214.168-.076 201.775 0 187.852c.077-13.923 9.078-26.24 22.338-30.498L506.15 1.549c11.5-3.697 24.123-.663 32.666 7.88 8.542 8.543 11.577 21.165 7.879 32.666L390.89 525.906c-4.258 13.26-16.575 22.261-30.498 22.338-13.923.076-26.316-8.823-30.728-22.032l-63.393-190.153z"
                clip-rule="evenodd"
                data-original="#000000"
              />
            </svg>
            Send Message
          </button>
        </form>
        <ul class="mt-4 flex justify-center lg:space-x-6 max-lg:flex-col max-lg:items-center max-lg:space-y-2 ">
          <li class="flex items-center text-white">
    
            <a href="#" class="text-current text-sm ml-3">
              <strong> info@mahiradigital.com</strong>
            </a>
          </li>
          <li class="flex items-center text-white">
       
            <a href="#" class="text-current text-sm ml-3">
              <strong>+91 9953962966</strong>
            </a>
          </li>
        </ul>
      </div>
      <div class="z-10 relative h-full max-md:min-h-[350px]">
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.020887501442!2d77.07804827469597!3d28.6291360756666!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce3c5a3b3ed73%3A0x8a3cea5422103199!2sMahira%20Digital%2C%20SEO%20Company%20in%20Delhi%20-%20Digital%20Marketing%20Agency%2C%20SEO%20Agency%20in%20Delhi%20NCR%2C%20SEO%20services%20in%20Delhi!5e0!3m2!1sen!2sin!4v1701071915182!5m2!1sen!2sin" className="w-full h-full"    loading="lazy" ></iframe>
      </div>
    </div>
  );
};

export default ContactForm;
