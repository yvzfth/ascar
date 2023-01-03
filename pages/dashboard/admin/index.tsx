import { useEffect, useState } from 'react';
import firebase from 'firebase/app';
import 'firebase/firestore';
import { addDoc, collection, getDocs } from 'firebase/firestore';
import { db } from '../../../firebase';
const AdminDashboard = () => {
  const [cars, setCars] = useState([]);

  //   useEffect(() => {
  //     const fetchData = async () => {
  //       const db = firebase.firestore();
  //       const data = await db.collection('cars').get();
  //       setCars(data.docs.map((doc) => doc.data()));
  //     };
  //     fetchData();
  //   }, []);
  async function asyncFirestore() {
    try {
      const docRef = addDoc(collection(db, 'users'), {
        first: 'Ada',
        last: 'Lovelace',
        born: 1815,
      });
      console.log('Document written with ID: ', (await docRef).id);
    } catch (e) {
      console.error('Error adding document: ', e);
    }
    try {
      const docRef = addDoc(collection(db, 'users'), {
        first: 'Alan',
        middle: 'Mathison',
        last: 'Turing',
        born: 1912,
      });

      console.log('Document written with ID: ', (await docRef).id);
    } catch (e) {
      console.error('Error adding document: ', e);
    }
    const querySnapshot = await getDocs(collection(db, 'users'));
    querySnapshot.forEach((doc) => {
      console.log(`${doc.id} => ${doc.data()}`);
    });
  }
  asyncFirestore();

  return (
    <div className='bg-gray-200 min-h-screen flex flex-col'>
      <header className='bg-white shadow-md'>
        <div className='container mx-auto px-6 py-4'>
          <h1 className='text-2xl font-bold text-gray-900'>Admin Dashboard</h1>
        </div>
      </header>
      <main className='container mx-auto px-6 py-8'>
        <h2 className='text-xl font-bold text-gray-900 mb-6'>Cars</h2>
        <table className='w-full text-gray-700'>
          <thead>
            <tr className='bg-gray-400'>
              <th className='px-4 py-2'>Make</th>
              <th className='px-4 py-2'>Model</th>
              <th className='px-4 py-2'>Year</th>
              <th className='px-4 py-2'>Fuel Type</th>
              <th className='px-4 py-2'>Transmission</th>
              <th className='px-4 py-2'></th>
            </tr>
          </thead>
          <tbody>
            {/* {cars.map((car) => (
              <tr key={car.id}>
                <td className='px-4 py-2'>{car.make}</td>
                <td className='px-4 py-2'>{car.model}</td>
                <td className='px-4 py-2'>{car.year}</td>
                <td className='px-4 py-2'>{car.fuelType}</td>
                <td className='px-4 py-2'>{car.transmission}</td> 
                <td className='px-4 py-2 flex items-center'>
                  <button className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded'>
                    Delete
                  </button>
                </td>
              </tr>
            ))} */}
          </tbody>
        </table>
      </main>
    </div>
  );
};

export default AdminDashboard;
