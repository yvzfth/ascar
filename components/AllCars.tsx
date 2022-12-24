import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { useEffect, useMemo } from 'react';
import type { Car } from '../types';
import getCars from '../lib/cars';
import CarCard from './CarCard';

const AllCars = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedMake, setSelectedMake] = useState('');
  const [selectedYear, setSelectedYear] = useState('');
  const [filteredCars, setFilteredCars] = useState<Car[]>([]);
  const router = useRouter();
  const cars: Car[] = useMemo(() => getCars(), []);

  useEffect(() => {
    setFilteredCars(
      cars.filter(
        (car) =>
          car.make.toLowerCase().includes(searchQuery.toLowerCase()) &&
          (selectedMake === '' || car.make === selectedMake) &&
          (selectedYear === '' || car.year === parseInt(selectedYear))
      )
    );
  }, [searchQuery, selectedMake, selectedYear, cars]);

  return (
    <div className='flex flex-col justify-center w-full items-center'>
      <div className='flex flex-col space-y-4 px-12 max-w-[50rem]  min-w-[20rem]'>
        <div className='relative rounded-md shadow-sm '>
          <input
            id='search'
            className='form-input py-2 pl-10 block w-full leading-5 rounded-md transition duration-150 ease-in-out sm:text-sm sm:leading-5'
            placeholder='Search cars'
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
            <svg
              className='h-5 w-5 text-gray-400'
              viewBox='0 0 20 20'
              fill='currentColor'
            >
              <path
                fillRule='evenodd'
                d='M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z'
                clipRule='evenodd'
              />
            </svg>
          </div>
        </div>
        <div className='flex gap-8'>
          <select
            value={selectedMake}
            className={
              'py-2 pl-10 block w-1/2 leading-5 rounded-md transition duration-150 ease-in-out sm:text-sm sm:leading-5'
            }
            onChange={(e) => setSelectedMake(e.target.value)}
          >
            <option value=''>All Makes</option>
            {Array.from(new Set(cars.map((car) => car.make))).map((make) => (
              <option key={make} value={make}>
                {make}
              </option>
            ))}
          </select>
          <select
            value={selectedYear}
            className={
              'py-2 pl-10 block w-1/2 leading-5 rounded-md transition duration-150 ease-in-out sm:text-sm sm:leading-5'
            }
            onChange={(e) => setSelectedYear(e.target.value)}
          >
            <option value=''>All Years</option>
            {Array.from(new Set(cars.map((car) => car.year))).map((year) => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className='flex flex-wrap p-20 gap-8 items-center justify-center w-full'>
        {filteredCars.map((car) => (
          <div key={car.id} onClick={() => router.push(`/cars/${car.id}`)}>
            <CarCard car={car} />
          </div>
        ))}
      </div>
    </div>
  );
};
export default AllCars;
