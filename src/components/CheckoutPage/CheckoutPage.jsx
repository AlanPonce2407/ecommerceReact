import { useState, useContext } from 'react';
import { CartContext } from '../Context/CartContext';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '../../services/firebase/firebaseConfig';

const CheckoutPage = () => {
  const { cartItems, totalPrice, emptyCart } = useContext(CartContext);
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [confirmEmail, setConfirmEmail] = useState('');
  const [error, setError] = useState('');
  const [orderId, setOrderId] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    console.log('Submitting form...');
    console.log('Email:', email);
    console.log('Confirm Email:', confirmEmail);
    console.log('Cart Items:', cartItems);
  
    // Validate email
    if (email !== confirmEmail) {
      console.log('Email mismatch');
      setError('Las direcciones de email no coinciden');
      return;
    } else {
      console.log('Email match');
      setError('');
    }
  
    // Check if cart is not empty
    if (cartItems.length === 0) {
      console.log('Cart is empty');
      setError('El carrito está vacío.');
      return;
    } else {
      console.log('Cart is not empty');
    }
  
    try {
      const orderRef = await addDoc(collection(db, 'orders'), {
        name,
        lastName,
        email,
        items: cartItems,
        total: totalPrice,
        createdAt: serverTimestamp(),
        status: 'generated',
      });
      setOrderId(orderRef.id);
      emptyCart();
    } catch (error) {
      console.error('Error creating order:', error);
      setError('An error occurred while creating the order');
    }
  };

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-4 text-center">Checkout</h1>
      {cartItems.length > 0 ? (
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
          </div>
          <form onSubmit={handleSubmit} className="mt-8">
            <div className="grid grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Nombre"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="border rounded p-2"
                required
              />
              <input
                type="text"
                placeholder="Apellido"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                className="border rounded p-2"
                required
              />
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="border rounded p-2"
                required
              />
              <input
                type="email"
                placeholder="Confirmar Email"
                value={confirmEmail}
                onChange={(e) => setConfirmEmail(e.target.value)}
                className="border rounded p-2"
                required
              />
            </div>
            {error && <div className="text-red-500 mt-2">{error}</div>}
            <button type="submit" className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 rounded mt-4">
              Place Order
            </button>
          </form>
        </>
      ) : (
        <p className="text-4xl text-gray-600 my-5 text-center">El carrito está vacio.</p>
      )}
      {orderId && (
        <div className="mt-8 text-center">
          <p>Order ID: {orderId}</p>
          <p className="text-green-500">¡Gracias por tu compra!</p>
        </div>
      )}
    </div>
  );
};

export default CheckoutPage;