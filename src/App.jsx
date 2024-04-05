import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import CartView from './components/Cart/CartView';
import CartPage from './components/Cart/CartPage';
import { CartProvider, CartContext } from './components/Context/CartContext';
import { useContext } from 'react';
import CheckoutPage from './components/CheckoutPage/CheckoutPage';

const App = () => {
  return (
    <CartProvider>
      <RoutesWithContext />
    </CartProvider>
  );
};

const RoutesWithContext = () => {
  const { addToCart } = useContext(CartContext);

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<ItemListContainer greeting={'Bienvenidos'} />} />
        <Route path='/category/:categoryId' element={<ItemListContainer greeting={'Listado de productos filtrados'} />} />
        <Route path='/item/:id' element={<ItemDetailContainer handleAddToCart={addToCart} />} />
        <Route path='/cart' element={<CartView />} />
        <Route path='/cart' element={<CartPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;