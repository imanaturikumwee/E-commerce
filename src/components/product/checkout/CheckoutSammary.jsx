import React,{useContext} from 'react'
import Cart from '../cart/Cart'
import Item from '../cart/Item'
import Summary from './Summary'
import { CartContext } from '../../context/CartContext'

function CheckoutSammary() {
  const { item, itemNumber, confirm, toggleConfirm} = useContext(CartContext);
  const total = item?.reduce(((sum, data)=> sum + (data.price*itemNumber[`id${data.id}`])),0);
  return (
    <div className= {`p-[20px] h-fit md:px-10 md:w-[600px] w-full rounded-md ${total!==0? 'block': 'hidden'} ${confirm? ' bg-opacity-[.4]':'bg-white'}`}>
        <Summary/>
      
    </div>
  )
}

export default CheckoutSammary
