import React, {useContext} from 'react';
import {Link} from 'react-router-dom';
import Menu from '/assets/shared/tablet/icon-hamburger.svg';
import { IoCartOutline } from "react-icons/io5";
import Cart from './product/cart/Cart';
import { CartContext } from './context/CartContext';
import ShopNav from './ShopNav';
import Logo from '/assets/shared/desktop/logo.svg';
function NavBar() {
  const {item,cartDisplay, menu, toggleDisplay, toggleMenu}=useContext(CartContext)
  return (
    <nav className=' flex justify-between items-center  pt-10 pb-5 text-light-gray text-[20px] font-bold  w-full z-50 relative' >
        <div className='flex gap-4  items-center'>
            <div onClick={toggleMenu}>
               <img src={Menu} alt="Menu" className=' text-[13px] justify-start items-center lg:hidden lg:w-[23.33px] lg:h-[20px]'/>
               <div className={`absolute top-[6rem] left-[-3rem] md:left-[-5.4rem] lg:left-0 bg-white text-dark-black md:h-[350px] lg:h-[420px] rounded-md w-fit mx-4 ${menu? 'block':'hidden'}`}>
                  <ShopNav marg='mx-8 md:mx-[5.4rem]'/>
               </div>
            </div>
            <Link to='/'>
              <h2 className=' cursor-pointer active:text-light-orange pl-[-2px]'><img src={Logo} alt=" Oudiophile " /></h2>
            </Link>
        </div>
        <div className='lg:flex lg:gap-8 lg:text-[13px] lg:items-center md:hidden hidden '>
            <Link to='/' className='active:text-light-orange'><span >HOME</span></Link>
            <Link to='/headphones' className='active:text-light-orange'><span >HEADPHONES</span></Link>
            <Link to='/speakers' className='active:text-light-orange'><span >SPEAKERS</span></Link>
            <Link to='/earphones' className='active:text-light-orange'><span>EARPHONES</span></Link>

        </div>
        <div className='flex items-end cursor-pointer active:text-light-orange' onClick={()=>toggleDisplay()}>
        <IoCartOutline size={30} className='cursor-pointer active:text-light-orange'  />
          {item.length!=0 && <div className='text-[12px] flex justify-center w-5 rounded-full bg-dark-orange text-white text-right' >
            <span className=''>{item.length}</span>
          </div> }
        </div>
        <div className={`absolute top-[80px] right-16 md:right-[0px] text-dark-black ${cartDisplay? 'block':'hidden'}`}>
          <Cart/>
        </div>
    </nav>
  )
}

export default NavBar
