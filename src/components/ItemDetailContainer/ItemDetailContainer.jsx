import { useState, useEffect } from "react"
import { getProductById } from "../../asyncMock"
import { useParams } from "react-router-dom"
import ItemDetail from "../ItemDetail/ItemDetail"

const ItemDetailContainer = ({ handleAddToCart }) => {
    const [product, setProduct] = useState(null)
    const { itemId } = useParams()

    useEffect(() => {
        getProductById(itemId)
            .then(response => {
                setProduct(response)
            })
    }, [itemId])

    return (
        <div className="">
            <h1 className="text-center text-4xl font-bold">Detalle del producto</h1>
            {product && <ItemDetail {...product} handleAddToCart={handleAddToCart} />}
        </div>
    )
}

export default ItemDetailContainer
