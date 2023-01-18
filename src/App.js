import './App.css';
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./pages/ItemListContainer/ItemListContainer";
import ItemDetailConteiner from './pages/ItemDetailConteiner/ItemDetailConteiner';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {

  return (
     <BrowserRouter>
     <NavBar />
     <Routes>
       <Route path="/" element={<ItemListContainer/>} />
       <Route path="item/:id" element={<ItemDetailConteiner />} />
     </Routes>
     </BrowserRouter>


  );
}

export default App;
