// ItemDetail.jsx
import ItemCount from '../ItemCount/ItemCount';

const ItemDetail = ({ id, name, category, img, price, description, stock, handleAddToCart }) => {
  const isOutOfStock = stock === 0;

  const addToCart = (count) => {
    if (typeof handleAddToCart === 'function') {
      handleAddToCart(
        { id, name, price, count, img },
        count
      );
    } else {
      console.error('handleAddToCart is not a function');
    }
  };

  return (
    <div className="max-w-4xl mx-auto my-8 bg-white shadow-md rounded-md overflow-hidden p-5">
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="p-4">
          <img src={img} alt={name} className="w-full h-auto" />
        </div>
        <div className="p-4">
          <h2 className="text-2xl font-bold mb-2">{name}</h2>
          <p className="text-gray-600 mb-2">Categoría: {category}</p>
          <p className="text-gray-800 mb-4">{description}</p>
          <p className="text-lg font-bold mb-2">Precio: ${price}</p>
          <p className="text-gray-600 mb-4">Stock: {isOutOfStock ? 'No hay stock' : stock}</p>
          {!isOutOfStock && (
            <ItemCount
              stock={stock}
              initialValue={1}
              onAdd={addToCart}
              className="mb-4"
            />
          )}
          {isOutOfStock && (
            <p className="text-red-500 mb-4">Producto agotado</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;