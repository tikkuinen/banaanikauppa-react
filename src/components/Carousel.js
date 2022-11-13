import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

export default function Carousel(){
const handleDragStart = (e) => e.preventDefault();

const items = [
  <img src="../images/kuva1.jpg" onDragStart={handleDragStart} role="presentation" />,
  <img src="../images/kuva2.jpg" onDragStart={handleDragStart} role="presentation" />,
  <img src="../images/kuva3.jpg" onDragStart={handleDragStart} role="presentation" />,

];

console.log(items.length);
  return (
    const Gallery = () => {
    return (
      <AliceCarousel mouseTracking items={items} />
    );
  })

}