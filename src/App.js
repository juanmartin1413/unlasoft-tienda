import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {
  return (
    <div className="container">
      <NavBar/>
      <ItemListContainer greeting="Tp N° 4 Contador con boton"/>
    </div>
  );
}

export default App;
