import cart from './assets/cart.svg';
import { CartContext } from '../Context/CartContext';
import { useContext } from 'react';

const CartWidget = () => {
  const { cartItems } = useContext(CartContext);

  const totalItems = cartItems.reduce((total, item) => total + item.count, 0);
  const totalPrice = cartItems.reduce((total, item) => total + item.item.price * item.count, 0);

  return (
    <div>
      <button onClick={() => console.log('Cart clicked')}>
        <img src={cart} className="h-20 w-auto ml-8" />
        Productos: {totalItems} - Total: ${totalPrice}
      </button>
    </div>
  );
};

export default CartWidget;