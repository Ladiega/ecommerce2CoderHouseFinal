/* eslint-disable react/prop-types */
import { useState, useEffect } from "react"
import { getProducts, getProductsByCategory } from "../../../asyncMock";
import ItemList from "../ItemList/ItemList";

import { useParams } from "react-router-dom";

import { getDocs, collection, query, where } from 'firebase/firestore'
import {db} from '../../firebase/firebase'



export default function ItemListContainer({ greeting }) {


  const [products, setProducts] = useState([]);
  useEffect(() => {
    const getIcons = async () => {
      const docs = [];
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        docs.push({ ...doc.data(), id: doc.id });
      });
      setItemsData(docs);
    };
    getIcons()
  },[])
  // const [loading, setLoading] = useState(ture)

  // const { categoryId } = useParams(); 
  

  // useEffect(() => {
  //   setLoading(true)

  //   const collectionRef = categoryId
  //     ? query(collection(db, 'products'), where('categroy', '==', categoryId))
  //     : collection(db, 'products')
    
  //   getDocs(collectionRef)
  //     .then(response => {
  //       const productsAdapted = response.docs.map(doc => {
  //         const data = doc.data()
  //         return { id: doc.id, ...data }
  //       })
  //       setProducts(productsAdapted)
  //     })
  //     .catch(error => {
  //     console.log(error)
  //     })
  //     .finally(() => {
  //     setLoading(false)
  //   })
  // },[categoryId])

  return (
    <div>
      <h1>{greeting}</h1>
      {itemsData.map((items) => {
        return <CardItems itemsData={ items} key={items.id} />
      })}
      <ItemList products={products} />
    </div>
  )
  
}