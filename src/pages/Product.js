
import React,{useState,useEffect} from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

export default function Product({url, addToCart}) {
  
  const [product, setProduct] = useState(null);

  let params = useParams();
  
  useEffect(() => {
    axios.get(url + 'products/getproduct.php/' + params.productId)
      .then((response) => {
        const json = response.data;
        setProduct(response.data);
      }).catch(error => {
        alert(error.response === undefined ? error : error.response.data.error);
      })
  }, [params])
  
  return (
    // <div>
    //   <div>{product?.name}</div>
    //   {/* <h3>{product?.artist}</h3>
    //   <p>{product?.price}</p> */}
    // </div>
    <div>
      <div className='row' >
      <h3>Products {category}</h3>
      
      
      {product.map(pro => (
        <div key={pro.product_id}>
             {pro.artist}
            {pro.album_name}
            {/* Kuva joka toimii myös linkkinä */}
          <div>
          </div>
          <button className='btn btn-primary' type='button' onClick={e => addToCart(product)}>Osta</button>
          </div>
        
      ))}
    </div>
  
     </div>
  )
}