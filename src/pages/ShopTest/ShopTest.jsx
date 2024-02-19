import { useState } from "react";

import { TextField } from "@mui/material";

import { collection, addDoc } from "firebase/firestore";
import { db } from '../../firebase/firebase';


const initialState = {
  name: "",

  city:"",
}

export default function ShopTest() {
  
  const [values, setValues] = useState(initialState);
  console.log(values);

  const onChange = (e) => {
    const { value, name } = e.target;
    setValues({ ...values, [name]: value });
  };

  const onSubmit = async (e) => {
    e.preventDafault();
    console.log(values);

    const docRef = await addDoc(collection(db, "cities"), {
      name: "Tokyo",
      country: "Japan"
    });
    console.log("Document written with ID: ", docRef.id);
  }
  
  
  return (
    <div>
      <form onSubmit={onSubmit}>
        <TextField
          id="name"
          placeholder="Name"
          name="name"
          value={values.name}
          onChange={onChange}
          required
        />

       
        <TextField
          id="city"
          placeholder="city"
          name="city"
          value={values.city}
          onChange={onChange}
          required
        />

        <button >Send</button>
      </form>

    </div>
  )
}