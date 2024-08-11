import React, { createContext, useState } from 'react';
import data from '../data.json'

export const CartContext = createContext();

const CartProvider = ({ children }) => {
    const [item, setItem]= useState([]);
    const addItem=(id)=>{
        if(!item.includes(data[id])){
            setItem((prevItem) => ([...prevItem, data[id]]))
        }
        
    }

    const removeItem=()=>{
        setItem([]);
        setItemNumber(defaultItems);
    }
  const defaultItems ={
    id1: 1,
    id2: 1,
    id3: 1,
    id4: 1,
    id5: 1,
    id6: 1,
  }
  const [itemNumber, setItemNumber] = useState(defaultItems);

  const increaseItem = (id) => {
    setItemNumber((prevItem) => ({ ...prevItem, [id]: prevItem[id] + 1 }));
  };

  const decreaseItem = (id) => {
    if (itemNumber[id] > 1) {
      setItemNumber((prevItem) => ({ ...prevItem, [id]: prevItem[id] - 1 }));
    }
  };

  const [cartDisplay, setCartDisplay]= useState(false)

  const toggleDisplay=()=>{
    if(!cartDisplay){
        setCartDisplay(true)
    } else{
        setCartDisplay(false)
    }
  }

  const removeCart=()=>{
    if(cartDisplay){
        setCartDisplay(false)
    }
  }

  const [menu, setMenu]= useState(false);

  const toggleMenu=()=>{
    if(!menu){
        setMenu(true)
    } else{
        setMenu(false)
    }
  }

  const scrollToTop=()=> {
    window.scrollTo({ top: 0, behavior: 'smooth' }); // Smooth scrolling
  }

  const [confirm, setConfirm] = useState(false)
   const toggleConfirm=()=>{
    if(!confirm){
      setConfirm(true);
      scrollToTop();
    }else{
      setConfirm(false);
      scrollToTop();
    }
   }

   const removeConfirm=()=>{
    if(confirm){
      setConfirm(false)
    }
   }


  return (
    <CartContext.Provider value={{ item, itemNumber, cartDisplay, menu, confirm, 
    increaseItem, decreaseItem, addItem, removeItem, toggleDisplay , removeCart, 
    toggleMenu, toggleConfirm, removeConfirm}}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;



