import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import CartWidget from './components/CartWidget/CartWidget';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';

const App = () => {
  const [cartItems, setCartItems] = useState([]);

  const handleAddToCart = (count) => {
    setCartItems([...cartItems, count]);
  };
  const handleEmptyCart = () => {
    setCartItems([]);
  };

  return (
    <>
      <BrowserRouter>
        <Navbar>
          <CartWidget cartItems={cartItems} handleEmptyCart={handleEmptyCart} />
        </Navbar>
        <Routes>
          <Route path='/' element={<ItemListContainer greeting={'Bienvenidos'} />} />
          <Route path='/category/:categoryId' element={<ItemListContainer greeting={'Listado de productos filtrados'} />} />
          <Route path='/item/:itemId' element={<ItemDetailContainer handleAddToCart={handleAddToCart} />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
