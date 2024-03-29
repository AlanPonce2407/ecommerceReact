import  { useContext } from 'react';
import { CartContext } from '../Context/CartContext';
import { Link } from 'react-router-dom';

const CartPage = () => {
  const { cartItems, emptyCart } = useContext(CartContext);

  const handleEmptyCart = () => {
    emptyCart();
  };

  return (
    <div>
      <h2>Carrito</h2>
      {cartItems.length === 0 ? (
        <p>Tu carrito está vacío.</p>
      ) : (
        <>
          <ul>
            {cartItems.map((item, index) => (
              <li key={index}>
                {item.item.name} - Quantity: {item.count}
              </li>
            ))}
          </ul>
          <button onClick={handleEmptyCart}>Empty Cart</button>
        </>
      )}
      <Link to='/'>Continuá comprando</Link>
    </div>
  );
};

export default CartPage;