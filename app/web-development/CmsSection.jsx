import Image from "next/image";
import React from "react";

const CmsSection = () => {
  const cmsData = [
    {
      img: "/assets/services/wordpress.jpg",
      title: "WordPress",
      list: [" Powerful Plugins", "Attractive Themes", "SEO-Friendly"],
    },
    {
      img: "/assets/services/shopify.jpg",
      title: "Shopify",
      list: [
        "Responsive Themes",
        "Best for E-Commerce Websites",
        "SEO-Friendly",
      ],
    },
    {
      img: "/assets/services/nextjs-logo.webp",
      title: "Next.js",
      list: [
        "Responsive Themes",
        "Best for E-Commerce Websites",
        "SEO-Friendly",
      ],
    },
    {
      img: "/assets/services/bigcommerce.jpg",
      title: "Bigcommerce",
      list: ["Point-of-Sale Facility", " Intuitive Interface", "SEO-Friendly"],
    },
  ];

  return (
    <div className="bg-[#dfe8e9] h-auto w-full p-10">
      <div className="grid md:grid-cols-4 gap-x-5 grid-cols-1">
        {cmsData?.map((item, i) => (
          <div
            key={i}
            className="h-[400px] w-full col-span-1 flex justify-center hexagon_shape  shadow-lg  "
          >
            <div className="flex flex-col gap-y-5 justify-center items-center">
              <div className="w-[130px] h-[130px] border-[1px] p-2 border-gray-400 rounded-full  ">
                <Image
                  width={300}
                  height={300}
                  className=" rounded-full w-[120px] h-[120px]  object-contain "
                  src={item?.img}
                />
              </div>
              <div>
                <h2 className="text-center mb-4 text-[20px] font-bold  ">
                  {item?.title}
                </h2>
                <ul className="mb-4 text-center">
                  {item?.list?.map((list, i) => (
                    <li key={i + list} className="font-bold">
                      <span className="font-bold text-[16px] mr-2">✓</span>
                      {list}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CmsSection;
