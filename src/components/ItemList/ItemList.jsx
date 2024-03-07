const ItemList = ({ products }) => {
  return (
    <>
      {products.map((product) => (
        <div key={product.id} className="bg-white overflow-hidden shadow rounded-lg">
          <div className="p-4">
            <img src={product.img} alt={product.name} className="w-full h-48 object-contain" />
            <h3 className="flex justify-center text-lg font-medium text-gray-900">{product.name}</h3>
            <p className=" flex justify-center text-gray-500">{product.price + " U$S"}</p>
          </div>
        </div>
      ))}
    </>
  );
};

export default ItemList;