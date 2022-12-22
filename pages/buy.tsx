import Head from 'next/head';
import React from 'react';
import Navbar from '../components/Navbar';

const buy = () => {
  return (
    <div className='h-screen'>
      <Head>
        <title>AsCar</title>
        <meta name='description' content='AsCar - Araç Kirala, Al, Sat' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Navbar />
      Satın Al
    </div>
  );
};

export default buy;
