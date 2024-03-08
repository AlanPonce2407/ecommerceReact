import ItemCount from '../ItemCount/ItemCount'

const ItemDetail = ({ name, category, img, price, description, stock}) => {
    return (
        <article>
            <header>
                <h2>
                    {name}
                </h2>
            </header>
            <picture>
                <img src={img} alt={name} style={{ width: 100}}/>
            </picture>
            <section>
                <p>
                    Categoria: {category}
                </p>
                <p>
                    Descripción: {description}
                </p>
                <p>
                    Precio: {price}
                </p>
                <p>
                    En stock: {stock}
                </p>
            </section>           
            <footer>    
                <ItemCount />
            </footer>
        </article>
    )
}

export default ItemDetail