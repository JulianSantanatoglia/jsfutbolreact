// IMPORTS
import './App.css';
import NavBar from './components/NavBar/NavBar';
import Banner from './components/Banner/Banner';
import ModalCart from './components/ModalCart/ModalCart';
import Footer from './components/Footer/Footer';
import ItemListContainer from './components/ItemListContainer/ItemListContainer'


// COMPONENTES
function App() {
  return (
    <div className="App">
    <NavBar />
    <Banner slogan={'Vive tu pasión, viste tu equipo'} />
    <ItemListContainer />
    <ModalCart />
    <Footer />
    </div>
  );
}


// EXPORTS
export default App;
