import React from 'react'
import { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import Cart from './cart/Cart';
function ProductDetails({data}) {
  const {item, itemNumber, increaseItem, decreaseItem, addItem, removeItem}= useContext(CartContext);
  
  return (
    <div className=' mx-8 md:mx-[3.4rem] lg:mx-[5.4rem] '>
        <button className=' text-dark-black'>Go back</button>
        <div>
            <div className=' flex flex-col md:flex-row gap-10 md:justify-center md:items-center rounded-md lg: lg:justify-between'>
              <div className='md:h-[480px] lg:w-[540px] lg:h-[560px] md:w-[281px] bg-gray flex justify-center items-center rounded-md'>
                <img src={`./${data.categoryImage.mobile}`} className=' rounded-md md:w-[185px] md:h-[215px] lg:w-[349.24px] lg:h-[386px] ' alt=""   />
              </div>
              <div className=' flex flex-col gap-8 md:w-[339.5px] lg:w-[445.5px] lg:h-[407px] md:h-[309px] '>
                {data.new && <h1 className=' text-[12px] leading-[16.35px] tracking-[8.57px] text-dark-orange '> New product</h1> }
                <h2 className=' text-[28px] leading-[32px] tracking-[1px] font-bold'>{data.name.toUpperCase()}</h2>
                <p className='text-dark-black text-opacity-[.5] text-[15px] leading-[25px]'>{data.description}</p>
                <span className=' block font-bold '>$ {data.price}</span>
                <div className=' flex flex-row gap-5'>
                  <div className='flex flex-row '>
                    <button className={`bg-light-gray w-[40px] h-[48px] active:text-light-orange rounded-l-md ${itemNumber[`id${data.id}`]===1? ' cursor-not-allowed':""} text-dark-black text-opacity-[.25] `} onClick={() => decreaseItem(`id${data.id}`)}>-</button>
                    <button className=' bg-light-gray w-[40px] h-[48px]'>{itemNumber[`id${data.id}`]}</button>
                    <button className=' bg-light-gray w-[40px] h-[48px] active:text-light-orange rounded-r-md text-dark-black text-opacity-[.25]' onClick={() => increaseItem(`id${data.id}`)}>+</button>
                  </div>
                  <button className=' w-[160px] h-[48px] bg-dark-orange active:bg-light-orange rounded-md text-white text-[13px] leading-[17.76px] tracking-[1px] ' onClick={() => addItem(data.id -1)}> ADD TO CART</button>
                </div>
              </div>
            </div>
            <div className='flex flex-col justify-start lg:flex-row lg:justify-between lg:gap-[120px] lg:items-center items-start'>
              <div className='my-[5rem]'>
                <h1 className=' text-[32px] font-bold leading-[36px] tracking-[1.14px] mb-[2rem]'>FEATURES</h1>
                <div className='text-dark-black text-opacity-[.5] text-[15px] leading-[25px]'>
                  {data.features.split('\n\n').map((par, index)=> <p key={index} >{par}</p>)}
                </div>
              </div>
              <div className='flex flex-col md:flex-row lg:flex-col gap-10 mb-[5rem]'>
                <h1 className='text-[32px] font-bold leading-[36px] tracking-[1.14px] md:w-[339px]'>IN THE BOX</h1>
                <div >
                {data.includes.map((data, index)=>{
                  return( <div key={index} className='flex flex-row gap-5'>
                    <p className=' text-dark-orange'>{data.quantity} X </p>
                    <p className='opacity-[.5] text-[15px] leading-[25px] '>{data.item}</p>
                  </div>)
                })}
                </div>
            </div>
            </div>
            <div className='flex flex-col md:flex-row lg:h-[592px] gap-5 rounded-md'>
              <div className='flex flex-col gap-5 rounded-md lg:w-full lg:h-[592px]' >
                <img src={`./${data.gallery.first.mobile}`} className='rounded-md md:h-[174px] lg:h-full' alt="" />
                <img src={`./${data.gallery.second.mobile}`} alt="" className='rounded-md h-[174px] lg:h-full ' />
              </div>
              <img src={`./${data.gallery.third.mobile}`} alt="" className='rounded-md md:h-[368px] md:w-[395px] lg:w-full lg:h-[592px]' />
            </div>
            
        </div>
      
    </div>
  )
}

export default ProductDetails
