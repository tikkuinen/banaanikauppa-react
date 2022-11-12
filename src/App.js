import './App.css';
import {Routes, Route} from 'react-router-dom';
import { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';


// tässä pitää olla se omalla koneella oleva polku php-kansioon
const URL = 'http://localhost/webshop2022-master/';

function App() {
  // lifting state up, jotta kaikki voi käyttää alaspäin ostoskorin komponenttia
  const [cart, setCart] = useState([]);

  function addToCart(product) {
    const newCart = [...cart,product];
    setCart(newCart);
    localStorage.setItem('cart',JSON.stringify(newCart));
  }

  return (
    <>
      <Navbar url={URL} cart={cart}/>
      <div className='container'>
        <Routes>
            <Route path='/' element= {<Home />}/>
            <Route path='/products/:categoryId' element= {<Products url={URL} addToCart={addToCart} />}/>
            <Route path='/about' element= {<About />}/>
        </Routes>
      </div>
      <Footer/>
    </>
  );
}

export default App;
