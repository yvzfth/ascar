import React from 'react';
import CarCard from './CarCard';

import { ICar } from '../types';
import { CarContext } from '../lib/CarContext';

const getRandomElement = (arr: ICar[], current: ICar) => {
  let newArr = arr?.filter((el) => el !== current);
  if (newArr?.length === 0) return;
  let index = Math.floor(Math.random() * newArr?.length);
  return newArr[index];
};

const RelatedCars = ({ _id }: { _id: string }) => {
  const cars = React.useContext(CarContext);
  const currentCar = cars?.find((car) => String(car?._id) === _id); // get the current car based on its id

  const relatedCars = cars?.filter(
    (car) =>
      car?.make === currentCar?.make &&
      //   car.model === currentCar!.model &&
      car?._id !== currentCar?._id
  );
  if (relatedCars?.length === 0)
    relatedCars?.push(getRandomElement(cars!, currentCar!)!);
  return (
    <div className=' bg-[#111111] pt-8  rounded-xl shadow-custom'>
      <div className=' z-10 py-2 px-4 bg-white shadow'>
        <h3 className='text-xl font-semibold text-gray-800'>Benzer Araçlar</h3>
      </div>
      <div className='pb-4/5 overflow-hidden bg-transparent rounded-lg shadow-lg'>
        <div className=' pb-4/5 overflow-hidden bg-transparent rounded-lg shadow-lg'>
          <div className=' bg-transparent rounded-lg shadow-lg'>
            <div className='flex items-center gap-4 px-4 py-10 overflow-x-scroll [&>:first-child]:ml-auto [&>:last-child]:mr-auto'>
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
