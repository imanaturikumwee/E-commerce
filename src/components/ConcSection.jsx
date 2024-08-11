import React from 'react'

function ConcSection() {
  return (
    <div className='pt-[50px] flex flex-col-reverse lg:flex-row  lg:items-center lg:justify-between lg:w-[1110px] md:w-[689px] w-[327px] lg:mt-[150px] mx-8 md:mx-[5.4rem]  my-[80px]'>
        <div className=' lg:w-[445px] md:w-[573px] lg:h-[445px] md:h-[270px] flex flex-col justify-center items-center text-center ' >
            <h1 className='text-[48px] font-bold'> Bringing you the <span className=' text-dark-orange'>best</span> audio gear</h1>
            <p className=' text-[15px] opacity-[.5]'>
            Located at the heart of New York City, Audiophile is the premier store 
            for high end headphones, earphones, speakers, and audio accessories.
                We have a large showroom and luxury demonstration rooms available for
                you to browse and experience a wide range of our products. Stop by our 
                store to meet some of the fantastic people who make Audiophile the best
                place to buy your portable audio equipment.
            </p>
        </div>
        <img src={'./assets/shared/desktop/image-best-gear.jpg'} alt="" className=' rounded-md lg:w-[540px] md:w-[689px] w-[327px] lg:h-[588px]' />
    </div>
  )
}

export default ConcSection
