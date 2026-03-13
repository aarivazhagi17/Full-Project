// src/App.jsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartProvider } from './contexts/CartContext';
import Home from "./pages/Home";
import ProductList from './pages/ProductList';
import CartPage from './pages/CartPage';
import Contact from './pages/Contact';
import Navbar from './Navbar';
import OrdersPage from './pages/OrdersPage';
import Order from './pages/Order';

function App() {

  return (
    <CartProvider>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path="/ProductList" element={<ProductList  />} />
          <Route path="/cart" element={<CartPage />} /> 
          <Route path='/order'element={<Order/>}/>
          <Route path="/Contact" element={<Contact />} />
          <Route path='/OrdersPage' element={<OrdersPage/>} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
