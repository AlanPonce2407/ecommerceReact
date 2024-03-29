import { Link } from 'react-router-dom';
import { CartContext } from '../Context/CartContext';
import { useContext } from 'react';

const CartView = () => {
    const { cartItems, emptyCart } = useContext(CartContext);

    return (
        <div className="container mx-auto py-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Carrito</h2>
            {cartItems.length === 0 ? (
                <p className="text-4xl text-gray-600 my-5">Tu carrito está vacío.</p>
            ) : (
                <>
                    <ul className="mb-4">
                        {cartItems.map((item, index) => (
                            <li key={index} className="text-lg mb-2">
                                {item.item.name} - Quantity: {item.count}
                            </li>
                        ))}
                    </ul>
                    <button
                        onClick={emptyCart}
                        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                    >Carrito vacío</button>
                </>
            )}
            <Link to='/' className="text-4xl text-gray-600 my-5 underline hover:text-red-500">Continuá comprando</Link>
        </div>
    );
};

export default CartView;