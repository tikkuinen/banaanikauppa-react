import './App.css';
import React,{useState,useEffect} from 'react';
import {Routes, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';

// tässä pitää olla se omalla koneella oleva polku php-kansioon
const URL = 'http://localhost/banaanikauppa/';

function App() {
  return (
    <>
      <Navbar url={URL}/>
      <div className='container'>
        <Routes>
            <Route path='/' element= {<Home />}/>
            <Route path='/products' element= {<Products />}/>
            <Route path='/about' element= {<About />}/>
        </Routes>
      </div>
      <Footer/>
    </>
  );
}

export default App;
