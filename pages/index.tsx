import React from 'react';
import Image from 'next/image';

import Hero from '../components/Hero';
import CarCardContainer from '../components/CarCardContainer';
import PopularMakes from '../components/PopularMakes';

function Home() {
  return (
    <div className='mt-[5.5rem]'>
      <Hero />

      <CarCardContainer />
      <PopularMakes />
    </div>
  );
}
export default Home;
