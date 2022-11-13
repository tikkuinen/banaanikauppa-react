import './App.css';
import {Routes, Route} from 'react-router-dom';
import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import Order from './pages/Order';


// tässä pitää olla se omalla koneella oleva polku php-kansioon
const URL = 'http://localhost/webshop2022-master/';

function App() {
  // lifting state up, jotta kaikki voi käyttää alaspäin ostoskorin komponenttia
  const [cart, setCart] = useState([]);

  // tämä estää ostoskorin tyhjenemisen kun sivu ladataan uudelleen
  useEffect(() => {
    if ('cart' in localStorage) {
      setCart(JSON.parse(localStorage.getItem('cart')));
    }
  }, [])
  

  function addToCart(product) {
    const newCart = [...cart,product];
    setCart(newCart);
    localStorage.setItem('cart',JSON.stringify(newCart));
  }

  function removeFromCart(product) {
    const itemsWithoutRemoved = cart.filter(item => item.id !== product.id);
    setCart(itemsWithoutRemoved);
    localStorage.setItem('cart',JSON.stringify(itemsWithoutRemoved));
  }

  function updateAmount(amount,product) {
    product.amount = amount;
    const index = cart.findIndex((item => item.id === product.id));
    const modifiedCart = Object.assign([...cart],{[index]: product});
    setCart(modifiedCart);
    localStorage.setItem('cart',JSON.stringify(modifiedCart));
  }

  return (
    <>
      <Navbar url={URL} cart={cart}/>
      <div className='container'>
        <Routes>
            <Route path='/' element= {<Home />}/>
            <Route path='/products/:categoryId' element= {<Products url={URL} addToCart={addToCart} />}/>
            <Route path='/order' element= {<Order cart={cart} removeFromCart={removeFromCart} updateAmount={updateAmount}/>}/>
            <Route path='/about' element= {<About />}/>
        </Routes>
      </div>
      <Footer/>
    </>
  );
}

export default App;
