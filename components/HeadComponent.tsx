import React from 'react';
import Head from 'next/head';
const HeadComponent = () => {
  return (
    <Head>
      <title>AsCar</title>
      <meta name='description' content='AsCar - Araç Kirala, Al, Sat' />
      <meta name='viewport' content='width=device-width, initial-scale=1' />
      <link rel='icon' href='/favicon.ico' />
    </Head>
  );
};
export default HeadComponent;
