import cart from './assets/cart.svg';

const CartWidget = ({ cartItems }) => {
  return (
    <button onClick={() => console.log('Cart clicked')}>
      <img src={cart} className="h-20 w-auto ml-8" />
      Productos: {cartItems}
    </button>
  );
};

export default CartWidget;