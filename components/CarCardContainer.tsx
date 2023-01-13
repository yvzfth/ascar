import React from 'react';
import { useRouter } from 'next/router';

import { Button, Typography } from '@mui/material';

import CarCard from './CarCard';
import FollowUs from './FollowUs';
import axios from 'axios';
import { ICar } from '../types';
import useSWR from 'swr';

const CarCardContainer = () => {
  const router = useRouter();
  const fetcher = async (url: string) =>
    await axios.get(url).then((res) => res.data);
  const { data, error, isLoading } = useSWR('/api/cars', fetcher, {
    revalidateIfStale: false,
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
  });

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;

  const { cars }: { cars: ICar[] } = data;
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
