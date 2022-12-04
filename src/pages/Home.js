import React from 'react'
import Carousel from '../components/Carousel';
import './Home.css';



export default function Home({url}) {
  return (
    <>
    <Carousel url={url}/>
    <h3>Jotain muuta</h3>
    </>
  )
}
