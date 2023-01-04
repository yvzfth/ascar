import { useEffect, useState } from 'react';
import { Collection, MongoClient } from 'mongodb';
import type { Car } from '../../../types';
import { GetServerSideProps } from 'next';
import { InferGetServerSidePropsType } from 'next';
import mongoose from 'mongoose';
const getServerSideProps: GetServerSideProps = async (context) => {
  try {
    await mongoose.connect(process.env?.MONGO_DB_URI!);
    console.log('MongoDB connected');
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
  const carSchema = new mongoose.Schema<Car>();

  const CarModel = mongoose.model('Car', carSchema);
  const cars = await CarModel.find({});
  console.log(cars);
  return {
    props: {
      data: cars,
    },
  };
};
const AdminDashboard = ({
  data,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const [cars, setCars] = useState<Car[]>(data);
  useEffect(() => {
    setCars(data);
  }, [data]);
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
            {/* {cars?.length === 0
              ? null
              : cars?.map((car) => (
                  <tr key={car?.make}>
                    <td className='px-4 py-2'>{car?.make}</td>
                    <td className='px-4 py-2'>{car?.model}</td>
                    <td className='px-4 py-2'>{car?.year}</td>
                    <td className='px-4 py-2'>{car?.fuelType}</td>
                    <td className='px-4 py-2'>{car?.transmission}</td>
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
