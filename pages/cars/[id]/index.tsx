import Head from 'next/head';
import React, { useEffect, useState } from 'react';
import Navbar from '../../../components/Navbar';
import { useRouter } from 'next/router';
import getCars from '../../../lib/cars';
import type { Car } from '../../../types';
import WhatsAppChatButton from '../../../components/WhatsAppChatButton';
import Technologies from '../../../components/Technologies';
import MapContainer from '../../../components/MapContainer';
import Header from '../../../components/Header';
import CarImageSlider from '../../../components/CarImageSlider';
import { Button } from '@mui/material';
import SendEmail from '../../../components/SendEmail';
import Features from '../../../components/Features';
import 'mapbox-gl/dist/mapbox-gl.css';
import RelatedCars from '../../../components/RelatedCars';
import Footer from '../../../components/Footer';

const Car = () => {
  const router = useRouter();
  const { id } = router.query;
  console.log(id);
  const [car, setCar] = useState<Car>(
    getCars().find((car) => car.id === Number(id))!
  );
  useEffect(() => {
    const foundCar = getCars().find((car) => car.id === Number(id))!;
    setCar(foundCar);
  }, [id]);

  const [logedIn, setLogedIn] = React.useState<true | false>(false);

  return (
    <div>
      <Head>
        <title>AsCar</title>
        <meta name='description' content='AsCar - Araç Kirala, Al, Sat' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Navbar />
      <div className='container mx-auto py-4'>
        {/* <h1 className='text-3xl font-bold text-center mb-4'>Renting Page</h1> */}

        <div>
          <Header
            make={car!?.make}
            model={car!?.model}
            year={car!?.year}
            fuelType={car!?.fuelType}
            transmission={car!?.transmission}
          />
          <div className='mb-4'>
            <CarImageSlider
              imageUrls={['/car1.jpeg', '/car2.jpeg', '/car3.jpeg']}
            />
          </div>
          <div className='py-4'>
            <div className='text-red-500 text-3xl font-extrabold'>
              {car!?.price}₺
            </div>
            <div>{logedIn ? '⭐️' : '☆'} Favorilerine ekle</div>
          </div>
          <div className='bg-white rounded-lg shadow-md p-4 dark:text-black'>
            <h2 className='text-xl font-bold mb-2'>Engine</h2>
            <p>{car!?.engine}</p>
            <h2 className='text-xl font-bold mt-2 mb-2'>Transmission</h2>
            <p>{car!?.transmission}</p>
            <h2 className='text-xl font-bold mt-2 mb-2'>Fuel Type</h2>
            <p>{car!?.fuelType}</p>
            <h2 className='text-xl font-bold mt-2 mb-2'>Color</h2>
            <p>{car!?.color}</p>
            <h2 className='text-xl font-bold mt-2 mb-2'>Mileage</h2>
            <p>{car!?.mileage}</p>
            <h2 className='text-xl font-bold mt-2 mb-2'>Price</h2>
            <p>${car!?.price}</p>
          </div>
          <Technologies
            technologies={car!?.technologies}
            bgImageUrl={car!?.imageUrl}
          />
          <Features features={car!?.features} />

          <div className='w-full h-[30rem]'>
            <MapContainer />
          </div>
        </div>

        <WhatsAppChatButton />
        <Button
          className='w-full'
          variant='contained'
          color='error'
          href='#SendEmail'
        >
          Mesaj Gönder
        </Button>
        <RelatedCars id={String(id!)} />
        <div className='h-screen'></div>
        <div id='SendEmail'></div>
        <div className='flex w-full items-center justify-center'>
          <SendEmail />
        </div>
        <div className='h-screen'></div>
      </div>
      <Footer />
    </div>
  );
};

export default Car;
