import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../services/firebase/firebaseConfig";

const ItemDetailContainer = ({ handleAddToCart }) => {
  const [product, setProduct] = useState(null);
  const { itemId } = useParams(); 
  console.log(itemId); 

  useEffect(() => {
    const fetchProductById = async () => {
      try {
        const productRef = doc(db, "products", itemId);
        const productSnapshot = await getDoc(productRef);

        if (productSnapshot.exists()) {
          setProduct({ id: productSnapshot.id, ...productSnapshot.data() });
        } else {
          console.error("Product not found");
        }
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };

    fetchProductById();
  }, [itemId]);

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
