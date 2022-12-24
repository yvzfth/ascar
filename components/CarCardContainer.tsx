import { Button, Typography } from '@mui/material';
import React from 'react';
import CarCard from './CarCard';
import FollowUs from './FollowUs';
import getCars from '../lib/cars';
import CarWidget from './CarWidget';

const CarCardContainer = () => {
  const cars = getCars();
  return (
    <div>
      <div className='text-center '>
        <Typography className='text-4xl font-extrabold'>
          Öne Çıkan Araçlar
        </Typography>
      </div>
      {/*  [&>:first-child]:h-[40rem] [&>:first-child]:w-[40rem]  */}
      <div className='flex items-center justify-between w-full px-20 py-10 gap-10 flex-col lg:flex-row '>
        <CarCard
          image={'/car1.jpeg'}
          title={'Title'}
          price={200}
          madeYear={2020}
          gear={'Manuel'}
          fuelType={'Diesel'}
        />
        <CarCard
          image={'/car1.jpeg'}
          title={'Title'}
          price={200}
          madeYear={2020}
          gear={'Manuel'}
          fuelType={'Diesel'}
        />
        <CarCard
          image={'/car1.jpeg'}
          title={'Title'}
          price={200}
          madeYear={2020}
          gear={'Manuel'}
          fuelType={'Diesel'}
        />
        <CarCard
          image={'/car1.jpeg'}
          title={'Title'}
          price={200}
          madeYear={2020}
          gear={'Manuel'}
          fuelType={'Diesel'}
        />
        {/* <CarWidget
          car={{
            make: 'BMW',
            model: 'i8',
            year: 2022,
            price: 600000,
            imageUrl: '/car1.jpeg',
          }}
        /> */}
        {cars.map((car, index) => (
          <CarWidget key={index} car={car} />
        ))}
      </div>
      <div className='flex flex-col lg:flex-row justify-between items-center px-20 py-10'>
        <FollowUs />
        <Button className='dark:text-white' color='error' variant='contained'>
          %Sayı% Aracı görüntüle
        </Button>
      </div>
    </div>
  );
};

export default CarCardContainer;
