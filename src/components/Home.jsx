import React, {useContext} from 'react'
import speaker from "/assets/home/desktop/image-speaker-zx9.png"
import data from './data.json';

import NavBar from './NavBar';
import Footer from './Footer';
import ConcSection from './ConcSection';
import ShopNav from './ShopNav';
import Line from './Line';
import { Link } from 'react-router-dom';
import { CartContext } from './context/CartContext';


function Home() {
  const {cartDisplay, removeCart}=useContext(CartContext)
  return (
    <div >
        <header className=" bg-dark-black bg-headphone-bg bg-cover bg-[75%] md:bg-[90%] lg:bg-[100%]  w-full " >
            <div className='  text-light-gray text-[20px] font-bold md:h-[729px] h-[600px]  mx-8 md:mx-[3.4rem] lg:mx-[3.4rem] '>
                <NavBar/>
                <Line/>
                <div className='flex justify-center items-center mt-8 lg:justify-start'>
                    <div className={` md:flex lg:flex block items-center justify-center lg:justify-between lg:pt-[100px] text-center lg:text-left ${cartDisplay? 'cursor-pointer':''} md:mt-[5rem] lg:mt-0 mt-[3rem] md:w-[379px] md:h-[346px] `} onClick={removeCart}>
                        <div className=' w-[327px] h-[346px] flex flex-col justify-center items-center lg:items-start gap-5 z-20'>
                            <h1 div className=' text-[14px] font-normal text-dark-gray leading-[19.12px] tracking-[10px]'> NEW PRODUCT</h1>
                            <h3 className=' md:text-[48px] text-[40px] font-bold leading-[58px] tracking-[2px]'>{data[3].name}</h3>
                            <div className=' text-[13px] font-normal text-dark-gray leading-[25px]'>
                                <p>{data[3].description.toString()}</p>
                            </div>
                            <Link to='/headphone1'> <button className=' bg-dark-orange w-[120px] h-[50px]  text-[13px] text-dark-gray'>See product</button> </Link>
                        </div>
                        
                    </div>
                </div>
            </div>
        </header>
        <main className={`${cartDisplay? ' opacity-[0.7] bg-light-black cursor-pointer':''}` } onClick={removeCart} >
            <div className='mx-8 md:mx-[3.4rem]'><ShopNav/></div>
            <div className=' bg-dark-orange lg:w-[1110px] md:w-[689px] md:h-[720px] w-[327px] h-[] lg:mt-[100px] md:flex md:flex-col lg:flex-row md:items-center lg:flex justify-center mt-[70px] lg:gap-[50px] rounded-md mx-8 md:mx-[3.4rem] flex flex-col items-center'>
                <div className='pt-[40px]'>
                    <img src={speaker} alt=""  className=' lg:w-[410.23px] md:w-[197.21px] md:h-[237px] lg:h-[493px] w-[172.25px] h-[207px]'/>
                </div>
                <div className=' text-dark-gray mt-[30px] lg:w-[400px] md:w-[349px] md:h-[303px] md:flex flex flex-col items-center justify-center md:items-center lg:items-start gap-4 md:text-center lg:text-start px-[2rem]'>

                    <h3 className=' lg:text-[48px] text-[36px] leading-[40px] tracking-[1.29px] w-[200px] h-[80px] text-center lg:text-start'>{data[5].name.slice(0,3)} {data[5].name.slice(3).toUpperCase()} </h3>
                    <p className=' lg:text-[13px] md:text-[15px] leading-[25px]'>Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.</p>
                    <Link to='/speaker1'>
                        <button className=' bg-light-black w-[160px] h-[48px] my-[10px] md:my-0 text-[13px] lg:h-[48px]'>SEE PRODUCT</button>
                    </Link>
                </div>
            </div>
            <div className=' lg:w-[1110px] mt-[40px] rounded-md  mx-8 md:mx-[3.4rem]'>
                        
                <div className=' flex flex-col justify-center items-center  absolute lg:top-[2000px]  top-[2130px]  z-50 text-dark-black mt-[70px] px-[10px]  md:px-[30px] lg:w-[400px] w-[204px] md:top-[1850px] h-[118px] lg:left-[100px] md:left-[110px] left-[55px] text-center'>

                    <h2 className=' text-[28px] font-bold leading-[38.25px] tracking-[2px] w-[204px] md:h-[38px]'>{data[4].name.toUpperCase()}</h2>
                    <Link to='/speaker2'>
                        <button className=' font-bold border-dark-black border-solid border-[1px] lg:w-[160px] w-[160px] h-[48px] lg:h-[48px] mt-[20px] text-[13px] lg:bg-light-black lg:text-white'>SEE PRODUCT</button>
                    </Link>
                </div>
                <div className=' '>
                    <img src={`./assets/home/${window.innerWidth<=640? 'mobile': 'desktop'}/image-speaker-zx7.jpg`} alt=""  className='rounded-md lg:w-[1110px] md:w-[689px] w-[327px]  h-[320px] '></img>
                </div>
            </div>
            <div className=' mt-[50px] md:flex md: justify-between md:w-[689px] w-[327px] lg:w-[1110px] md:h-[320px] mx-8 md:mx-[3.4rem]'>
                <div>
                    <img src={'./assets/home/desktop/image-earphones-yx1.jpg'} alt="" className='lg:w-[540px] md:w-[339px] md:h-[320px] rounded-md ' />
                </div>
                <div className=' lg:w-[540px] md:w-[339px] md:h-[320px] w-[327px] mt-5 md:mt-0 h-[200px] bg-dark-gray rounded-md md:flex md:flex-col md:justify-center md:items-center flex flex-col justify-center items-center'>
                    <h3 className=' text-[28px] font-bold leading-[38.25px] tracking-[2px] text-center'>{data[0].name.slice(0,3)} {data[0].name.slice(13).toUpperCase()}</h3>
                    <Link to='/earphone'>
                        <button className=' lg:bg-light-black lg:text-light-gray w-[160px] h-[48px] mt-[20px] text-[13px] border-dark-black border-solid border-[1px] text-dark-black'  > SEE PRODUCT</button>
                    </Link>
                </div>
            </div>
        </main>
        <ConcSection/>
        
        <Footer/>
       
       
    </div>
  )
}

export default Home
