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
  }, [selectedMake, cars]);

  return (
    <>
      <div className='text-center text-4xl font-extrabold pb-8'>
        Popular Makes
      </div>

      <div className='flex flex-col space-y-4 px-12 w-full'>
        {/* <select
          value={selectedMake}
          className={
            'py-2 pl-10 mx-auto w-1/2 leading-5 rounded-md transition duration-150 ease-in-out sm:text-sm sm:leading-5'
          }
          onChange={(e) => setSelectedMake(e.target.value)}
        >
          
          {Array.from(new Set(cars.map((car) => car.make))).map(
            (make, index) => (
              <option key={make} value={make}>
                {make}
              </option>
            )
          )}
        </select> */}
        <div className='flex flex-row items-center justify-between  gap-4 px-12 w-full h-40 overflow-x-scroll'>
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

        <div className='flex items-center justify-between w-full px-20 py-10 gap-10  lg:flex-row overflow-x-scroll'>
          {filteredCars.map((car) => (
            <CarCard key={car.id} car={car} />
          ))}
        </div>
      </div>
    </>
  );
};

const PopularMakes = () => {
  const cars: Car[] = useMemo(() => getCars(), []);

  return <CarsByMake cars={cars} />;
};

export default PopularMakes;
