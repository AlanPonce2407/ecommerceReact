// ItemDetailContainer.jsx
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../services/firebase/firebaseConfig";

const ItemDetailContainer = ({ handleAddToCart }) => {
  const [product, setProduct] = useState(null);
  const [error, setError] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchProductById = async () => {
      try {
        const productRef = doc(db, "products", id);
        const productSnapshot = await getDoc(productRef);

        if (productSnapshot.exists()) {
          console.log("Product data:", productSnapshot.data());
          setProduct({ id: productSnapshot.id, ...productSnapshot.data() });
        } else {
          setError("Product not found");
        }
      } catch (error) {
        console.error("Error fetching product:", error);
        setError("An error occurred while fetching the product.");
      }
    };

    fetchProductById();
  }, [id]);

  if (error) {
    return <div className="text-center text-4xl font-bold">{error}</div>;
  }

  return (
    <div className="">
      <h1 className="text-center text-4xl font-bold">Detalle del producto</h1>
      {product && (
        <ItemDetail
          {...product}
          handleAddToCart={handleAddToCart}
        />
      )}
    </div>
  );
};

export default ItemDetailContainer;