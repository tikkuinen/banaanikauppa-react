import {React, useEffect, useState} from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import axios from 'axios';

export default function Carousel({url}) {
  const [product, setProduct] = useState([]);

  //hakee taulukkona product-taulusta kaikki
  // useEffect(() => {
  //   axios.get(url + 'products/getrandom.php/')
  //     .then((response) => {
  //       const json = response.data;
  //       setProduct(json);
  //       //console.log(json);
  //     }).catch(error => {
  //       alert(error.response === undefined ? error : error.response.data.error);
  //     })
  // }, [])
  
  // jossain pitäisi arpoa sieltä taulukosta joku rivi
  const randomizer = () => {
    let rand = 0;
    // tähän se satunnaisluku
  }
  
  const handleDragStart = (e) => e.preventDefault();

  const items = [
    <div className='item'>
      <img src={require("../images/kuva1.jpg")} alt="kuva1" onDragStart={handleDragStart} role="presentation" />
    </div>,
    // <div className='item'>
    //   <img src={require(json[randomizer()])} alt="kuva1" onDragStart={handleDragStart} role="presentation" />
    // </div>,
    <div className='item'>
      <img src={require("../images/kuva2.jpg")} alt="kuva2" onDragStart={handleDragStart} role="presentation" />
    </div>,
    <div className='item'>
      <img src={require("../images/kuva3.jpg")} alt="kuva3" onDragStart={handleDragStart} role="presentation" />
    </div>
  ];

  return (
      <div className='App'>
        <AliceCarousel mouseTracking items={items} />
      </div>
  );
}