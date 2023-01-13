import * as React from 'react';
import Card from '@mui/material/Card';
import Image from 'next/image';
import { ICar } from '../types';
import { useRouter } from 'next/router';
import separateThreeDigitsWithDot from '../utils/separateThreeDigitsWithDot';

export default function CarCard({ car }: { car: ICar }) {
  const router = useRouter();
  return (
    <Card
      className={
        'group rounded-xl w-[20rem] min-w-[20rem] border-[rgb(var(--card-border-rgb))] border cursor-pointer'
      }
      onClick={() => router.push(`/cars/${car._id}`)}
    >
      <div className=' relative  w-full h-44'>
        <Image
          className='rounded-t-xl hover:scale-[1.01] hover:rounded-t-2xl transition-all ease-in-out duration-200'
          src={car.imageUrl}
          alt='car-image'
          fill={true}
        />
      </div>
      <div className={' bg-[rgb(26,29,38)] px-4 text-white '}>
        <div className='px-4 py-2 '>
          <div className='text-2xl opacity-80'>
            {car.make}
            <span className='text-xl opacity-80'> {car.model}</span>
          </div>

          <p className='text-2xl font-extrabold group-hover:translate-x-1 transition-transform duration-300'>
            {separateThreeDigitsWithDot(car.price)}₺
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
