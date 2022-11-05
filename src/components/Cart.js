import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

export default function Cart() {
  return (
    <Link to="">
      <FontAwesomeIcon icon={faCartShopping} />
      <span style={{color: '#fff'}}></span>
    </Link>
  )
}
