import { useState } from "react"
import ItemCount from "../ItemCount/ItemCount"
import { Link } from "react-router-dom"
import { CartContext } from "../../Context/CartContext";

export default function ItemDetail({ id, name, img, category, description, price, stock }) {
  const [quantityAdded, setQuantyAdded] = useState(0);

  const handleOnAdd = (quantity) => {
    setQuantyAdded(quantity)

    const item = {
      id, name, price
    }
    addItem(item,quantity)
  }

  return (
    <article>
      <header>
        <h2>{ name}</h2>
      </header>
      <picture>
        <img src={img} alt={name} width={200} />
      </picture>
      <section>
        <p>
          Categoria:{category}
        </p>
        <p>Descripcion:{description}</p>
        <p>Precio:{price}</p>
      </section>
      <footer>
        {
          quantityAdded > 0 ? (
            <Link to='/cart' >Terminar Compra</Link>
          ) : (
                      <ItemCount inital={2} stock={stock} onAdd={(quantity)=>console.log (`cantindad agregada: ${quantity}`)} />

          )
        }
      </footer>
    </article>
  )
}