import React, {useContext} from 'react'
import DetailHeader from '../DetailHeader'
import Button from './Button'
import { Link } from 'react-router-dom'
import CheckoutSammary from './CheckoutSammary';
import { CartContext } from '../../context/CartContext';


function Checkout() {
    const { item, itemNumber, confirm, removeConfirm} = useContext(CartContext);
  return (
    <div onClick={removeConfirm}>
      <DetailHeader/>
      <div className={` ${confirm? ' z-0 bg-opacity-[.4] bg-light-black':'bg-light-gray'}`} >
        <div className='mx-8 md:mx-[5.4rem]'>
            <Link to='/'>
                <p className=' cursor-pointer py-8 text-dark-black opacity-[.8] active:text-light-orange '>GO BACK</p>
            </Link>
            <div className='lg:flex gap-2'>
                <div className={`bg-white rounded-md  p-[20px] lg:w-[730px] mb-[3rem] ${confirm? ' bg-opacity-[.4] bg-light-black':'bg-light-gray'}`}>
                    <h1 className=''>CHECK OUT</h1>
                    <form action="" method="post" className='md:w-full lg:w-[689px]'>
                        <h1 className=' text-dark-orange py-3'>BILLING DETAILS</h1>
                        <div className=' flex flex-col md:flex-row justify-between w-full gap-2'>
                            <Button id='name' name='Name' type='text' width='full' />
                            <Button id='email' name='E-mail' type='email' width='full'  />
                        </div>
                        <Button id='phone' name='Phone number' type='tel' width={'[309px]'} />
                        <h1 className=' text-dark-orange py-3'>SHIPPING INFO</h1>
                        <Button id='address' name='Your Address' type='text' />
                        <div className=' flex flex-col md:flex-row justify-between gap-2'>
                            <Button id='zipcode' name='Zipcode' type='text' width='full' />
                            <Button id='city' name='City' type='text' width='full' />
                        </div>
                        <Button id='country' name='Country' type='text' width='[309px]' />
                        <h1 className=' text-dark-orange py-3'>PAYMENT DETAILS</h1>
                        <h3>payment method</h3>
                        <div className=' flex flex-col md:flex-col md:items-end'>
                            <div className='my-3 px-3 flex flex-row gap-3 w-full md:w-[309px] h-[56px] border-[1px] border-solid border-dark-gray hover:border-light-orange rounded-md items-center'>
                                <input id='cash' name='cash' type='radio' className=' accent-light-orange border-light-orange focus:border-blue-500'/>
                                <label htmlFor="cash">e-Money</label>
                            </div>
                            <div className='my-3 px-3 flex flex-row gap-3 w-full md:w-[309px] h-[56px] border-solid border-[1px] border-dark-gray hover:border-light-orange rounded-md items-center'>
                                <input id='emoney' name='cash' type='radio' className='accent-light-orange' />
                                <label htmlFor="emoney">Cash on delivery</label>
                            </div>
                        </div>
                        <div className=' flex flex-col md:flex-row justify-between'>
                            <Button id='emoneyNumber' name='e-Money number' type='tel' width='[309px]' />
                            <Button id='pin' name='e-Money pin' type='text' width='[309px]' />
                        </div>
                        
                        
                    </form>
                </div>
                <CheckoutSammary/>
            </div>
           
        </div>
        
      </div>
    </div>
  )
}

export default Checkout
