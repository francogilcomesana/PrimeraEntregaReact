import './App.css';
import Navbar from './Components/Navbar/Navbar';
import ItemListContainer from './Components/itemListContainer/ItemListContainer';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemCount from "./Components/ItemCount/ItemCount";

function App() {
  return (
    <div className="App">
      <Navbar />
      <ItemListContainer greeting="Bienvenido a mi tienda"/>
      <ItemCount initial={1} stock={10} onAdd={(quantity) => console.log(`Cantidad Agregada`, quantity)}/> 
      </div>
  );
}

export default App;
