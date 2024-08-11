import React from 'react';
import  Facebook from '/assets/shared/desktop/icon-facebook.svg';
import  Twitter from '/assets/shared/desktop/icon-twitter.svg';
import  Instagram from '/assets/shared/desktop/icon-instagram.svg';
import {Link} from 'react-router-dom';
import Logo from '/assets/shared/desktop/logo.svg';
function Footer() {
  return (
    <footer className=' bg-light-black text-white '>
        <div className='md:mx-[5.4rem] mx-8 flex items-center justify-center md:justify-start '>
           <hr className='w-[101px] h-[4px] bg-dark-orange relative text-dark-orange z-50 top-0 ' />
        </div>
        <div className=' mx-8 md:mx-[5.4rem]  pt-10'>
            
            <div className=' flex justify-between items-center md:flex-row flex-col'>
                <Link to='/'>
                   <h2 className=' cursor-pointer font-bold w-[143px] h-[25] leading-[25px] tracking-[3px] text-[18px] active:text-light-orange'><img src={Logo} alt="Oudiophile" /></h2>
                </Link>
                <div className='flex md:gap-4 font-bold leading-[25px] tracking-[2px] text-[13px] md:flex-row flex-col items-center'>
                <Link to='/'><span className='active:text-dark-orange'>HOME</span></Link>
                <Link to='/headphones'><span className='active:text-dark-orange'>HEADPHONES</span></Link>
                <Link to='/speakers'><span className='active:text-dark-orange'>SPEAKERS</span></Link>
               <Link to='/earphones'><span className='active:text-dark-orange'>EARPHONES</span></Link>
                </div>
            </div>
            <div className=' flex justify-between items-center pt-10 md:flex-row flex-col'>
                <div className=' lg:w-[540px] lg:h-[200px] w-[327px]'>
                    <p className=' text-[15px] opacity-[.5] leading-[25px] text-center md:text-left'>
                    Audiophile is an all in one stop to fulfill your audio needs. 
                    We're a small team of music lovers and sound specialists who are
                    devoted to helping you get the most out of personal audio. 
                    Come and visit our demo facility - we’re open 7 days a week.
                    </p>
                    <div className='text-[15px] opacity-[.5] mt-5 '>Copyright. 2021 all rights reserved</div>
                </div>
                <div className='flex items-center justify-between gap-4 my-8'>
                    <img src={Facebook} alt="facebook" className='w-[24px] h-[19.5px]' />
                    <img src={Twitter} alt="twitter" className='w-[24px] h-[19.5px]'/>
                    <img src={Instagram} alt="instagram" className='w-[24px] h-[19.5px]' />
                </div>
            </div>
            
        </div>
    </footer>
  )
}

export default Footer
