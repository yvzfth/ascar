import React, { useState } from 'react';
import { useEffect, useMemo } from 'react';
import { ICar } from '../types';
import axios from 'axios';
import useSWR from 'swr';
// import getCars from '../lib/cars';
import CarCard from './CarCard';
import { useRouter } from 'next/router';

const AllCars = () => {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedMake, setSelectedMake] = useState(router.query?.make ?? '');
  const [selectedYear, setSelectedYear] = useState('');
  const fetcher = async (url: string) =>
    await axios.get(url).then((res) => res.data);
  const { data, error, isLoading } = useSWR('/api/cars', fetcher, {
    revalidateIfStale: false,
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
  });
  const minPrice = router.query?.minPrice || 0;
  const maxPrice = router.query?.maxPrice || 100000000;
  // useEffect(() => {
  //   // const cars: ICar[] = useMemo(() => getCars(), []);

  //     setFilteredCars(
  //       cars.filter(
  //         (car) =>
  //           car.make.toLowerCase().includes(searchQuery.toLowerCase()) &&
  //           (selectedMake === '' || car.make === selectedMake) &&
  //           (selectedYear === '' || car.year === parseInt(selectedYear)) &&
  //           Number(minPrice) <= car.price &&
  //           Number(maxPrice) >= car.price
  //       )
  //     );
  // }, [searchQuery, selectedMake, selectedYear]);

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;

  const { cars }: { cars: ICar[] } = data;
  console.log(cars);
  // const [filteredCars, setFilteredCars] = useState<ICar[]>(cars);

  return (
    <div className='flex flex-col justify-center w-full items-center'>
      <div className='flex flex-col md:flex-row md:items-center md:justify-center gap-4 p-4  m-4  bg-[#111111]  rounded-xl shadow  shadow-emerald-400'>
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
      <div className='flex flex-wrap gap-8 items-center justify-center  bg-[#111111] p-8 m-4 rounded-xl shadow  shadow-emerald-400'>
        {cars.map((car, index) => (
          <div key={index}>
            <CarCard car={car} />
          </div>
        ))}
      </div>
    </div>
  );
};
export default AllCars;
