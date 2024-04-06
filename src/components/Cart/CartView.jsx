import { Link } from 'react-router-dom';
import { CartContext } from '../Context/CartContext';
import { useContext } from 'react';

const CartView = () => {
  const { cartItems, totalPrice } = useContext(CartContext);

  return (
    <div className="container mx-auto py-8">
      <h2 className="text-3xl font-bold mb-4 text-center">Carrito</h2>
      {cartItems.length === 0 ? (
        <p className="text-4xl text-gray-600 my-5 text-center">Tu carrito está vacío.</p>
      ) : (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cartItems.map((item, index) => (
              <div key={index} className="bg-white shadow-md rounded-lg overflow-hidden">
                <div className="flex">
                  <img src={item.item.img} alt={item.item.name} className="w-48 h-48 object-contain p-1" />
                  <div className="p-4">
                    <h3 className="text-lg font-semibold mb-2">{item.item.name}</h3>
                    <p className="text-gray-600 mb-2">Categoría: {item.item.category}</p>
                    <p className="text-gray-600 mb-2">Precio: ${item.item.price}</p>
                    <p className="text-gray-600 mb-2">Cantidad: {item.count}</p>
                    <p className="text-gray-600 font-semibold">Subtotal: ${item.item.price * item.count}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 flex justify-between items-center">
            <p className="text-xl font-bold">Total: ${totalPrice}</p>
            {cartItems.length > 0 && (
              <Link to="/checkout" className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 rounded">
                Comprar ahora
              </Link>
            )}
          </div>
        </>
      )}
      <div className="text-center mt-8">
        <Link to="/" className="text-4xl text-gray-600 underline hover:text-red-500">
          Continuá comprando
        </Link>
      </div>
    </div>
  );
};

export default CartView;