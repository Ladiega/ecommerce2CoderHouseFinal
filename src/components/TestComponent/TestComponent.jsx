import { useState, useEffect } from "react"
import CardItemsTest from "../CardItemsTest/CardItemsTest";

import { db } from "../../firebase/firebase"
import { collection, query, getDocs, where} from "firebase/firestore"



export default function TestComponent() {
  const [itemsData, setItemsData] = useState([]);

  useState(() => {
    const getItems  = async () => {
      const q = query(
        collection(db, 'items')
        
      );
      const docs = [];
      const querySanpshot = await getDocs(q);
      querySanpshot.forEach((doc) => {
        // console.log(doc.id, '=>', doc.data())
        docs.push({ ...doc.data(), id: doc.id });
      })
      setItemsData(docs);
    }
    getItems();
   
  }, []);

  return (
    <div className="grid_items">
      
      {itemsData.map((items) => {
        return (
            <CardItemsTest itemsData={items} key={items.id}/>
        )
      })}
    

    </div>
  )
}