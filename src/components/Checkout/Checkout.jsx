import { useState } from "react"

export default function Checkout({ onConfirm }) {
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setemail] = useState('')

  const handleConfirm = (event) => {
    event.preventDefalut()

    const userData = {
      name, phone, email
    }
    onConfirm(userData)
  }

  return(
    <div>
      <form onSubmit={handleConfirm}></form>
      <label >
        Nombre
        <input type="text" />
      </label>
    </div>
  )
}