import React from 'react';
import FormPopup from '../../components/FormPopup';
import { CarContext } from '../../lib/CarContext';
import _ from 'lodash';

const AdminDashboard = () => {
  const cars = React.useContext(CarContext);

  return (
    <div className='bg-gray-200 min-h-screen flex flex-col mt-[5.5rem]'>
      <main className='container mx-auto px-6'>
        <div className='flex justify-between items-center py-4'>
          <h2 className='text-xl font-bold text-gray-900 '>Cars</h2>
          <FormPopup />
        </div>
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
            {!_.isEmpty(cars) &&
              cars?.map((car: any, index: number) => (
                <tr key={index + car?.make}>
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
