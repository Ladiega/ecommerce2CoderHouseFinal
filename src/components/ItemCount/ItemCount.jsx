/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState } from "react";
import './ItemCount.css';

export default function ItemCount({stock, inital, onAdd}) {

  const [quantity, setQuantity] = useState(inital);
  
  const increase = () => {
    if (quantity < stock) {
      setQuantity(quantity+1)
    }
  }

  const subtract = () => {
    if (quantity > 1) {
      setQuantity(quantity-1)
    }
  }

  return (
    <div className="counter_container">
      <div className="controls">
        <button onClick={increase}>+</button>
        <h4>Cantidad: {quantity}</h4>
        <button onClick={subtract}>-</button>
      </div>
      <div>
        <button onClick={() => onAdd(quantity)} disabled={!stock}>
          Agregar al carrito
        </button>
      </div>
      Item Count
    </div>
  )
}