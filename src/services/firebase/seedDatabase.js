import { collection, addDoc } from 'firebase/firestore';
import { db } from './firebaseConfig.js';
import { products } from '../../asyncMock.js'

export const seedDatabase = async () => {
  const productsCollection = collection(db, 'products');
  
  try {
    for (const product of products) {
      const docRef = await addDoc(productsCollection, product);
      console.log('Document written with ID: ', docRef.id);
    }
    console.log('Database seeded successfully!');
  } catch (error) {
    console.error('Error seeding database:', error);
  }
};

seedDatabase();
