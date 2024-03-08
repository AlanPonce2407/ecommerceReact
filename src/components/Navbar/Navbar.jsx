import CartWidget from '../CartWidget/CartWidget';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = ({ cartItems, handleEmptyCart }) => {
    const navigate = useNavigate();

    return (
        <header className="bg-gray-900 text-white py-4">
            <div className="container mx-auto flex justify-between items-center">
                <h1 onClick={() => navigate('/')} className="text-red-500 text-lg md:text-xl lg:text-2xl italic hover:cursor-pointer">CyberWolf Electronics</h1>
                <nav className='flex justify-evenly items-center -ml-32'>
                    <Link to="/category/celulares" className="text-lg mx-4 md:mx-5">Celulares</Link>
                    <Link to="/category/tablets" className="text-lg mx-4 md:mx-5">Tablets</Link>
                    <Link to="/category/notebooks" className="text-lg mx-4 md:mx-5">Notebooks</Link>
                </nav>
                <div className='flex flex-col'>
                    <CartWidget cartItems={cartItems} />
                    <button
                        onClick={handleEmptyCart}
                        className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded mt-2">Vaciar carrito</button>
                </div>
            </div>
        </header>
    );
};

export default Navbar;
