import { useState } from "react";

const ItemCount = ({ initialValue = 1, stock, onAdd }) => {
  const [count, setCount] = useState(initialValue);

  const decrement = () => {
    if (count > initialValue) {
      setCount(count - 1);
    }
  };

  const increment = () => {
    if (count < stock) {
      setCount(count + 1);
    }
    if (count == 0) {
      setCount(count)
    }
  };

  const handleAddToCart = () => {
    console.log("handleAddToCart type:", typeof onAdd);
    console.log("handleAddToCart value:", onAdd);
    if (count > 0) {
      onAdd(count);
    }
    
  };

  return (
    <div className="inline-flex mx-auto">
      <button
        className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded mx-2"
        onClick={decrement}
      >
        -
      </button>
      <span className="py-2">{count}</span>
      <button
        className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded mx-2"
        onClick={increment}
      >
        +
      </button>
      <button
        className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded ml-2"
        onClick={handleAddToCart}
      >
        <span>Agregar al carrito</span>
      </button>
    </div>
  );
};

export default ItemCount;