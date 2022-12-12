import React,{useState,useEffect} from 'react';
import uuid from 'react-uuid';
import axios from 'axios';
import './Order.css';
//import { createRef } from 'react/cjs/react.production.min';

export default function Order({url,cart,removeFromCart,updateAmount, removeAll}) {
  const [inputs,_] = useState([]);
  const [inputIndex, setInputIndex] = useState(-1);

  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [address, setAddress] = useState('');
  const [zip, setZip] = useState('');
  const [city, setCity] = useState('');
  const [telnro, setTelnro] = useState('');
  const [finished, setFinished] = useState(false);

  useEffect(() => {
    for (let i = 0;i < cart.length;i++) {
      inputs[i] = React.createRef();
    }
  }, [cart.length,inputs])
  
  useEffect(()=> {
    if (inputs.length > 0 && inputIndex > -1 && inputs[inputIndex].current !== null) {
      inputs[inputIndex].current.focus();
    }
  },[cart,inputs,inputIndex])

  function order(e) {
    e.preventDefault();

    const json = JSON.stringify({
      firstname: firstname,
      lastname: lastname,
      address: address,
      zip: zip,
      city: city,
      telnro: telnro,
      cart: cart,
    });
    axios.post(url + 'order/save.php',json,{
      headers: {
        'Accept': 'application/json',
        'Content-Type' : 'application/json'
      }
    })
    .then(() => {
      removeAll();
      setFinished(true);
    }).catch(error => {
      alert(error.response === undefined ? error : error.response.data.error);
    });
  }

  function changeAmount(e,product,index) {
    updateAmount(e.target.value,product);
    setInputIndex(index);
  }

  let sum = 0;

  if (finished === false) {
    return (
      <div>
        <h3 className="header">Ostoskori</h3>
        <table className="table">
          <tbody>
            {cart.map((product,index) => {
              sum+=parseFloat(product.price) * parseInt(product.amount);
              return (
                <tr key={uuid()}>
                  <td>{product.artist} {product.album_name}</td>
                  <td>{product.price} €</td>
                  <td>
                    <input type="number" ref={inputs[index]} style={{width: '60px'}} value={product.amount} onChange={e => changeAmount(e,product,index)} />
                  </td>
                  <td><button type="button" className="btn-close" aria-label="Close" onClick={() => removeFromCart(product)}></button></td>
                  {/* <td><a href="#" onClick={() => removeFromCart(product)}>Poista</a></td> */}
                </tr>
              )
              })}
            <tr key={uuid()}>
              <td></td>
              <td>{sum.toFixed(2)} €</td>
              <td><button type="button" id="empty" className="btn btn-dark" onClick={() => removeAll()}>Tyhjennä</button></td>
              <td></td>
            </tr>
          </tbody>
        </table>
        {cart.length > 0 && 
          <>
            <h3 className='header'>Asiakkaan tiedot</h3>
            <form onSubmit={order}>
              <div className='form-group'>
                <label>Etunimi:</label>
                <input className='form-control' onChange={e => setFirstname(e.target.value)}/>
              </div>
              <div className='form-group'>
                <label>Sukunimi:</label>
                <input className='form-control' onChange={e => setLastname(e.target.value)}/>
              </div>
              <div className='form-group'>
                <label>Osoite:</label>
                <input className='form-control' onChange={e => setAddress(e.target.value)}/>
              </div>
              <div className='form-group'>
                <label>Postinumero:</label>
                <input className='form-control' onChange={e => setZip(e.target.value)}/>
              </div>
              <div className='form-group'>
                <label>Kaupunki:</label>
                <input className='form-control' onChange={e => setCity(e.target.value)}/>
              </div>
              <div className='form-group'>
                <label>Puhelin:</label>
                <input className='form-control' onChange={e => setTelnro(e.target.value)}/>
              </div>
              <div className='buttons'>
                <button className='btn btn-primary'>Tilaa</button>
              </div>
            </form>
          </>
        }
      </div>
    )
  } else {
    return (<h3>Kiitoksia tilauksestasi!</h3>);
  }
}