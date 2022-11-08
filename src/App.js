import './App.css';
import React,{useState,useEffect} from 'react';
import {Routes, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';


function App() {
  return (
    <>
      <Navbar/>
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
