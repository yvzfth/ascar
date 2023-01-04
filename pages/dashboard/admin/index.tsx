import React from 'react';

import axios from 'axios';
import useSWR from 'swr';

const AdminDashboard = () => {
  const fetcher = async (url: string) =>
    await axios.get(url).then((res) => res.data);
  const { data, error, isLoading } = useSWR('/api/cars', fetcher, {
    revalidateIfStale: false,
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
  });

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;

  const { cars } = data;

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
            {cars?.length === 0
              ? null
              : cars?.map((car: any) => (
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
                ))}
          </tbody>
        </table>
      </main>
    </div>
  );
};

export default AdminDashboard;
