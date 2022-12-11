import axios from "axios";
import {useState} from "react";
import CategoryList from "../components/CategoryList";
import './AddCategory.css';


export default function ManageCategories({url}) {
  const [newCategory, setNewCategory] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [addingCategory, setAddingCategory] = useState(false);

  function saveCategory(e) {
    e.preventDefault();
    const json =JSON.stringify({category_name: newCategory});
    axios.post(url + 'products/addcategory.php', json,{
      headers: {
        'Content-type' : 'application/json'
      }
    })
    .then((response) => {
      setNewCategory('');
      setAddingCategory(false);
      setSelectedCategory(response.data);
    }).catch(error =>{
      alert(error.response === undefined ? error : error.response.data.error);
    })
  }

  if (!addingCategory) {
    return (
      <>
        <h2>Hallitse tuoteryhmiä</h2>
        <div className="tuoteryhma">
          <label>Tuoteryhmä</label><br></br>
          <CategoryList
            url={url}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
          />
          <br></br>
          <button className="button" type='button' onClick={()=> setAddingCategory(true)}>Lisää</button>
        </div>
      </>
    )
  } else {
    return (
      <>
      <h2> Lisää uusi tuoteryhmä</h2>
      <div className='keskita'>
      <form onSubmit={saveCategory}>
        <div className='tuoteryhma'>
          <label> Tuoteryhmän nimi</label>
          <br></br>
          <input type="text" value={newCategory} onChange={(e) => setNewCategory(e.target.value)}/>
        </div> 
        <button className="button" onClick={() => setAddingCategory(false)}>Peruuta</button>
        <button className="button">Tallenna</button>
        
      </form>
      </div>
      </>
    )
  }
}