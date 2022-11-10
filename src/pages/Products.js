import axios from 'axios';
import React from 'react'
import { useEffect, useState } from 'react'

export default function Products() {
  const [products, setProducts] = useState([]);


  useEffect(() => {
    axios.get(url + 'products/getproducts.php/')
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
