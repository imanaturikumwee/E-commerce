import Home from './components/Home'
import './App.css'
import { Routes, Route } from 'react-router-dom'; 
import CategHeadphones from './components/CategHeadphones';
import CategSpeakers from './components/CategSpeakers';
import CategEarphones from './components/CategEarphones';
import Headphone1 from './components/product/Headphone1';
import HeadPhone2 from './components/product/HeadPhone2';
import HeadPhone3 from './components/product/HeadPhone3';
import Speaker1 from './components/product/Speaker1';
import Speaker2 from './components/product/Speaker2';
import EarPhone from './components/product/EarPhone';
import Cart from './components/product/cart/Cart';
import Checkout from './components/product/checkout/Checkout';

function App() {

  return (

    <Routes>
      <Route exact path='/' element={<Home/>}/>
      <Route exact path='/headphones' element={<CategHeadphones/>}/>
      <Route exact path='/speakers' element={<CategSpeakers/>}/>
      <Route exact path='/earphones' element={<CategEarphones/>}/>
      <Route exact path='/headphone1' element={ <Headphone1/> }/>
      <Route exact path='/headphone2' element={ <HeadPhone2/> }/>
      <Route exact path='/headphone3' element={ <HeadPhone3/> }/>
      <Route exact path='/speaker1' element={ <Speaker1/> }/>
      <Route exact path='/speaker2' element={ <Speaker2/> }/>
      <Route exact path='/earphone' element={ <EarPhone/> }/>
      <Route exact path='/cart' element={ <Cart/> }/>
      <Route exact path='/checkout' element={ <Checkout/> }/>
      
    </Routes>
    
  )
}

export default App
