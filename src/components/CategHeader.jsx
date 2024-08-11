import React from 'react'
import NavBar from './NavBar'
import Line from './Line'

function CategHeader({name}) {
  return (
    <header className=' w-full bg-light-black'>
      <div className='mx-8 md:mx-[5.4rem] '>
      <NavBar/>
      <Line/>
      </div>
        <div className=' text-light-gray text-[20px] font-bold mx-8 md:mx-[5.4rem]  w-full'>
            <div className='flex justify-center items-center text-light-gray py-[33.5px]'>
                <h1 className=' text-[40px] leading-[44px] tracking-[1.43]'>{name}</h1>
            </div>
        </div>
    </header>
  )
}

export default CategHeader
