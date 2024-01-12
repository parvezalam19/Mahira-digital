import Image from 'next/image'
import React from 'react'


const AboutSection = () => {
    return (
        <div className='grid md:grid-cols-2  grid-cols-1 md:mb-10 gap-x-10 ' >

            <div className='col-span-1 relative  '>
                <Image width={360} height={300} alt='img' className='md:w-[360px] md:h-[300px] hidden md:block absolute left-[0%]  md:top-[10%]' src={"/assets/home/about2.jpg"} />
                <Image width={360} height={300} alt='img1' className='w-[360px] h-[300px]  md:absolute rounded-md md:bottom-[-20%] right-0 ' src={"/assets/home/Best-Digital-Marketing-Agency-in-Delhi.png"} />
            </div>

            <div className='col-span-1 flex  flex-col gap-y-3 items-start gap-x-10'>
                <div>
                    <h1 className='my-5 text-[30px] '>
                        Introduction about Mahira Digital The Best Digital Marketing Company in Delhi                </h1>
                    <p>Today the digital market is loaded with hurdles and challenges. The stiffness of competition in the market has made an online presence mandatory. When it comes to the success key for businesses in current times, online presence is something inevitable. Every entrepreneur desires to scale up their business to reach out to more audiences, get leads, and thereby elevate the brand value. However, to get the correct ingredients to frame the best online ecosystem, every brand must have its hands-on digital marketing agency in Delhi, India.</p>
                </div>


                <a href="/about" className=' font-medium rounded-[25px]  outline-none border-none px-[30px] py-[12px] text-white bg-[#ff4800] '>
                    Read More
                </a>
            </div>



        </div>
    )
}

export default AboutSection