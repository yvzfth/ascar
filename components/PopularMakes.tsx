import React, { useEffect, useState } from 'react';
import CarCard from './CarCard';
import { ICar } from '../types';
import { Button } from '@mui/material';
import { CarContext } from '../lib/CarContext';

const PopularMakes = () => {
  const cars = React.useContext(CarContext);
  const carsByMake = cars?.reduce((acc, cur) => {
    (acc[cur.make] = acc[cur.make] || []).push(cur);
    return acc;
  }, {} as { [key: string]: ICar[] });
  const head = <T extends unknown[]>(val: T): T[number] | undefined => val[0];

  const makes = Array.from(new Set(cars?.map((car) => car.make)));
  const [selectedMake, setSelectedMake] = useState<ICar['make']>(head(makes!)!);
  const [filteredCars, setFilteredCars] = useState<ICar[]>([]);

  useEffect(() => {
    !selectedMake && makes && setSelectedMake(head(makes)!);
    selectedMake && setFilteredCars(carsByMake![selectedMake!]);
  }, [selectedMake, cars]);

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
