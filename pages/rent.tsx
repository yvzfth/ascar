import Head from 'next/head';
import React from 'react';
import Navbar from '../components/Navbar';

import { useRouter } from 'next/router';
import CarWidget from '../components/CarWidget';
import getCars from '../lib/cars';
import type { Car } from '../types';
import WhatsAppChatButton from '../components/WhatsAppChatButton';
import Technologies from '../components/Technologies';
import Header from '../components/Header';
import CarImageSlider from '../components/CarImageSlider';
import { Button } from '@mui/material';
import SendEmail from '../components/SendEmail';
import Features from '../components/Features';
import Map, { GeolocateControl } from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

const MAPBOX_TOKEN =
  'pk.eyJ1IjoieXZ6ZnRoIiwiYSI6ImNsYzFqejN1cDA4YWUzb3FmMGpueGJpN24ifQ.tPrj83XRd3foPvh8mpUJbw';
function MyMap() {
  return (
    <div className='w-full h-[30rem] '>
      <Map
        mapboxAccessToken='MAPBOX_TOKEN'
        initialViewState={{
          longitude: -100,
          latitude: 40,
          zoom: 12,
        }}
        mapStyle='mapbox://styles/yvzfth/ckzshkwjv000k14ngydzgk1ck'
      >
        {/* <GeolocateControl
          positionOptions={{ enableHighAccuracy: true }}
          trackUserLocation={true}
        /> */}
      </Map>
    </div>
  );
}

// import {Star} from "react-feather"
export const RentingPage = () => {
  const router = useRouter();
  const { make } = router.query;

  const cars = getCars().filter((car) => car.make === make);

  const [selectedCar, setSelectedCar] = React.useState<Car | null>(null);
  const [logedIn, setLogedIn] = React.useState<true | false>(false);

  return (
    <div className='container mx-auto py-4'>
      {/* <h1 className='text-3xl font-bold text-center mb-4'>Renting Page</h1> */}
      {selectedCar ? (
        <div>
          <Header
            make={selectedCar.make}
            model={selectedCar.model}
            year={selectedCar.year}
            fuelType={selectedCar.fuelType}
            transmission={selectedCar.transmission}
          />
          <div className='mb-4'>
            <CarImageSlider
              imageUrls={['/car1.jpeg', '/car2.jpeg', '/car3.jpeg']}
            />
          </div>
          <div className='py-4'>
            <div className='text-red-500 text-3xl font-extrabold'>
              {selectedCar.price}₺
            </div>
            <div>{logedIn ? '⭐️' : '☆'} Favorilerine ekle</div>
          </div>
          <div className='bg-white rounded-lg shadow-md p-4 dark:text-black'>
            <h2 className='text-xl font-bold mb-2'>Engine</h2>
            <p>{selectedCar.engine}</p>
            <h2 className='text-xl font-bold mt-2 mb-2'>Transmission</h2>
            <p>{selectedCar.transmission}</p>
            <h2 className='text-xl font-bold mt-2 mb-2'>Fuel Type</h2>
            <p>{selectedCar.fuelType}</p>
            <h2 className='text-xl font-bold mt-2 mb-2'>Color</h2>
            <p>{selectedCar.color}</p>
            <h2 className='text-xl font-bold mt-2 mb-2'>Mileage</h2>
            <p>{selectedCar.mileage}</p>
            <h2 className='text-xl font-bold mt-2 mb-2'>Price</h2>
            <p>${selectedCar.price}</p>
          </div>
          <Technologies
            technologies={selectedCar.technologies}
            bgImageUrl={selectedCar.imageUrl}
          />
          <Features features={selectedCar.features} />
          <MyMap />
          {/* <div className='flex justify-between mt-8'>
            <Button
              variant='contained'
              color='inherit'
              href='#'
              className='dark:text-black'
              // className='px-4 py-2 bg-red-700 text-white rounded-full'
              onClick={() => setSelectedCar(null)}
            >
              Cancel
            </Button>
            <Button
              variant='contained'
              color='success'
              href='#'
              // className='px-4 py-2 bg-green-700 text-white rounded-full'
              onClick={() => alert('Thank you for your purchase!')}
            >
              Purchase
            </Button>
          </div> */}
        </div>
      ) : (
        <div className='grid grid-cols-3 gap-4'>
          {cars.map((car) => (
            <div
              key={car.id}
              className='bg-white rounded-lg shadow-md p-4 cursor-pointer'
              onClick={() => setSelectedCar(car)}
            >
              <CarWidget car={car} />
            </div>
          ))}
        </div>
      )}
      <WhatsAppChatButton />
      <Button
        className='w-full'
        variant='contained'
        color='error'
        href='#SendEmail'
      >
        Mesaj Gönder
      </Button>

      <div className='h-screen'></div>
      <div id='SendEmail'></div>
      <SendEmail />
      <div className='h-screen'></div>
    </div>
  );
};

const Rent = () => {
  return (
    <div className='h-screen'>
      <Head>
        <title>AsCar</title>
        <meta name='description' content='AsCar - Araç Kirala, Al, Sat' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Navbar />
      <RentingPage />
    </div>
  );
};

export default Rent;
