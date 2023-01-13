import React, { useEffect, useMemo, useState } from 'react';
import axios from 'axios';
import useSWR from 'swr';
// import getCars from '../lib/cars';
import CarCard from './CarCard';
import { ICar } from '../types';
import { Button } from '@mui/material';

const PopularMakes = () => {
  const [cars, setCars] = useState<ICar[]>();
  const [carsByMake, setCarsByMake] = useState<{ [key: string]: ICar[] }>({});
  const [makes, setMakes] = useState<ICar['make'][]>([]);
  const [selectedMake, setSelectedMake] = useState<ICar['make']>();
  const [filteredCars, setFilteredCars] = useState<ICar[]>(cars!);

  const fetcher = async (url: string) =>
    await axios.get(url).then((res) => res.data);
  const { data, error, isLoading } = useSWR('/api/cars', fetcher, {
    revalidateIfStale: false,
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
  });
  const { cars: carsData }: { cars: ICar[] } = data ? data : [];

  useEffect(() => {
    !cars && setCars(carsData);

    cars &&
      makes?.length === 0 &&
      setMakes(Array.from(new Set(cars?.map((car) => car.make))));

    !selectedMake && setSelectedMake(makes?.at(0));
    carsByMake && setFilteredCars(carsByMake![selectedMake!]);
  }, [carsData, cars, makes, selectedMake]);

  useEffect(() => {
    if (
      cars &&
      typeof carsByMake !== 'undefined' &&
      carsByMake !== null &&
      Object.keys(carsByMake!).length === 0
    ) {
      const grouped = cars?.reduce((acc, cur) => {
        (acc[cur.make] = acc[cur.make] || []).push(cur);
        return acc;
      }, {} as { [key: string]: ICar[] });
      setCarsByMake({ ...grouped });
    }
  }, [cars]);

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;

  return (
    <div className='bg-[#111111] p-4 m-4 rounded-xl shadow  shadow-emerald-400'>
      <div className='text-center text-4xl font-extrabold py-4'>
        Popüler Markalar
      </div>

      <div className='flex flex-col space-y-4 lg:px-12 w-full'>
        <div className='flex items-center justify-center gap-4 py-4 overflow-x-scroll'>
          {cars &&
            carsByMake &&
            makes &&
            makes.map((make) => (
              // <div
              //   className='text-center p-4 border border-gray-400 w-28 min-w-[7rem] rounded-lg'
              //   key={make}
              //   onClick={() => setSelectedMake(make)}
              // >
              //   <h2>{make}</h2>
              //   <p className='text-xs'>{carsByMake![make].length} Araç</p>
              // </div>
              <Button
                className='flex flex-col normal-case space-y-2'
                color='inherit'
                variant='outlined'
                key={make}
                onClick={() => setSelectedMake(make)}
              >
                <div className='font-semibold text-lg'>{make}</div>
                <div className='text-xs pb-1'>
                  {carsByMake![make].length} Araç
                </div>
              </Button>
            ))}
        </div>

        <div className='flex items-center justify-center gap-4 py-4 overflow-x-scroll'>
          {filteredCars?.map((car, index) => (
            <CarCard key={index} car={car} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PopularMakes;
