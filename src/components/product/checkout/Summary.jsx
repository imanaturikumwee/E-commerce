import React, { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import Comfirm from '/assets/checkout/icon-order-confirmation.svg';
import ShippingItem from './ShippingItem';



function Summary() {
    const { item, itemNumber, confirm, toggleConfirm} = useContext(CartContext);
    const total = item?.reduce(((sum, data)=> sum + (data.price*itemNumber[`id${data.id}`])),0);
    const vart= (total*0.2).toFixed(2);
    const shipping = (50).toFixed(2)
    const grand = (total + parseFloat(vart) + parseFloat(shipping)).toFixed(2);
  return (
    <div className={` mr-[3.4rem] h-fit` }>
        <div>
            <h1>SUMMARY</h1>
            {
                item.map((data, index)=>{
                    return(
                        <div key={index} className='flex justify-between items-center my-5'>
                            <div className='h-[64px] w-[64px] bg-gray flex items-center justify-center rounded-md'>
                            <img src={`./${data.image.mobile}`} alt="img" className='w-[36.19px]' />
                            </div>
                            <div >
                                <h1>{data.name==="XX99 Mark I Headphones"? "XX99 MK I": data.name==="XX99 Mark II Headphones"? "XX99 MK II" : data.name==="XX59 Headphones"? 'XX59' :data.name.slice(0,3)}</h1>
                                <p>$ {data.price}</p>
                            </div>
                            <div className='flex'>
                                <span className='block w-[25px '>x</span>
                                <span className='block w-[25px]'>{itemNumber[`id${data.id}`]}</span>
                                
                            </div>
                        </div>
                    )
                })
                
            }
            <div className='my-10 flex flex-col gap-[20px]'>
                <div className='flex justify-between'>
                    <span> TOTAL </span>
                    <span>$ {total.toFixed(2)}</span>
                </div>
                <div className='flex justify-between'>
                    <span>SHIPPING</span>
                    <span>$ {shipping}</span>
                </div>
                <div className='flex justify-between'>
                    <span>VART {'(included)'}</span>
                    <span>& {vart}</span>
                </div>
                <div className='flex justify-between'>
                    <span>GRAND TOTAL</span>
                    <span>$ {grand}</span>
                </div>
            </div>
            <button className=' text-white bg-dark-orange active:bg-light-orange w-full my-[10px] h-[48px]' onClick={toggleConfirm}>CONTINEU</button>
        </div>
        <div className={`absolute w-full left-0 top-[6rem] bg-opacity-100 ${confirm? 'block':'hidden'} lg:w-[540px] lg:mx-[25rem]`}  >
            <div className={`bg-white mx-8 md:mx-[5.4rem] z-10 rounded-md py-6`} >
                <div className={`mx-8 ${confirm? 'opacity-100':''} md:py-2`}>
                    <img src={Comfirm} alt="hi" className=' w-[50px]' />
                </div>
                <ShippingItem/>
            </div>
        </div> 
        
    </div>

    
    
  )
}

export default Summary
