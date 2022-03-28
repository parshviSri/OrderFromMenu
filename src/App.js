import { useState } from 'react';
import './App.css';
import Header from './Components/Layout/header';
import { Fragment } from 'react';
import Meals from './Components/Meals/Meals';
import Cart from './Components/Cart/Cart';
import CartProvider from './Components/Store/CartProvider';

function App() {
  const [showCartContent, setShowCartContent]= useState(false)
  const openCart= ()=>{
    setShowCartContent(true)
  }
  const closeCartContent =() =>{
    setShowCartContent(false)
  }
  return (
    <CartProvider>
      {showCartContent && <Cart closeCart={closeCartContent}/>}
      <Header onClick={openCart}/>
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
