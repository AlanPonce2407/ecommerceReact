import cart from './assets/cart.svg';
import { CartContext } from '../Context/CartContext';
import { useContext } from 'react';

const CartWidget = () => {
  const { cartItems: contextCartItems } = useContext(CartContext)

  const totalItems = contextCartItems ? contextCartItems.reduce((total, item) => total + item.count, 0) : 0;


  return (
    <div>
      <button onClick={() => console.log('Cart clicked')}>
        <img src={cart} className="h-20 w-auto ml-8" />
        Productos: {totalItems}
      </button>

    </div>
  );
};

export default CartWidget;