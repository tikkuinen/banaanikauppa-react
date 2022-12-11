import {React, useState, useEffect} from 'react'
import Carousel from '../components/Carousel';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './Home.css';



export default function Home({url}) {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios.get(url + 'products/getcategories.php')
      .then((response) => {
        const json = response.data;
        setCategories(json);
        //console.log(json);
      }).catch (error => {
        alert(error.response === undefined ? error : error.response.data.error);
      })
  }, [])


  return (
    <>
    <div className='text'>
      <h1>Tervetuloa Suomen suosituimpaan käytettyjen cd- levyjen verkkokauppaan!</h1>
    </div>
    <Carousel url={url}/>
    <h3>Tuoteryhmät</h3>
    <div className='napit'>
    <table>
      <tbody>
        <tr>
        {categories.map(category => (
          <td key={category.category_id}>
            {<Link
            to={'/products/' + category.category_id}>
            <button className='button'>{category.category_name}</button>
            </Link>} 
          </td>
            ))} 
        </tr>
      </tbody>
    </table>
    </div> 
    </>
    
  )
}
