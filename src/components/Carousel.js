import {React, useEffect, useState} from 'react';
import { Link } from 'react-router-dom'
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import axios from 'axios';
import './Carousel.css';

export default function Carousel({url}) {
  const [product, setProduct] = useState([]);
  //const [image, setImage] = useState("");

  // tässä random luku, menee tohon koodiin

  //(url + 'products/getproducts.php/1')

  // hakee taulukkona product-taulusta yhden, mut pitäiskö olla random kategoria?
  useEffect(() => {
    axios.get(url + 'products/getrandom.php')
      .then((response) => {
        const json = response.data;
        setProduct(json);
        console.log(json);
      }).catch(error => {
        alert(error.response === undefined ? error : error.response.data.error);
      })
  }, [])
  
  const handleDragStart = (e) => e.preventDefault();

  const responsive = {
    0: {
        items: 1
    },
    568: {
        items: 2
    },
    1024: {
        items: 3
    },
  };

  const items = product.map(item => (
    <div className='item'>
      <Link to={'../product/' + item.product_id}>
      <img src={url + 'images/' + item.image} alt="kuva" onDragStart={handleDragStart} role="presentation" />
      </Link>
      <div>
        {item.artist}
      </div>
      <div>
        {item.album_name}
      </div>
    </div>
  ));


  // const items = [
  //   <div className='item'>
  //     <img src={url + 'images/' + image} alt="kuva1" onDragStart={handleDragStart} role="presentation" />
  //   </div>,
  //   <div className='item'>
  //     <img src={url + 'images/' + image} alt="kuva1" onDragStart={handleDragStart} role="presentation" />
  //   </div>,
  //   <div className='item'>
  //     <img src={require("../images/kuva2.jpg")} alt="kuva2" onDragStart={handleDragStart} role="presentation" />
  //   </div>,
  //   <div className='item'>
  //     <img src={require("../images/kuva3.jpg")} alt="kuva3" onDragStart={handleDragStart} role="presentation" />
  //   </div>
  // ];

  return (
      <div className='App'>
        <AliceCarousel 
        mouseTracking 
        items={items} 
        autoPlay={true}
        autoPlayInterval={2000}
        infinite={true}
        paddingLeft={0}
        paddingRight={0}
        responsive={responsive}
        disableButtonsControls={true}
        controlsStrategy={"alternate"}
        />
      </div>
  );
}