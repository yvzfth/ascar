import { Button, Typography } from '@mui/material';
import React from 'react';
import CarCard from './CarCard';
import FollowUs from './FollowUs';
import getCars from '../lib/cars';
import { useRouter } from 'next/router';

const CarCardContainer = () => {
  const router = useRouter();
  const cars = getCars();
  return (
    <div className='bg-[#111111] pt-8 m-4 rounded-xl shadow  shadow-emerald-400'>
      <Typography className='text-4xl font-extrabold text-center '>
        Öne Çıkan Araçlar
      </Typography>
      {/*  [&>:first-child]:h-[40rem] [&>:first-child]:w-[40rem]  */}
      <div className='flex items-center justify-between w-full px-20 py-10 gap-10 flex-col lg:flex-row lg:flex-wrap'>
        {cars.map((car, index) => (
          <CarCard key={index} car={car} />
        ))}
      </div>
      <div className='flex flex-col lg:flex-row justify-between items-center px-20 py-10 space-y-8'>
        <FollowUs />
        <Button
          className='dark:text-white'
          color='error'
          variant='contained'
          onClick={() => router.push('/cars')}
        >
          {cars.length} Aracı görüntüle
        </Button>
      </div>
    </div>
  );
};

export default CarCardContainer;
