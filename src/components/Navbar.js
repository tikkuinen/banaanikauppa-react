import React from 'react'
import { Link } from 'react-router-dom'
import Cart from './Cart'

export default function Navbar() {



  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Levykauppa</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className='nav-link' to='/'>Etusivu</Link>
              </li>
              <li className="nav-item">
                <Link className='nav-link' to='/products'>Tuotteet</Link>
              </li>
              <li className="nav-item">
                <Link className='nav-link' to='/about'>Tietoa meistä</Link>
              </li>
            </ul>
            <ul className='navbar-nav ml-auto'>
            <li className='nav-item'>
              <Cart/> 
            </li>
            </ul>

          </div>
        </div>
      </nav>
    </>
  )
}
