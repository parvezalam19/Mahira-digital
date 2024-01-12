import Image from "next/image";
import Link from "next/link";
import React from "react";


function Highlight({ children }) {
    return <span className="highLight_text">{children}</span>;
}

const ServiceSection = () => {



    const serviceCards = [
        {
            img: "/assets/home/service/seo.png",
            desc: (
                <>
                    SEO is one of the basic elements of a website. With the proper SEO strategies, any website can reach the apex of ranking. As the{" "}
                    <Highlight>best digital marketing company in Delhi </Highlight> , Mahira Digitals owns a team who works to frame the best SEO strategies to convert the client into top rankers.
                </>
            ),
            title: "Search Engine Optimization",
            href: "#"
        },
        {
            img: "/assets/home/service/googleAdd.png",
            desc: (<>Google Adwords is the key to drive in quality traffic to a website. Mahira Digitals presents jaw-dropping strategies to help businesses reach potential customers. Being the <Highlight>best digital marketing agency in Delhi</Highlight> , we help you strengthen your paid advertisement strategy with google Adwords.</>),
            title: "Google Ads",
            href: "#"
        }, {
            img: "/assets/home/service/management.png",
            desc: "Brand Image is a game-changer in today’s market as customers tend to purchase from reputed brands. Mahira Digital help businesses burnish their brand reputation and present a clean and adorable image in the online world.",
            title: "Online Reputation Management",
            href: "#"
        }, {
            img: "/assets/home/service/digital.png",
            desc: "If you are a businessman who desires to develop in-depth knowledge about digital marketing or a student who desires to weave a career in the field, Mahira Digitals offer you the most premium digital marketing courses at extremely affordable charges.",
            title: "Digital Marketing Courses & Training",
            href: "#"
        }, {
            img: "/assets/home/service/social_add.png",
            desc: "With the growth in social media users, the online world has unlocked the doors of opportunity. Mahira Digitals, the best digital marketing agency in Delhi offers businesses the blueprint of the most effective SMM tactics to polish their brand appearance and reach the target audience.",
            title: "Social Media Optimization",
            href: "#"
        }, {
            img: "/assets/home/service/seo.png",
            desc: "Mahira Digital, being the most premium digital marketing company in Delhi, offers secret search engine marketing techniques to businesses, giving them a push on the success ladder. All our SEM techniques are conversion-focused, which helps companies meet their revenue goals.",
            title: "Search Engine Marketing",
            href: "#"
        }, {
            img: "/assets/home/service/webdev.png",
            desc: "At Mahira Digitals, our expert web developer designs the most user-friendly and responsive websites, which can easily rank on top. Whether you need a business website or an e-commerce website, Mahira Digitals cover it all.",
            title: "Website Development",
            href: "#"
        }, {
            img: "/assets/home/service/content.png",
            desc: "Content is the key to engage your audience. However, to tailor the best content that promotes conversion requires expertise and experience. Our team at Mahira Digitals is specially trained to offer the most premium content to clients.",
            title: "Content Writing & Marketing",
            href: "#"
        }, {
            img: "/assets/home/service/faceAdd.png",
            desc: "The popularity of Facebook has uplifted the marketing standards. With our effective techniques, we help businesses understand the Facebook marketing mechanism and assist them in generating leads through Facebook ads.",
            title: "Facebook Marketing",
            href: "#"
        },



    ]




    return (
        <div className="md:my-10  p-2 md:p-10  bg-[#f2f6f9] ">
            <div className="section-title">
                <h1 className="text-center md:text-[30px] text-[24px] mt-10 font-semibold " >We Offer Professional Solutions</h1>
                <p className="text-[14px] text-[#57647c] text-center " >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do <br />
                    eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
            </div>
            <div className=" flex justify-center">
                <div className="flex md:flex-row flex-wrap justify-between  flex-col"
                >
                    {

                        serviceCards?.map((item, i) => (
                            <>
                                <Link href="#" className=" text-center justify-center service_card flex md:w-[350px] h-auto md:h-[350px] my-3 md:my-3 flex-col p-5 rounded-md bg-white " key={`${i + item.title}`}>
                                    <div className="w-full h-[75px] flex justify-center  ">
                                        <Image alt="seo" width={75} height={75} className="w-[75px] h-[75px] bg-[#ff480] rounded-md" src={item?.img} />
                                    </div>
                                    <h2 className="md:text-[20px]   text-[18px] my-4 font-semibold" >
                                        <a href="#">{item.title}</a>
                                    </h2>
                                    <p className="text-[14px]" >
                                        {item?.desc.length > 180 ? `${item?.desc.substring(0, 180)}...` : item?.desc}
                                    </p>
                                </Link>
                                {/* <div className="bg-[#ff4800] w-[20px] h-[2px] " ></div> */}
                            </>
                        ))
                    }
                </div>

            </div>
        </div>
    );
};

export default ServiceSection;
