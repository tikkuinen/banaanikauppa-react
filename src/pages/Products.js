import axios from 'axios';
import React from 'react';
import {useState,useEffect} from 'react';
import { Link, useParams } from 'react-router-dom';
import './Products.css';


export default function Products({url, addToCart}) {
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState('');
  const [name, setName] = useState('');

  // lukee osoitteesta sen idn
  let params = useParams();

  useEffect(() => {
    let address = '';

    if (params.searchPhrase === undefined) {
      address = url + 'products/getproducts.php/' + params.categoryId;
    } else {
      address = url + 'products/searchproducts.php/' + params.searchPhrase;
    }

    axios.get(address)
      .then((response) => {
        const json = response.data;

        if (params.searchPhrase === undefined) {
          setName(json.category);
          setProducts(json.products);
        } else {
          setName(params.searchPhrase);
          setProducts(json);
        }
      }).catch(error => {
        alert(error.response === undefined ? error : error.response.data.error);
      })
  }, [params])

  useEffect(() => {
    axios.get(url + 'products/getproducts.php/' + params.categoryId)
      .then((response) => {
        const json = response.data;
        setProducts(json.products);
        setCategory(json.category);
        //console.log(products);
      }).catch(error => {
        alert(error.response === undefined ? error : error.response.data.error);
      })
  }, [params])
  
  return (  
    <div id='products' className='row' >
      <h3>Products {category}</h3>
      {products.map(product => (
        <div className='col-12 col-md-4 col-lg-4' key={product.product_id}>
          <div>
          {product.artist}
          {product.album_name}
          </div>
          
            {/* Kuva joka toimii myös linkkinä */}
          <div>
            <Link 
              to={'/product/' + product.product_id}>
              <img className= "img fluid" src={url + 'images/' + product.image} alt="tuotekuva"/>
            </Link>
          </div>
          <button className='btn btn-primary' type='button' onClick={e => addToCart(product)}>Osta</button>
        </div>
      ))}
    </div>
  )
}