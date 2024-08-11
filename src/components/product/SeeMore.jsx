import React from 'react'
import data from '../data.json'
import { Link } from 'react-router-dom'
function SeeMore({data}) {
  return (
    <div className='mt-5 md:mt-[40px] w-full  md:h-[471px]'>
        <div className=' h-[120px] w-full md:w-[223px] lg:w-[350px] md:h-[318px] bg-gray flex justify-center items-center rounded-md '>
        <img src={`./${data.image.mobile}`} alt="" className=' md:w-[143.12px] md:h-[172px] h-[83px] w-[79.58px] lg:w-[190.83px] lg:h-[193px]'/>
        </div>
        <div className='flex flex-col text-center items-center gap-5 my-5'>
          <h1>{data.name}</h1>
          <Link to={`${data.id===4? '/headphone1': data.id===3? '/headphone2':data.id===2? '/headphone3': data.id===6? '/speaker1': data.id===5? '/speaker2': '/earphone' }`}>
            <button className='w-[160px] h-[48px] bg-dark-orange active:bg-light-orange text-white'> SEE PRODUCT</button>
          </Link>
          
        </div>
    </div>
  )
}

export default SeeMore
