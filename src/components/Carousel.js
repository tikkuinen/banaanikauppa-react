import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

export default function Carousel() {
  const handleDragStart = (e) => e.preventDefault();

  const items = [
    <div className='item'>
      <img src={require("../images/kuva1.jpg")} alt="kuva1" onDragStart={handleDragStart} role="presentation" />
    </div>,
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