import { useState, useEffect } from "react";

// import ItemListContainer from "../../components/ItemListContainer/ItemListContainer";

import CardItems from "../../components/CardItems/CardItems";

//Firebase
import { db } from '../../firebase/firebase';
import { collection, query, getDocs } from 'firebase/firestore'

const App = () => {
  const [itemsData, setItemsData] = useState([]);
  useEffect(() => {
    const getIcons = async () => {
      const q = query(collection(db, 'items'));
      const docs = [];
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        // console.log(doc.id, " =>", doc.data());
        docs.push({ ...doc.data(), id: doc.id });
      });
      setItemsData(docs);
    };

    getIcons();
  }, []);

  return (
   
      <main>         
        {/* <ItemListContainer greeting={''} /> */}
        {itemsData.map((items) => {
          return <CardItems itemsData={items} key={items.id} />
        })}

      </main>
    
  )
};
export default App
