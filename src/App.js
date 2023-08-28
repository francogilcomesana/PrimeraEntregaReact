import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import ItemListContainer from './Components/itemListContainer/ItemListContainer';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemCount from "./Components/ItemCount/ItemCount";
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/category/:categoryId" element={<ItemListContainer />}/>
        <Route path="/item/:itemId" element={<ItemDetailContainer />}/>
        <Route path="*" element={<h1>404 NOT FOUND</h1>} />
      </Routes>
      </BrowserRouter>
      <ItemListContainer greeting="Bienvenido a mi tienda"/>
      <ItemDetailContainer />
      <ItemCount initial={1} stock={10} onAdd={(quantity) => console.log(`Cantidad Agregada`, quantity)}/> 
      </div>
  );
}

export default App;