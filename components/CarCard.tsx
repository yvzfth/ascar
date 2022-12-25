import * as React from 'react';
import Card from '@mui/material/Card';
import Image from 'next/image';
import type { Car } from '../types';
import { useRouter } from 'next/router';

export default function CarCard({ car }: { car: Car }) {
  const router = useRouter();
  return (
    <Card
      className={
        'group rounded-xl w-[20rem] min-w-[20rem] border-[rgb(var(--card-border-rgb))] border '
      }
      onClick={() => router.push(`/cars/${car.id}`)}
    >
      <div className=' relative  w-full h-44'>
        <Image src={car.imageUrl} alt='car-image' fill={true} />
      </div>
      <div className={' bg-[rgb(26,29,38)] px-4 text-white '}>
        <div className='px-4 py-2 '>
          <p className='text-2xl opacity-80'>{car.make}</p>
          <p className='text-2xl font-extrabold group-hover:translate-x-1 transition-transform duration-300'>
            {car.price}₺
          </p>
        </div>
        <hr className='border-[rgb(39,45,58)] h-1 mx-4' />
        <div className='flex justify-evenly p-4 items-center text-xs '>
          <div className='px-2 py-1 rounded-md  bg-[rgb(198,26,36)]'>
            <p className='capitalize text-white'>{car.year}</p>
          </div>
          <p className='capitalize text-[rgb(135,144,162)]'>
            {car.transmission}
          </p>
          <p className='capitalize text-[rgb(135,144,162)]'>{car.fuelType}</p>
        </div>
      </div>
    </Card>
  );
}
