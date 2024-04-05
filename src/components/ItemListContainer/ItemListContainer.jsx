import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemList from '../ItemList/ItemList';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../../services/firebase/firebaseConfig';

const ItemListContainer = ({ greeting, handleAddToCart }) => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { categoryId } = useParams();

  useEffect(() => {
    setIsLoading(true);
  
    const fetchData = async () => {
      try {
        const productsCollection = collection(db, 'products');
        let productsQuery;
  
        if (!categoryId) {
          productsQuery = productsCollection;
        } else {
          productsQuery = query(productsCollection, where('category', '==', categoryId));
        }
  
        const querySnapshot = await getDocs(productsQuery);
        const fetchedProducts = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        console.log('Fetched products:', fetchedProducts);
        setProducts(fetchedProducts);
      } catch (error) {
        console.error('Error fetching products:', error);
      } finally {
        setIsLoading(false);
      }
    };
  
    fetchData();
  }, [categoryId]);

  return (
    <div className="container">
      <h1 className="text-center text-6xl font-bold my-8">{greeting}</h1>
      {isLoading ? (
        <p className="text-center">Cargando...</p>
      ) : (
        <ItemList products={products} handleAddToCart={handleAddToCart} detailView={false} />
      )}
    </div>
  );
};

export default ItemListContainer;