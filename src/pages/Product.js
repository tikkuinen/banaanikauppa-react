import React,{useState,useEffect} from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './Product.css';

export default function Product({url, addToCart}) {
   const [product, setProduct] = useState('');

   let params = useParams();
  
   useEffect(() => {
   
    axios.get(url + 'products/getproduct.php/' + params.productId)
      .then((response) => {
        const json = response.data;
        setProduct(json);
        //console.log(json);
      }).catch(error => {
        alert(error.response === undefined ? error : error.response.data.error);
      }) 
  }, [params])

  
  return (
     <div id='product' className='row' >
      <div>
       <img className= "img fluid" src={url + 'images/' + product.image} alt="kuva"/>
       <p></p>
        <p>{product?.artist}</p>
        <p>{product?.album_name}</p>
        <p>{product?.pub_year }</p>
        <p>{product?.price} €</p>
      </div> 
      <div> 
     <button id='button' className='btn btn-primary' type='button' onClick={e => addToCart(product)}>Osta</button>
   </div>
  </div>
  ) 
}


