/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import './item.css';
import { Link } from 'react-router-dom';

export default function Item({id, name, img, price, stock}) {
  return (
    <article className='item_container'>
      <header>
        <h2>{name}</h2>
      </header>
      <picture>
        <img src={img} alt={name} />
      </picture>
      <section>
        <p>Price:{price}</p>
        <p>Stock:{stock}</p>
      </section>
      <footer>
        <Link to={`/itme/${id}`}>Ver detalle</Link>
      </footer>
   </article>
  )
  
}