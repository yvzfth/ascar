import Head from 'next/head';
import React from 'react';
import Navbar from '../components/Navbar';
import { useRouter } from 'next/router';
import CarWidget from '../components/CarWidget';
import getCars from '../lib/cars';
import type { Car } from '../types';
import WhatsAppChatButton from '../components/WhatsAppChatButton';
import Technologies from '../components/Technologies';
import MapContainer from '../components/MapContainer';
import Header from '../components/Header';
import CarImageSlider from '../components/CarImageSlider';
import { Button } from '@mui/material';
import SendEmail from '../components/SendEmail';
import Features from '../components/Features';
import 'mapbox-gl/dist/mapbox-gl.css';

const About = () => {
  return (
    <div className='h-screen'>
      <Head>
        <title>AsCar</title>
        <meta name='description' content='AsCar - Araç Kirala, Al, Sat' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Navbar />
    </div>
  );
};

export default About;
