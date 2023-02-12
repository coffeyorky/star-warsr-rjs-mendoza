import './App.css';
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./pages/ItemListContainer/ItemListContainer";
import ItemDetailConteiner from './pages/ItemDetailConteiner/ItemDetailConteiner';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CartProvider from './context/cartProvider';
import Cart from './pages/Cart/Cart';


function App() {

  return (
     <BrowserRouter>
     <CartProvider>
      <NavBar />
     <Routes>
       <Route path="/" element={<ItemListContainer/>} />
       <Route path="/category/:category" element={<ItemListContainer/>} />
       <Route path="item/:id" element={<ItemDetailConteiner />} />
       <Route path="cart" element={<Cart />} />
     </Routes>
     
     
     </CartProvider>
     
     </BrowserRouter>

  );
}

export default App;
