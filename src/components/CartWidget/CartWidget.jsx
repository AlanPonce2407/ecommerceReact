import cart from './assets/cart.svg';

const CartWidget = ({ cartItems }) => {
  const totalItems = cartItems.reduce((total, item) => total + item.count, 0);

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