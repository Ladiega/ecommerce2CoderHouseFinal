import Navbar from "./components/Navbar/Navbar";
import "./App.css";

import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage"
// import Grabados from "./pages/Grabados/Grabados";
import Pinturas from "./pages/Pinturas/Pinturas";
import Merch from "./pages/Merch/Merch";
import ErrorPage from "./pages/ErrorPage/ErrorPage"
import ItemDetailTest from "./pages/ItemDetailTest/ItmeDetailTest";
import ShopTest from "./pages/ShopTest/ShopTest";
// import ItemDetail from "./components/ItemDetail/ItemDetail";

function App() {
  return (
    <Router>

      <main className="App">
        <Navbar />

        {/* <ItemListContainer greeting={'welcome to items list prop'} />
        <ItemCount inital={1} stock={10} onAdd={(quantity) => console.log(`Items agregados al carrito ${quantity} `)} /> */}
      </main>
      <Routes>
        {/* 
        <Route path="/Grabados" element={<Grabados />} />  */}      
        <Route path="/Pinturas" element={<Pinturas />} /> 
        <Route path="/" element={<HomePage />} />
        <Route path="/Merch" element={<Merch />} />
        <Route path="*" element={<ErrorPage />} />
        <Route path="/Detail/:id" element={<ItemDetailTest />} />
        <Route path="/Shop" element={<ShopTest/> } />
      </Routes>

    </Router>
  )
}

export default App
