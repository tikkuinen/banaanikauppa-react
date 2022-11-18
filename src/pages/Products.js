import axios from 'axios';
import React from 'react';
import {useState,useEffect} from 'react';
import { Link, useParams } from 'react-router-dom';

export default function Products({url, addToCart}) {
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState('');

  // lukee osoitteesta sen idn
  let params = useParams();

  useEffect(() => {
    axios.get(url + 'products/getproducts.php/' + params.categoryId)
      .then((response) => {
        const json = response.data;
        setProducts(json.products);
        setCategory(json.category);
      }).catch(error => {
        alert(error.response === undefined ? error : error.response.data.error);
      })
  }, [params])
  
  return (  
    <div>
      <h3>Products {category}</h3>
      {products.map(product => (
        <div key={product.product_id}>
          {/* Tähän tarvii varmaan jonkun taulukon */}
          {product.album_name}
          {product.artist}
          <button className='btn btn-primary' type='button' onClick={e => addToCart(product)}>Osta</button>
        </div>
      ))}
    </div>
  )
}