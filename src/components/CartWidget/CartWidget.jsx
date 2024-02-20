import cart from './assets/cart.svg'

const CartWidget = () => {
    return (
        <button>
            <img src={cart} className="h-20 w-auto"/>
            1
        </button>
    )
}

export default CartWidget