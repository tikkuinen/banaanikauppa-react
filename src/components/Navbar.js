import axios from 'axios'
import React from 'react'
import { useState, useEffect } from 'react'
import { Link, Navigate } from 'react-router-dom'
import Cart from './Cart'
import './Navbar.css'


export default function Navbar({url,cart}) {
  const [categories, setCategories] = useState([]);
  // tulee taulukkona ne kategoriat backista
  const[search, setSearch] = useState('');


  useEffect(() => {
    axios.get(url + 'products/getcategories.php')
      .then((response) => {
        const json = response.data;
        setCategories(json);
      }).catch (error => {
        alert(error.response === undefined ? error : error.response.data.error);
      })
  }, [])

  // Hakufunktio
  function executeSearch(e) {
    if (e.charCode === 13) {
      e.preventDefault();
      Navigate('/search/' + search);
      console.log(search);
    }
  }

  return (
    <>
      <nav id='navbar' className="navbar navbar-expand-md navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href='/'>Banskulevyt</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav me-auto mb-2 mb-md-0">
              {/* <li className="nav-item">
                <Link className='nav-link' to='/'>Etusivu</Link>
              </li> */}
              <li className='nav-item dropdown'>
                <a className='nav-link dropdown-toggle' href="#" id="dropdown01" 
                data-bs-toggle="dropdown" aria-expanded="false">Tuotteet</a>
                <ul className='dropdown-menu' aria-labelledby='dropdown01'>
                  {categories.map(category => (
                    <li key={category.category_id}>
                      {<Link 
                        className='dropdown-item'
                        to={'/products/' + category.category_id}>{category.category_name}
                      </Link>}
                    </li>
                  ))}
                </ul>
              </li>
              <li className="nav-item">
                <Link className='nav-link' to='/about'>Tietoa meistä</Link>
              </li>
              <li className="nav-item">
                <Link className='nav-link' to='/addcategory'>Admin</Link>
              </li>
            </ul>
            <form className="form-inline my-2 my-lg-0">
              <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              onKeyDown={(e) => executeSearch(e)}
              className="form-control mr-sm-2"
              type="search"
              placeholder="Hae tuotteista"
              aria-label="Search" />
            </form>
            <div className='cart'>
                <Cart cart={cart}/>
            </div>

          </div>
        </div>
      </nav>
    </>
  )
}
