import ItemCount from '../ItemCount/ItemCount';

const ItemDetail = ({ name, category, img, price, description, stock, handleAddToCart }) => {
    const addToCart = (count) => {
        if (typeof handleAddToCart === 'function') {
            handleAddToCart(count);
        } else {
            console.error('handleAddToCart is not a function');
        }
    };

    return (
        <article>
            <header>
                <h2>{name}</h2>
            </header>
            <picture>
                <img src={img} alt={name} style={{ width: '100%', maxWidth: '500px' }} />
            </picture>
            <section>
                <p>Categoria: {category}</p>
                <p>Descripción: {description}</p>
                <p>Precio: ${price}</p>
                <p>En stock: {stock}</p>
            </section>
            <footer>
                <ItemCount 
                    stock={stock} 
                    initialValue={1} 
                    onAdd={addToCart} 
                />
            </footer>
        </article>
    );
};

export default ItemDetail;