// IMPORTS
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemsListContainer/ItemsListContainer';
import ModalCart from './components/ModalCart/ModalCart';
import Footer from './components/Footer/Footer';
import Productos from './components/Productos/Productos';


// COMPONENTES
function App() {
  return (
    <div className="App">
    <NavBar />
    <ItemListContainer slogan={'Vive tu pasión, viste tu equipo'} />
    <Productos />
    <ModalCart />
    <Footer />
    </div>
  );
}


// EXPORTS
export default App;
