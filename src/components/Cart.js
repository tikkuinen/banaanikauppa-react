import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

export default function Cart({cart}) {
  //console.log(cart.length);
  return (
    <Link to="/order">
      <FontAwesomeIcon icon={faCartShopping}/>
      <span>{cart.length}</span>
    </Link>
  )
}