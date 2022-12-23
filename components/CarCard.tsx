import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Image from 'next/image';

interface CarCardProps {
  image: string;
  title: string;
  price: number;
  madeYear: number;
  gear: string;
  fuelType: string;
}

export default function CarCard({
  image,
  title,
  price,
  madeYear,
  gear,
  fuelType,
}: CarCardProps) {
  return (
    <Card className='rounded-xl w-[20rem] '>
      <div className=' relative  w-full h-44'>
        <Image src={image} alt='car-image' fill={true} />
      </div>
      <div className=' bg-[rgb(26,29,38)] px-4 text-white'>
        <div className='px-4 py-2 '>
          <p className='text-2xl opacity-80'>{title}</p>
          <p className='text-2xl font-extrabold'>{price}₺</p>
        </div>
        <hr className='border-[rgb(39,45,58)] h-1 mx-4' />
        <div className='flex justify-evenly p-4 items-center text-xs '>
          <div className='px-2 py-1 rounded-md  bg-[rgb(198,26,36)]'>
            <p className='capitalize text-white'>{madeYear}</p>
          </div>
          <p className='capitalize text-[rgb(135,144,162)]'>{gear}</p>
          <p className='capitalize text-[rgb(135,144,162)]'>{fuelType}</p>
        </div>
      </div>
    </Card>
  );
}
