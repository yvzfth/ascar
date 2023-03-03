import React from 'react';
import FormPopup from '../../components/FormPopup';
import { CarContext } from '../../lib/CarContext';
import _ from 'lodash';
import { Button } from '@mui/material';
import axios from 'axios';

const AdminDashboard = () => {
  const cars = React.useContext(CarContext);

  return (
    <div className='bg-gray-200 min-h-screen flex flex-col mt-[5.5rem]'>
      <main className='container mx-auto px-6'>
        <div className='flex justify-between items-center py-4'>
          <h2 className='text-xl font-bold text-gray-900 '>Cars</h2>
          <FormPopup />
        </div>
        <div className='m-4'>
          <div className='w-full overflow-x-scroll rounded-xl '>
            <table className='w-full text-gray-700'>
              <thead className='rounded'>
                <tr className='bg-sky-500'>
                  <th className='px-4 py-2'>Marka</th>
                  <th className='px-4 py-2'>Model</th>
                  <th className='px-4 py-2'>Yıl</th>
                  <th className='px-4 py-2'>Yakıt</th>
                  <th className='px-4 py-2'>Vites</th>
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
                        <Button
                          color='error'
                          variant='contained'
                          onClick={() =>
                            axios
                              .delete('/api/cars', { data: car?._id })
                              .then(() =>
                                alert(
                                  'Araç Silindi:\n' +
                                    car?._id +
                                    '\n' +
                                    car?.make +
                                    '\n' +
                                    car?.model +
                                    '\n' +
                                    car?.year +
                                    '\n' +
                                    car?.fuelType +
                                    '\n' +
                                    car?.transmission
                                )
                              )
                          }
                        >
                          SİL
                        </Button>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AdminDashboard;
