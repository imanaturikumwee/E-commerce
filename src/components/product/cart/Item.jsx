import React, { useContext } from 'react';
import { CartContext } from '../../context/CartContext';



function Item() {
    const { item, itemNumber, increaseItem, decreaseItem} = useContext(CartContext);

  return (
    <div className=''>
        {
            item.map((data, index)=>{
                return(
                    <div key={index} className='flex justify-between items-center mt-5'>
                        <div className='h-[64px] w-[64px] bg-gray flex items-center justify-center rounded-md'>
                        <img src={`./${data.image.mobile}`} alt="img" className='w-[36.19px]' />
                        </div>
                        <div >
                            <h1>{data.name==="XX99 Mark I Headphones"? "XX99 MK I": data.name==="XX99 Mark II Headphones"? "XX99 MK II" : data.name==="XX59 Headphones"? 'XX59' :data.name.slice(0,3)}</h1>
                            <p>$ {data.price}</p>
                        </div>
                        <div className='flex'>
                            <button className='block w-[25px] bg-gray active:bg-light-orange rounded-l-md 'onClick={() => decreaseItem(`id${data.id}`)}>-</button>
                            <button className='block w-[25px] bg-gray active:bg-light-orange'>{itemNumber[`id${data.id}`]}</button>
                            <button className='block w-[25px] bg-gray active:bg-light-orange rounded-r-md' onClick={() => increaseItem(`id${data.id}`)}>+</button>
                        </div>
                    </div>
                )
            })
        }
      
    </div>
  )
}

export default Item
