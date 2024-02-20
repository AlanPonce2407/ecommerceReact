import CartWidget from '../CartWidget/CartWidget'

const Navbar = () => {

    return (
        <header className="bg-gray-900 text-white py-4">
            <div className="container mx-auto flex justify-between items-center">
                <h4 className="text-red-500 text-lg md:text-xl lg:text-2xl italic">CyberWolf Electronics</h4>
                <nav className='flex justify-evenly items-center -ml-32'>
                    <a className="text-lg mx-4 md:mx-5" href="#">Celulares</a>
                    <a className="text-lg mx-4 md:mx-5" href="#">Tablets</a>
                    <a className="text-lg mx-4 md:mx-5" href="#">Notebooks</a>
                </nav>
                <CartWidget />
            </div>
        </header>
    )
}

export default Navbar