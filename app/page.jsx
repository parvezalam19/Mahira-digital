import AboutSection from "@/components/Home/AboutSection";
import ContactBanner from "@/components/Home/ContactBanner";
import Homebanner from "@/components/Home/Homebanner";
import LatestVideos from "@/components/Home/LatestVideos";
import ServiceSection from "@/components/Home/ServiceSection";
import Head from "next/head";

import TestimonialSlider from "@/components/Home/TestimonialSlider";
import LatestBlogs from "@/components/Home/LatestBlogs";
import ContactForm from "@/components/Home/ContactForm";
import ClientSlider from "@/components/sliders/ClientSlider";
import { Testimonial } from "@/components/Home/Testimonial";
import Channel from "@/components/Home/Channel";
import WebProgress from "@/components/custom/WebProgress";
import { FAQ } from "@/components/custom/FAQ";
import { homeFaq } from "@/components/dummy/data";

export default function Home() {
  
  return (
    <>
      <Head>
        <title>Digital Marketing Agency</title>
        <meta
          property="og:title"
          content="best Marketing agency in delhi"
          key="Digital Marketing Agency"
        />
      </Head>

      <main>
        <div className="relative   ">
          <Homebanner />
        </div>
        <div className="md:px-10  px-5  ">
          <AboutSection />
          <br />
        </div>
        <WebProgress/>
        <ServiceSection />
        <Channel/>
        <ContactBanner />
        <div className="px-5  md:px-10">
        <ClientSlider/>
        </div>

        <Testimonial/>
        <LatestBlogs />
        <FAQ data={homeFaq}/>
        <ContactForm />
      </main>
    </>
  );
}
