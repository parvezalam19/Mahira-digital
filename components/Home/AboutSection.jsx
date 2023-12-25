import Image from 'next/image'
import React from 'react'


const AboutSection = () => {
    return (
        <div className='grid md:grid-cols-2  grid-cols-1 md:mb-10 gap-x-10 ' >

            <div className='col-span-1 relative  '>
                <Image width={360} height={300} className='md:w-[360px] md:h-[300px] hidden md:block absolute left-[0%]  md:top-[10%]' src={"/assets/home/about2.jpg"} />
                <Image width={360} height={300} className='w-[360px] h-[300px]  md:absolute rounded-md md:bottom-[-20%] right-0 ' src={"/assets/home/Best-Digital-Marketing-Agency-in-Delhi.png"} />
            </div>

            <div className='col-span-1 flex  flex-col gap-y-3 items-start gap-x-10'>
                <div>
                    <h1 className='my-10 text-[30px] '>
                        Introduction about Mahira Digital The Best Digital Marketing Company in Delhi                </h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro veniam sit ullam, illum tempora numquam autem nemo dicta nihil atque ex ipsa a aperiam blanditiis, recusandae eum officiis sint perferendis?</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro veniam sit ullam, illum tempora numquam autem nemo dicta nihil atque ex ipsa a aperiam blanditiis, recusandae eum officiis sint perferendis?</p>
                </div>


                <a href="#" className=' font-medium rounded-[25px]  outline-none border-none px-[30px] py-[12px] text-white bg-[#ff4800] '>
                    Read More
                </a>
            </div>



        </div>
    )
}

export default AboutSection