import * as React from "react"
import './carditems.css'
import ItemCount from "../ItemCount/ItemCount"
import { Link } from "react-router-dom"

export default function CardItems({ itemsData }) {



  return (

    <article >
      <div className="item_container">
        <div className="item_subcontainer">
          <header>
            <h5>{itemsData.painting}</h5>
          </header>
          <picture>
            <img src={itemsData.img} alt={itemsData.painting} width={150} />
          </picture>
          <section>
            <h5>{itemsData.painting}</h5>
          </section>
          <section>
            <p>Technique: {itemsData.category}</p>
            <p>Stock: {itemsData.stock}</p>
            <p>Price: {itemsData.price}</p>
          </section>

          <footer>
            <button><Link to='/VerDetalles'>Ver detalle</Link>  </button>
          </footer>
        </div>
      </div>
    </article>

  )
}