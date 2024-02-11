import { useEffect } from "react"
import { useNavigate } from "react-router-dom"


export default function ErrorPage() {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate('/');
    }, 3000);
  })

  return (
    <main>
      <h1>Error 404</h1>
      <p>Esta pagina no funciona</p>
      <p>En 3 segundos regeresaras al HomePage....</p>

    </main>
  )
}