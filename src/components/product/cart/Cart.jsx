import React, { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import Item from './Item'
import data from '../../data.json'
import { Link } from 'react-router-dom';

function Cart() {
    const { item, itemNumber, removeItem, toggleDisplay} = useContext(CartContext);
    //making the total made of the price of the product times numberof items (which are stored in the itemNumber object)
    // the number of specific items are acced by adding the word 'id to the id of the item in question
    const total = item?.reduce(((sum, data)=> sum + (data.price*itemNumber[`id${data.id}`])),0)
  return (
    
    <div className=' bg-white rounded-md mt-[3rem] mx-8 md:mx-[0px] w-full text-dark-black '>
        <div className='px-3 md:px-10 md:w-[600px] w-full'>
            <div className=' flex justify-between items-center'>
                <h1>CART {`(${item.length})`}</h1>
                <button className=' underline active:text-light-orange text-dark-black text-opacity-[.6]' onClick={removeItem} >Remove all</button>
            </div>
            <Item/>
            <div className='flex justify-between items-center'>
                <h1>TOTAL</h1>
                <span>$ {total}</span>
            </div>
            <Link to='/checkout' onClick={toggleDisplay}>
                <div className=' bg-dark-orange active:bg-light-orange text-white flex justify-center my-[10px] h-[48px] items-center'>
                    <p className=''> CHECKOUT</p>
                </div>
            </Link>
            <div className='h-[10px]'></div>
        </div>
    </div>
      
    
  )
}

export default Cart
