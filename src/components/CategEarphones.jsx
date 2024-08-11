import React, {useContext} from 'react'
import CategHeader from './CategHeader'
import Footer from './Footer'
import ConcSection from './ConcSection'
import ShopNav from './ShopNav'
import CategDetails from './CategDetails'
import data from './data.json'
import { CartContext } from './context/CartContext'

function CategEarphones() {
  const {cartDisplay, removeCart}=useContext(CartContext)
  return (
    <div >
        <CategHeader name="EARPHONES"/>
        <main className={`${cartDisplay? ' opacity-[0.7] bg-light-black cursor-pointer':'bg-light-gray'}  w-full mb-[2rem]`} onClick={removeCart}>
            <div className='lg:w-[1110px] w-[327px] '>
                <CategDetails data={data[0]} reverse={false}/>
                <div className='mx-8 md:mx-[3.4rem]'><ShopNav/></div>
                <ConcSection/>
            </div>      
        </main>
        <Footer/>
    </div>
  )
}

export default CategEarphones
