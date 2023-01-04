import React, { useEffect, useMemo, useState } from 'react';
import getCars from '../lib/cars';
import CarCard from './CarCard';
import type { Car } from '../types';

const CarsByMake = ({ cars }: { cars: Car[] }) => {
  const makes = new Set(cars.map((car) => car.make));
  const carsByMake: { [key: string]: Car[] } = {};
  for (const make of makes) {
    carsByMake[make] = cars.filter((car) => car.make === make);
  }
  const [selectedMake, setSelectedMake] = useState(cars?.at(0)?.make);
  const [filteredCars, setFilteredCars] = useState<Car[]>(
    carsByMake[selectedMake!]
  );

  useEffect(() => {
    setFilteredCars(carsByMake[selectedMake!]);
  }, [selectedMake]);

  return (
    <div className='bg-[#111111] pt-8 m-4 rounded-xl shadow  shadow-emerald-400'>
      <div className='text-center text-4xl font-extrabold py-8'>
        Popular Makes
      </div>

      <div className='flex flex-col space-y-4 px-4 lg:px-12 w-full'>
        <div className='flex flex-row items-center justify-between  gap-4 px-4 lg:px-12 w-full h-40 overflow-x-scroll'>
          {Object.entries(carsByMake).map(([make, makeCars]) => (
            <div
              className='text-center p-4 border border-gray-400 w-28 min-w-[7rem] rounded-lg'
              key={make}
              onClick={() => setSelectedMake(make)}
            >
              <h2>{make}</h2>
              <p className='text-xs'>{makeCars.length} Araç</p>
            </div>
          ))}
        </div>

        <div className='flex items-center gap-4 w-full px-4 py-10  lg:flex-row overflow-x-scroll'>
          {filteredCars.map((car) => (
            <CarCard key={car.id} car={car} />
          ))}
        </div>
      </div>
    </div>
  );
};

const PopularMakes = () => {
  const cars: Car[] = useMemo(() => getCars(), []);

  return <CarsByMake cars={cars} />;
};

export default PopularMakes;
