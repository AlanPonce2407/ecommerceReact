import ItemCount from '../ItemCount/ItemCount';

const ItemList = ({ products, handleAddToCart }) => {
  return (
    <>
      {products.map((product) => (
        <div key={product.id} className="bg-white overflow-hidden shadow rounded-lg m-2">
          <div className="p-4">
            <img src={product.img} alt={product.name} className="w-full h-48 object-contain" />
            <h3 className="flex justify-center text-lg font-medium text-gray-900">{product.name}</h3>
            <p className=" flex justify-center text-gray-500">{product.price + " U$S"}</p>
            <p className="flex justify-center text-gray-500">{product.description}</p>
            <p className="flex justify-center text-gray-500">Unidades en stock: {product.stock}</p>
            <div className="flex justify-center">
              <ItemCount stock={product.stock} initialValue={1} onAdd={(count) => handleAddToCart(count)} />
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default ItemList;
