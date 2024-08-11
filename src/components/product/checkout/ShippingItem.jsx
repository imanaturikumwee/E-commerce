import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
function ShippingItem() {
    const { item, itemNumber, increaseItem, decreaseItem} = useContext(CartContext);
    const total = item?.reduce(((sum, data)=> sum + (data.price*itemNumber[`id${data.id}`])),0);
    const vart= (total*0.2).toFixed(2);
    const shipping = (50).toFixed(2)
    const grand = (total + parseFloat(vart) + parseFloat(shipping)).toFixed(2);
  return (
    <div className=''>

       <div className={`${window.innerWidth<=820? 'block': 'hidden'} bg-white`}>
            <div className=" mx-8 flex gap-[2rem] flex-col" >
                <h1 className="py-2">THANK YOU FOR YOUR ORDER</h1>
                <p>You will receive an email confirmation shortly.</p>
               <div className=" flex flex-col md:flex-row w-full">
                    <div className=" px-5 bg-gray rounded-t-md rounded-l-none md:rounded-l-md md:rounded-tr-none w-full">
                        <div  className={`flex justify-between items-center my-5 `}>
                            <div className='h-[64px] w-[64px] bg-gray flex items-center justify-center rounded-md'>
                                <img src={`./${item[0]?.image.mobile}`} alt="img" className='w-[36.19px]' />
                            </div>
                            <div >
                                <h1>{item[0]?.name==="XX99 Mark I Headphones"? "XX99 MK I": item[0]?.name==="XX99 Mark II Headphones"? "XX99 MK II" : item[0]?.name==="XX59 Headphones"? 'XX59' :item[0]?.name.slice(0,3)}</h1>
                                <p>$ {item[0]?.price}</p>
                            </div>
                            <div className='flex'>
                                <span className='block w-[25px]  '>x</span>
                                <span className='block w-[25px] '>{itemNumber[`id${item[0]?.id}`]}</span>
                                
                            </div>
                            
                        </div>
                        <hr className=" text-light-black"/>
                        <div className="text-center py-5">
                            <p>And {item.length -1} other item{'(s)'} </p>
                        </div>
                    </div>
                    <div className=" bg-light-black text-white pl-[2rem] py-[2rem] rounded-b-md md:rounded-bl-none md:rounded-r-md w-full ">
                        <h3 className=" py-2 text-opacity-[.8] text-dark-gray">GRAND TOTAL</h3>
                        <span>$ {grand}</span>
                    </div>
                </div>
                <Link to='/'>
                    <button className=" text-white font-bold leading-[17.76px] tracking-[1px] text-[13px] w-full h-[48px] bg-dark-orange active:bg-light-orange">GO BACK TO HOME</button>
                </Link>
            </div>
        </div>


        <div className={`${window.innerWidth<=820? 'hidden': 'block'}  mx-8 `}> 
            <div className="flex">
                <div className="flex flex-col bg-gray w-full rounded-l-md">
                    {
                    item.map((data, index)=>{
                            return(
                                <div key={index} className={`flex justify-between items-center py-2 `}>
                                    <div className='h-[64px] w-[64px] bg-gray flex items-center justify-center rounded-md'>
                                    <img src={`./${data.image.mobile}`} alt="img" className='w-[36.19px]' />
                                    </div>
                                    <div >
                                        <h1>{data.name==="XX99 Mark I Headphones"? "XX99 MK I": data.name==="XX99 Mark II Headphones"? "XX99 MK II" : data.name==="XX59 Headphones"? 'XX59' :data.name.slice(0,3)}</h1>
                                        <p>$ {data.price}</p>
                                    </div>
                                    <div className='flex'>
                                        <span className='block w-[25px] '>x</span>
                                        <span className='block w-[25px] '>{itemNumber[`id${data.id}`]}</span>
                                        
                                    </div>
                                </div>
                            )
                        })
                        
                    }
                    <hr className=" text-light-black text-opacity-[.4] mx-2"/>
                    <div className="mx-2 text-center">
                        <p>View less</p>
                    </div>
                </div>
                <div className=" bg-light-black text-white pl-[2rem] py-[2rem] rounded-b-md md:rounded-bl-none md:rounded-r-md w-full flex flex-col justify-end ">
                    <h3 className=" py-2 text-opacity-[.8] text-dark-gray">GRAND TOTAL</h3>
                    <span>$ {grand}</span>
                </div>
            </div>
            <Link to='/'>
                <button className=" text-white font-bold leading-[17.76px] tracking-[1px] text-[13px] w-full h-[48px] bg-dark-orange active:bg-light-orange mt-8">GO BACK TO HOME</button>
            </Link>

        </div>
      
    </div>
  )
}

export default ShippingItem
