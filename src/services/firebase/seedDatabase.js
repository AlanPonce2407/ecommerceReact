import { collection, addDoc } from 'firebase/firestore';
import { db } from './firebaseConfig';
import { products } from '../../asyncMock.js'

export const seedDatabase = async () => {
    const productsCollection = collection(db, 'products');
  
    try {
      for (const product of products) {
        await addDoc(productsCollection, product);
      }
      console.log('Database seeded successfully!');
    } catch (error) {
      console.error('Error seeding database:', error);
    }
  };

seedDatabase();