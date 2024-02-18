import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import CardItemsTest from "../../components/CardItemsTest/CardItemsTest";

//firebase call
import { collection, query, getDocs, where, documentId} from "firebase/firestore";
import { db } from "../../firebase/firebase";

import { Link } from "react-router-dom";
export default function ItemDetailTest() {
  
  const [itemsData, setItemsData] = useState([]);
  const { id } = useParams();
  console.log (id)

  useEffect(() => {
    const getItems = async () => {
      const q = query(
        collection(db, 'items'),
        where(documentId(), "==", id)

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

  }, [id]);

  return (
    <div className="grid_items">

      {itemsData.map((items) => {
        return (
          <Link to={`/Detail/${items.id}`} key={items.id}>
            <CardItemsTest itemsData={items} key={items.id} />
          </Link>
        )
      })}


    </div>
  )
};


