import { useContext } from 'react';
import { CartContext } from '../Context/CartContext';
import { Link } from 'react-router-dom';

const CartPage = () => {
  const { cartItems } = useContext(CartContext);

  if (cartItems.length === 0) {
    return (
      <div>
        <h2>Carrito</h2>
        <p>Tu carrito está vacío.</p>
        <Link to='/'>Continuá comprando</Link>
      </div>
    );
  }
};

export default CartPage;