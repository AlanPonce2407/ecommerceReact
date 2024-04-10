import { createContext, useState, useEffect } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const storedCartItems = localStorage.getItem('cartItems');
    if (storedCartItems) {
      setCartItems(JSON.parse(storedCartItems));
      calculateTotalPrice(JSON.parse(storedCartItems));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
    calculateTotalPrice(cartItems);
  }, [cartItems]);

  const calculateTotalPrice = (items) => {
    const total = items.reduce((acc, item) => acc + item.item.price * item.count, 0);
    setTotalPrice(total);
  };

  const addToCart = (itemData, count) => {
    setCartItems((prevItems) => [...prevItems, { ...itemData, count }]);
  };

  const removeFromCart = (itemId) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== itemId));
  };

  const emptyCart = () => {
    setCartItems([]);
    setTotalPrice(0);
    localStorage.removeItem('cartItems');
  };

  return (
    <CartContext.Provider value={{ cartItems, totalPrice, addToCart, removeFromCart, emptyCart }}>
      {children}
    </CartContext.Provider>
  );
};