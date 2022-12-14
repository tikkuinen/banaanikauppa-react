import './App.css';
import {Routes, Route} from 'react-router-dom';
import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import Order from './pages/Order';
import Product from './pages/Product';
import AddCategory from './pages/AddCategory';

// tässä pitää olla se omalla koneella oleva polku php-kansioon
const URL = 'http://localhost/banaanikauppa-php/';

function App() {
  const [cart, setCart] = useState([]);

  // estää ostoskorin tyhjenemisen kun sivu ladataan uudelleen
  useEffect(() => {
    if ('cart' in localStorage) {
      setCart(JSON.parse(localStorage.getItem('cart')));
    }
  }, [])
  
  function addToCart(product) {
    if (cart.some(item => item.product_id === product.product_id)) {
      const existingProduct = cart.filter(item => item.product_id === product.product_id);
      updateAmount(parseInt(existingProduct[0].amount) +1,product);
    }
    else {
      product['amount'] = 1;
      const newCart = [...cart,product];
      setCart(newCart);
      localStorage.setItem('cart',JSON.stringify(newCart));
    }
  }

  function removeFromCart(product) {
    const itemsWithoutRemoved = cart.filter(item => item.product_id !== product.product_id);
    setCart(itemsWithoutRemoved);
    localStorage.setItem('cart',JSON.stringify(itemsWithoutRemoved));
  }

  function removeAll() {
    setCart([]);
  }

  function updateAmount(amount,product) {
    product.amount = amount;
    const index = cart.findIndex((item => item.product_id === product.product_id));
    const modifiedCart = Object.assign([...cart],{[index]: product});
    setCart(modifiedCart);
    localStorage.setItem('cart',JSON.stringify(modifiedCart));
  }

  return (
    <>
      <Navbar url={URL} cart={cart}/>
      <div className='container'>
        <Routes>
            <Route path='/' element= {<Home url={URL}/>}/>
            <Route path='/products/:categoryId' element= {<Products url={URL} addToCart={addToCart} />}/>
            <Route path='/search/:searchPhrase' element= {<Products url={URL} addToCart={addToCart}/>}/>
            <Route path="/product/:productId" element={<Product url={URL} addToCart={addToCart} />}/>
            <Route path='/order' element= {<Order
              url={URL} 
              cart={cart} 
              removeFromCart={removeFromCart} 
              updateAmount={updateAmount}
              removeAll={removeAll}/>}
              />
            <Route path='/about' element= {<About />}/>
            <Route path='/addcategory' element= {<AddCategory url={URL} />}/>
        </Routes>
      </div>
      <Footer/>
    </>
  );
}

export default App;
