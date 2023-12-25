import React from 'react'

const LatestVideos = () => {
    return (
        <div className='px-5 md:py-0 py-5 mb-10 md:px-[100px] flex justify-center '>
            <div className='grid md:grid-cols-2 grid-cols-1' >
                <div className='col-span-1' >
                    <h1  className='md:text-[36px] text-[24px] font-semibold ' >
                        How does a digital marketing agency help your business to grow online?</h1>
                    <p className='md:mt-10 my-5'>
                        You should watch this video to know information about digital marketing companies and how they will help you to grow your business online by increasing your website’s online visibility.
                    </p>
                </div>
                <div className='col-span-1  ' >

                <iframe className='md:w-[540px] w-full h-[300px]  md:h-[400px]   '   src="https://www.youtube.com/embed/Vvk0x9mNYh0?si=IyLI9Bbs8GmXQN0h" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>
                </div>
            </div>


        </div>
    )
}

export default LatestVideos