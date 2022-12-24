import React from 'react';
import getCars from '../lib/cars';
import CarWidget from './CarWidget';

const PopularMakes = () => {
  const cars = getCars();
  return (
    <div>
      <div className='text-center text-4xl font-extrabold'>Popular Makes</div>
      <div className='flex items-center justify-between w-full px-20 py-10 gap-10 flex-col lg:flex-row overflow-x-scroll'>
        {cars.map((car, index) => (
          <CarWidget key={index} car={car} />
        ))}
      </div>
    </div>
  );
};

export default PopularMakes;
