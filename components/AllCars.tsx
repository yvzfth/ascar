import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

import CarCard from './CarCard';
import { CarContext } from '../lib/CarContext';
import { ICar } from '../types';
import _ from 'lodash';
const AllCars = () => {
  const router = useRouter();
  const cars = React.useContext(CarContext);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedMake, setSelectedMake] = useState(router.query?.make ?? '');
  const [selectedYear, setSelectedYear] = useState('');
  const [filteredCars, setFilteredCars] = useState<ICar[]>(cars);

  const minPrice = router.query?.minPrice || 0;
  const maxPrice = router.query?.maxPrice || 100000000;

  useEffect(() => {
    !_.isEmpty(cars) &&
      setFilteredCars(
        cars.filter(
          (car) =>
            car.make.toLowerCase().includes(searchQuery.toLowerCase()) &&
            (selectedMake === '' || car.make === selectedMake) &&
            (selectedYear === '' || car.year === parseInt(selectedYear)) &&
            Number(minPrice) <= car.price &&
            Number(maxPrice) >= car.price
        )
      );
  }, [cars, searchQuery, selectedMake, selectedYear]);
  if (_.isEmpty(cars)) return <div>Loading</div>;
  return (
    <div className='flex flex-col justify-center w-full items-center'>
      <div className='flex flex-col md:flex-row md:items-center md:justify-center gap-4 p-4  m-4  bg-[#111111]  rounded-xl shadow-custom'>
        <div className='relative rounded-md shadow-sm '>
          <input
            id='search'
            className='form-input py-2 pl-10 w-full leading-5 rounded-md transition duration-150 ease-in-out sm:text-sm'
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
              'py-2 pl-2 w-1/2 leading-5 rounded-md transition duration-150 ease-in-out sm:text-sm sm:leading-5'
            }
            onChange={(e) => setSelectedMake(e.target.value)}
          >
            <option value={''}>Tüm Markalar</option>
            {Array.from(new Set(cars.map((car) => car.make))).map((make) => (
              <option key={make} value={make}>
                {make}
              </option>
            ))}
          </select>
          <select
            value={selectedYear}
            className={
              'py-2 pl-2 w-1/2 leading-5   rounded-md transition duration-150 ease-in-out sm:text-sm sm:leading-5'
            }
            onChange={(e) => setSelectedYear(e.target.value)}
          >
            <option value={''}>Tüm Modeller</option>
            {Array.from(new Set(cars.map((car) => car.year))).map((year) => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className='flex flex-wrap gap-8 items-center justify-center  bg-[#111111] p-8 m-4 rounded-xl shadow-custom'>
        {filteredCars?.map((car, index) => (
          <div key={index}>
            <CarCard car={car} />
          </div>
        ))}
      </div>
    </div>
  );
};
export default AllCars;
