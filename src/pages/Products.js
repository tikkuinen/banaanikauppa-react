import axios from 'axios';
import React from 'react'
import { useEffect, useState } from 'react'

export default function Products(url) {
  const [products, setProducts] = useState([]);


  useEffect(() => {
    axios.get(url + 'products/getgategories.php/')
      .then((response) => {
        const json = response.data;
        console.log(json);
      }).catch(error => {
        alert(error.response === undefined ? error : error.response.data.error);
      })
  }, [])
  
  return (
    <div>Products</div>
  )
}
