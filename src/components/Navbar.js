import axios from 'axios'
import React from 'react'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Cart from './Cart'

export default function Navbar({url,cart}) {
  const [categories, setCategories] = useState([]);
  // tulee taulukkona ne kategoriat backista


  useEffect(() => {
    axios.get(url + 'products/getcategories.php')
      .then((response) => {
        const json = response.data;
        setCategories(json);
      }).catch (error => {
        alert(error.response === undefined ? error : error.response.data.error);
      })
  }, [])

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
              {/*  Tuotteet */}
              <li className='nav-item dropdown'>
                <a className='nav-link dropdown-toggle' href="#" id="dropdown01" 
                data-bs-toggle="dropdown" aria-expanded="false">Tuotteet</a>
                <ul className='dropdown-menu' aria-labelledby='dropdown01'>
                  {categories.map(category => (
                    <li key={category.id}>
                      {<Link 
                        className='dropdown-item'
                        to={'/products/' + category.id}>{category.name}
                      </Link>}
                    </li>
                  ))}
                </ul>
              </li>
              <li className="nav-item">
                <Link className='nav-link' to='/about'>Tietoa meistä</Link>
              </li>
            </ul>
            {/* Ostoskori */}
            <ul className='navbar-nav ml-auto'>
              <li className='nav-item'>
                <Cart cart={cart}/>
              </li>
            </ul>

          </div>
        </div>
      </nav>
    </>
  )
}
