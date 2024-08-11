import React, { useContext } from 'react';
import { CartContext } from '../../context/CartContext';

function Button({id, name, type, width}) {
  const { item, itemNumber, confirm, toggleConfirm} = useContext(CartContext);
  return (
    <div className={`flex flex-col w-full  md:w-${width} `}>
      <label htmlFor={id} className='block'>{name}</label> 
      <input type={type} name={id} className={`border-[1px] rounded-md focus:border-light-orange focus:ring-0 focus:outline-none block my-[5px] w-full p-2 ${confirm? ' z-0 bg-opacity-[.4] ':''} bg-light-gray`}  />
    </div>
  )
}

export default Button
