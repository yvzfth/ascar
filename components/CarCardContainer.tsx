import { Button, Typography } from '@mui/material';
import React from 'react';
import CarCard from './CarCard';
import FollowUs from './FollowUs';

const CarCardContainer = () => {
  return (
    <div>
      <div className='text-center '>
        <Typography className='text-4xl font-extrabold'>
          Öne Çıkan Araçlar
        </Typography>
      </div>
      <div className='[&>:last-child]:h-[40rem] [&>:last-child]:text-4xl [&>:last-child]:w-[40rem] flex items-center justify-between w-full px-20 py-10 gap-10 flex-col lg:flex-row '>
        <p className='w-10 h-10'>sdasfasf</p>
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
