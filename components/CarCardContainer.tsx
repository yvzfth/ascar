import React from 'react';
import CarCard from './CarCard';

const CarCardContainer = () => {
  return (
    <div className='flex items-center justify-between w-full p-20 gap-10'>
      <CarCard />
      <CarCard />
      <CarCard />
      <CarCard />
    </div>
  );
};

export default CarCardContainer;
