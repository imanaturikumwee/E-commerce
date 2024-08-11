import React, {useContext} from 'react'
import Footer from './Footer'
import ConcSection from './ConcSection'
import ShopNav from './ShopNav'
import CategDetails from './CategDetails'
import data from './data.json'
import CategHeader from './CategHeader'
import { CartContext } from './context/CartContext'

function CategSpeakers() {
  const {cartDisplay, removeCart}=useContext(CartContext)
  return (
    <div >
        <CategHeader name="SPEAKERS"/>
        <main className={`${cartDisplay? ' opacity-[0.7] bg-light-black cursor-pointer':'bg-light-gray'}  w-full mb-[2rem]`} onClick={removeCart}>
            <div className=' lg:w-[1110px] w-[327px] '>
                <CategDetails data={data[5]} reverse={false}/>
                <CategDetails data={data[4]} reverse={true}/>
                <div className='mx-8 md:mx-[3.4rem ]'><ShopNav/></div>
                <ConcSection/>
            </div>
        </main>
        <Footer/>
    </div>
  )
}

export default CategSpeakers
