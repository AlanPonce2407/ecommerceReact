import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemList from '../ItemList/ItemList'; 
import { getProducts, getProductsByCategory } from '../../asyncMock';

const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { categoryId } = useParams();

  useEffect(() => {
    setIsLoading(true);
  
    const fetchData = async () => {
      try {
        let fetchedProducts;
        if (!categoryId) {
          fetchedProducts = await getProducts();
        } else {
          fetchedProducts = await getProductsByCategory(categoryId);
        }
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
        <ItemList products={products} />
      )}
    </div>
  );
};

export default ItemListContainer;