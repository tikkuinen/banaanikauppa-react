import './App.css';
import {Routes, Route} from 'react-router-dom';
import { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';


// tässä pitää olla se omalla koneella oleva polku php-kansioon
const URL = 'http://localhost/banaanikauppa/';

function App() {
  // ostoskori määritellään täällä tilamuuttujana, jotta sitä voidaan käyttää muissa komponenteissa
  const [cart, setCart] = useState([]);

  // ja tallennetaan ostoskoria jotenkin
  function addToCart(product) {
    const newCart = [...cart.product];
    setCart(newCart);
    localStorage.setItem('cart',JSON.stringify(newCart));
  }

  return (
    <>
      <Navbar url={URL}/>
      <div className='container'>
        <Routes>
            <Route path='/' element= {<Home />}/>
            <Route path='/products' element= {<Products url={URL} />}/>
            <Route path='/about' element= {<About />}/>
        </Routes>
      </div>
      <Footer/>
    </>
  );
}

export default App;
