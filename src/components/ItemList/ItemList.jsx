/* eslint-disable react/prop-types */
import Item from "../Item/Item"
export default function ItemList({ products }) {
  return (
    <div className="itemlist_container">
      {products.map(prod => <Item key={prod.id } {...prod} />)}
    </div>
  )
}