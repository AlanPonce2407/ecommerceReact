import { Link } from 'react-router-dom';
import ItemCount from '../ItemCount/ItemCount';

const ItemList = ({ products, handleAddToCart, detailView }) => {
  const handleAddToCartFromParent = (count, productId) => {
    handleAddToCart(count, productId);
  };

  return (
    <div className="grid grid-cols-3 gap-4">
      {products.map((product) => (
        <div key={product.id} className="bg-white overflow-hidden shadow rounded-lg">
          <Link to={`/item/${product.id}`} className="block">
            <div className="p-4 flex flex-col items-center">
              <h2 className="text-lg font-semibold">{product.name}</h2>
              <img src={product.img} alt={product.name} className="w-full" />
              <p className="text-gray-600 mt-2">${product.price}</p>
              <p className="text-gray-600">En stock: {product.stock}</p>
            </div>
          </Link>
          {detailView && (
            <div className="p-4">
              <ItemCount
                stock={product.stock}
                initialValue={1}
                onAdd={(count) => handleAddToCartFromParent(count, product.id)}
                handleAddToCart={handleAddToCart}
              />
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default ItemList;