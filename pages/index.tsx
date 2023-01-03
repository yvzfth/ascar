import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import * as React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import CarCardContainer from '../components/CarCardContainer';
import PopularMakes from '../components/PopularMakes';
import Footer from '../components/Footer';
function Home() {
  return (
    <div>
      <Head>
        <title>AsCar</title>
        <meta name='description' content='AsCar - Araç Kirala, Al, Sat' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main>
        <Navbar />
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
        <Footer />
      </main>
    </div>
  );
}
export default Home;
