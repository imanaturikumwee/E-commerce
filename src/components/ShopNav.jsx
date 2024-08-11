import React from 'react'
import { Link } from 'react-router-dom'

function ShopNav({marg}) {
  return (
    <div className={`${marg} lg:flex md:flex md:justify-between lg:justify-between lg:items-end md:items-end   font-bold text-[18px] lg:w-[1110px] md:w-[689px] w-full lg:h-[270px] mt-[50px]  `}>
        <div className=' lg:w-[350px] lg:h-[284px] md:w-[223px] md:h-[217px] w-full '>
            <img src={'./assets/shared/desktop/image-category-thumbnail-headphones.png'} alt=""  className=' lg:w-[178px] w-[79.92px] h-[104px] lg:h-[161px] relative lg:top-[100px] md:top-[60px] top-[60px] lg:left-[102px] md:left-[85px] left-[130px] '/>
            <div className=' md:w-[223px] md:h-[165px]  lg:w-[350px] w-[327px] h-[165px] lg:h-[204px] bg-dark-gray   rounded-md mt-[1px] flex flex-col justify-center items-center '>
                <div className=' flex flex-col justify-center items-center'>
                    <p>HEADPHONES</p>
                    <Link to='/headphones'>
                        <div className='flex items-center'>
                            <span className=' opacity-[.4] text-[13px] pl-[20px] active:text-dark-orange'>SHOP</span>
                            <span className=' text-dark-orange text-[] pl-[20px]'>{' >'}</span>
                        </div>
                     </Link>
                </div>
            </div>
        </div>
        <div className=' lg:w-[350px] lg:h-[284px] md:w-[223px] md:h-[217px] w-full'>
            <img src={'./assets/shared/desktop/image-category-thumbnail-speakers.png'} alt=""  className=' lg:w-[178px] w-[79.92px] h-[104px] lg:h-[161px] relative lg:top-[100px] md:top-[60px] top-[60px] lg:left-[102px] md:left-[85px] left-[130px]'/>
            <div className=' md:w-[223px] md:h-[165px]  lg:w-[350px] w-[327px]  h-[165px] lg:h-[204px] bg-dark-gray   rounded-md mt-[1px] flex flex-col justify-center items-center '>
                <div className='flex flex-col justify-center items-center'>
                    <p>SPEAKERS</p>
                    <Link to='/speakers'>
                        <div className='flex items-center'>
                            <span className=' opacity-[.4] text-[13px] pl-[20px] active:text-dark-orange'>SHOP</span>
                            <span className=' text-dark-orange text-[] pl-[20px]'>{' >'}</span>
                        </div>
                     </Link>
                </div>
            </div>
        </div>
        <div className=' lg:w-[350px] lg:h-[284px] md:w-[223px] md:h-[217px] w-full'>
            <img src={'./assets/shared/desktop/image-category-thumbnail-earphones.png'} alt=""  className=' lg:w-[178px] w-[79.92px] h-[104px] lg:h-[161px] relative lg:top-[100px] md:top-[60px] top-[60px] lg:left-[102px] md:left-[85px] left-[130px]'/>
            <div className=' md:w-[223px] md:h-[165px]  lg:w-[350px] w-[327px] h-[165px] lg:h-[204px] bg-dark-gray   rounded-md mt-[1px] flex flex-col justify-center items-center '>
                <div className='flex flex-col justify-center items-center'>
                    <p>EARPHONES</p>
                     <Link to='/earphones'>
                        <div className='flex items-center'>
                            <span className=' opacity-[.4] text-[13px] pl-[20px] active:text-dark-orange'>SHOP</span>
                            <span className=' text-dark-orange text-[] pl-[20px]'>{' >'}</span>
                        </div>
                     </Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ShopNav
