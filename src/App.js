import './App.css';
import React,{useState,useEffect} from 'react';
import {Routes, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';


function App() {
  return (
    <>
      <Navbar/>
      <div className='container'>
        <h2>Tähän jotain sisältöä</h2>



      </div>
      <Footer/>
    </>
  );
}

export default App;
