import React from 'react'
import { Link } from 'react-router-dom'

function CategDetails({data, reverse}) {
  return (
    <div className={`lg:w-[1110px] md:w-[689px] w-[327px] h-[724px] lg:flex ${reverse ? 'lg:flex-row-reverse': 'lg:flex-row' }  w-full justify-between items-center flex-col mx-8 md:mx-[5.4rem]  `} >
      <div className='flex justify-center items-center lg:w-[540px] lg:h-[560px] bg-dark-gray lg:mt-[160px]'>
        <img src={`./${data.categoryImage.mobile}`} alt={data.name}  className=' lg:w-[] lg:h-[383px] w-[327px] h-[352px] '/>
      </div>
      <div className=' lg:w-[445px] md:w-[689px] w-[327px] h-[340px] lg:h-[343px] lg:mt-[90px] lg:p-[50px] text-center flex justify-center flex-col items-center mt-[40px] '>
        <span className='leading-[19.12px] tracking-[10px] text-dark-orange text-[15px]'>NEW PRODUCT</span>
        <h1 className='font-bold text-[40px] leading-[44px] tracking-[1.43px] mt-[20px]'>{data.name}</h1>
        <p className=' font-normal text-[15px] opacity-[.5] leading-[25px] mt-7'> {data.description}</p>
        <Link to={`${data.id===4? '/headphone1': data.id===3? '/headphone2':data.id===2? '/headphone3': data.id===6? '/speaker1': data.id===5? '/speaker2': '/earphone' }`}>
          <button className='w-[160px] h-[48px] bg-dark-orange mt-7 text-white text-[13px] tracking-[1px] leading-[17.76px]'>SEE PRODUCT</button>
        </Link>
      </div>
    </div>
  )
}

export default CategDetails
