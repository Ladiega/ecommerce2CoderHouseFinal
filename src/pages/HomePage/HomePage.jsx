import '../../App.css';
import { Link } from "react-router-dom"
import ItemDetailContainer from "../../components/ItemDetalContianer/ItemDetalContainer"
import TestComponent from '../../components/TestComponent/TestComponent';
export default function HomePage() {
  return (
    <main className="home_container" >
      HomePage
      <TestComponent/>
<h1><Link to='/Merch'>Click aca Merch</Link></h1>
      {/* <ItemDetailContainer/> */}
    </main>
  )
}