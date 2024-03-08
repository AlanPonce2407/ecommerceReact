import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';

const App = () => {
  const [cartItems, setCartItems] = useState(0);

  const handleAddToCart = (count) => {
    setCartItems(prevCartItems => prevCartItems + count);
  };

  const handleEmptyCart = () => {
    setCartItems(0);
  };

  return (
    <>
      <BrowserRouter>
        <Navbar cartItems={cartItems} handleEmptyCart={handleEmptyCart} />
        <Routes>
          <Route path='/' element={<ItemListContainer greeting={'Bienvenidos'} handleAddToCart={handleAddToCart} />} />
          <Route path='/category/:categoryId' element={<ItemListContainer greeting={'Listado de productos filtrados'} handleAddToCart={handleAddToCart} />} />
          <Route path='/item/:itemId' element={<ItemDetailContainer />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
