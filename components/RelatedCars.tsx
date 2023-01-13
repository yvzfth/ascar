import React from 'react';
import axios from 'axios';
import useSWR from 'swr';
import CarCard from './CarCard'; // import your CarCard component

import { ICar } from '../types';

const RelatedCars = ({ _id }: { _id: string }) => {
  const fetcher = async (url: string) =>
    await axios.get(url).then((res) => res.data);
  const { data, error, isLoading } = useSWR('/api/cars', fetcher, {
    revalidateIfStale: false,
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
  });

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;

  const { cars }: { cars: ICar[] } = data;

  const currentCar = cars.find((car) => String(car?._id) === _id); // get the current car based on its id

  const relatedCars = cars.filter(
    (car) =>
      car.make === currentCar?.make &&
      //   car.model === currentCar!.model &&
      car?._id !== currentCar?._id
  );
  if (relatedCars.length === 0)
    relatedCars.push(cars?.at(Math.floor(Math.random() * cars.length))!);
  return (
    <div className=' bg-[#111111] pt-8  rounded-xl shadow  shadow-emerald-400'>
      <div className=' z-10 py-2 px-4 bg-white shadow'>
        <h3 className='text-xl font-semibold text-gray-800'>Related Cars</h3>
      </div>
      <div className='pb-4/5 overflow-hidden bg-transparent rounded-lg shadow-lg'>
        <div className=' pb-4/5 overflow-hidden bg-transparent rounded-lg shadow-lg'>
          <div className=' bg-transparent rounded-lg shadow-lg'>
            <div className='flex items-center gap-4 w-full px-4 py-10 overflow-x-scroll'>
              {relatedCars.map((car, index) => (
                <CarCard key={index} car={car} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RelatedCars;
