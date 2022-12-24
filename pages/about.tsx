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

import Link from 'next/link';
import Footer from '../components/Footer';

const AboutUs = () => {
  return (
    <div className='bg-gray-200 min-h-screen flex flex-col'>
      <main className='container mx-auto px-6 py-8'>
        <h1 className='text-3xl font-bold text-gray-900 mb-6'>About Us</h1>
        <p className='text-gray-700 mb-6'>
          We are a team of car enthusiasts dedicated to providing the best car
          buying experience for our customers. With a wide selection of new and
          used cars, we have something for everyone. Our knowledgeable staff is
          here to help you find the perfect car for your needs and budget.
        </p>
      </main>
    </div>
  );
};

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
      <AboutUs />
      <Footer />
    </div>
  );
};

export default About;
