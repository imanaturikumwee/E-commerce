import React, {useContext} from 'react'
import DetailHeader from './DetailHeader'
import ProductDetails from './ProductDetails'
import ConcSection from '../ConcSection'
import Footer from '../Footer'
import ShopNav from '../ShopNav'
import SeeMore from './SeeMore'
import data from '../data.json'
import { CartContext } from '../context/CartContext'
function Speaker2() {
  const {cartDisplay, removeCart}=useContext(CartContext)
  return (
    <div>
        <DetailHeader/>
        <main className={`${cartDisplay? ' opacity-[0.7] bg-light-black cursor-pointer':''}`} onClick={removeCart}>
            <ProductDetails data={data[4]}/> 
            <div className='flex md:flex-row flex-col mx-8 md:mx-[3.4rem] lg:mx-[5.4rem] gap-2 justify-between '>
                <SeeMore data={data[2]}/>
                <SeeMore data={data[1]}/>
                <SeeMore data={data[5]}/>
            </div>
            <div className='mx-8 md:mx-[3.4rem]'><ShopNav/></div>
            <ConcSection/>
        </main>
        <Footer/>
      
    </div>
  )
}

export default Speaker2