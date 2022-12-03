import {React, useState, useEffect} from 'react'
import Carousel from '../components/Carousel';
import axios from 'axios';
import { Link } from 'react-router-dom';


export default function Home({url}) {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios.get(url + 'products/getcategories.php')
      .then((response) => {
        const json = response.data;
        setCategories(json);
        console.log(json);
      }).catch (error => {
        alert(error.response === undefined ? error : error.response.data.error);
      })
  }, [])


  return (
    <>
    <Carousel url={url}/>
    <h3>Tässä tuoteryhmät?</h3>
    <table>
      <tbody>
      
        <tr>
        {categories.map(category => (
          <td key={category.category_id}>
            {<Link
            to={'/products/' + category.category_id}>{category.category_name}
            </Link>}
          </td>
            ))}
        </tr>
      </tbody>
    </table>

    </>
    
  )
}
