import React from 'react';
import { useRouter } from 'next/router';

import { Button, Typography } from '@mui/material';

import CarCard from './CarCard';
import FollowUs from './FollowUs';

import { CarContext } from '../lib/CarContext';

const CarCardContainer = () => {
  const router = useRouter();
  const cars = React.useContext(CarContext);

  return (
    <div className='bg-[#111111] pt-8 m-4 rounded-xl shadow-custom'>
      <Typography className='text-4xl font-extrabold text-center '>
        Öne Çıkan Araçlar
      </Typography>
      {/*  [&>:first-child]:h-[40rem] [&>:first-child]:w-[40rem]  */}
      <div className='flex items-center w-full p-8 gap-10 flex-col lg:flex-row lg:flex-wrap lg:m-auto lg:w-fit'>
        {cars && cars.map((car, index) => <CarCard key={index} car={car} />)}
      </div>
      <div className='flex flex-col lg:flex-row justify-between items-center px-20 py-10 space-y-8'>
        <FollowUs />
        <Button
          className='dark:text-white'
          color='error'
          variant='contained'
          onClick={() => router.push('/cars')}
        >
          {cars && cars.length} Aracı görüntüle
        </Button>
      </div>
    </div>
  );
};

export default CarCardContainer;
