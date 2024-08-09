// IMPORTS
import './App.css'
import NavBar from './components/NavBar/NavBar'
import Banner from './components/Banner/Banner'
import ModalCart from './components/ModalCart/ModalCart'
import Footer from './components/Footer/Footer'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'


// COMPONENTES
function App() {
  return (
    <div className="App">

    <BrowserRouter>
    <NavBar />
    <Banner slogan={'Vive tu pasión, viste tu equipo'} />
    <Routes>
    <Route path='/' element={<ItemListContainer />}/>
    <Route path='/category/:categoryId' element={<ItemListContainer />}/>
    <Route path='/item/:itemId' element={<ItemDetailContainer />}/>
    <Route path='*' element={<h1 className="error-404">Lo siento, esta página no existe</h1>}/>
    </Routes>
    </BrowserRouter>
    <ItemListContainer />
    <ItemDetailContainer />
    <ModalCart />
    <Footer />

    </div>
  );
}


// EXPORTS
export default App;
