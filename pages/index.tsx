import React from 'react';
import Image from 'next/image';

import Hero from '../components/Hero';
import CarCardContainer from '../components/CarCardContainer';
import PopularMakes from '../components/PopularMakes';

function Home() {
  return (
    <div>
      <Hero />
      <div
        className='mx-auto relative -top-[5rem] w-[22rem] md:w-[30rem] lg:w-[40rem]
            h-[10rem] md:h-[12rem] lg:h-[18rem] lg:-top-44 flex justify-center items-center'
      >
        <Image
          className='z-10 '
          src={'/car-silver.png'}
          fill
          alt='car-silver'
        />
      </div>
      <CarCardContainer />
      <PopularMakes />
    </div>
  );
}
export default Home;
