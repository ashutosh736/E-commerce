import logo from './logo.svg';
import './App.css';
import Products from './components/Products/Products';
import { useState } from 'react';
import CartContext from './context/CartContext';
import FullCart from './components/FullCart/FullCart';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer' ;
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Login from './components/Login/Login';
import Loginhere from './components/Login/Loginhere';
import Cart1 from './components/Cart/Cart';

function App() {
  let [cart, setCart] = useState({});

  function addToCart(product) {
    const newCart = { ...cart }; // copy of state
    if (!newCart[product.id]) {
      newCart[product.id] = { ...product, quantity: 0 };
    }
    newCart[product.id].quantity += 1;
    setCart(newCart);

    console.log(product);
  }

  function removeFromCart(product) {
    console.log(product);
    const newCart = { ...cart };
    if (!newCart[product.id]) return;
    newCart[product.id].quantity -= 1;
    if (newCart[product.id].quantity <= 0) {
      delete newCart[product.id];
    }
    setCart(newCart);
  }

  return (
    <Router>
    <div>
      <Navbar/>
      <Routes>
          <Route path='/cart' element={<FullCart />}/>
          <Route path='/log' element={<Login />}/>
          <Route path='/log1' element={<Loginhere/>}/>
          <Route path='/art1' element={<Cart1/>}/>

          
          
    </Routes>
    <CartContext.Provider value={{cart, addToCart, removeFromCart}}>
      <div className="App">
        
        
      <FullCart />
        <Products />
        
      
      </div>
    </CartContext.Provider>
    
    
    
    
    <Footer/>
    
    
    
    </div>
    </Router>
  );
}

export default App;
