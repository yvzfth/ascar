import {
  Button,
  Card,
  TextareaAutosize,
  TextField,
  Typography,
} from '@mui/material';
import MailOutline from '@mui/icons-material/MailOutline';
import Twitter from '@mui/icons-material/Twitter';
import Instagram from '@mui/icons-material/Instagram';
import Facebook from '@mui/icons-material/Facebook';
import React from 'react';
import Navbar from '../components/Navbar';
import { useState } from 'react';
import Head from 'next/head';

interface state {
  name: string;
  email: string;
  message: string;
  phone: string;
}

function MyForm() {
  const [inputs, setInputs] = useState({} as state);

  const handleChange = (event: any) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();
    alert(JSON.stringify(inputs));
  };
  // const [textarea, setTextarea] = useState(
  //   'The content of a textarea goes in the value attribute'
  // );

  // const handleChange = (event: any) => {
  //   setTextarea(event.target.value);
  // };

  return (
    <Card className='w-[20rem] lg:w-[30rem] bg-transparent dark:text-white p-8 bg-gray-900 rounded-lg'>
      <form
        className='flex flex-col space-y-4'
        // onSubmit={handleSubmit}
        action='mailto:yvzfth@yandex.com'
        method='post'
        encType='text/plain'
      >
        <div className='flex flex-col lg:flex-row gap-4 '>
          <div>
            <input
              className='w-full dark:text-gray-200 bg-[rgb(247,247,247)] p-4 rounded-lg dark:bg-[-webkit-control-background]'
              placeholder='İsim'
              type='text'
              name='name'
              value={inputs.name || ''}
              onChange={handleChange}
            />
          </div>
          <div>
            <input
              className='w-full dark:text-gray-200 bg-[rgb(247,247,247)] p-4 rounded-lg dark:bg-[-webkit-control-background]'
              placeholder='Email'
              type={'email'}
              name='email'
              value={inputs.email || ''}
              onChange={handleChange}
            />
          </div>
          <div>
            <input
              className='w-full dark:text-gray-200 bg-[rgb(247,247,247)] p-4 rounded-lg dark:bg-[-webkit-control-background]'
              placeholder='Telefon'
              type={'tel'}
              name='phone'
              value={inputs.phone || ''}
              onChange={handleChange}
            />
          </div>
        </div>

        <div>
          <textarea
            className='w-full dark:text-gray-200 bg-[rgb(247,247,247)] p-4 rounded-lg dark:bg-[-webkit-control-background] h-[8rem] lg:h-[12rem]'
            name='message'
            onChange={handleChange}
            aria-label='minimum height'
            placeholder='Mesajınız'
            style={{ width: 200 }}
          />
        </div>
        <Button type='submit'>Gönder</Button>
      </form>
    </Card>
  );
}
const contact = () => {
  return (
    <div className='h-screen pb-8'>
      <Head>
        <title>AsCar</title>
        <meta name='description' content='AsCar - Araç Kirala, Al, Sat' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Navbar />
      {/* <form action='/' method='post'>
        <TextField id='outlined-basic' label='Outlined' variant='outlined' />
      </form> */}
      <div className='items-center justify-center flex w-full p-10 flex-col lg:flex-row'>
        <div className='lg:w-1/3 p-10 flex flex-col items-center justify-center lg:justify-start lg:items-start'>
          <div className='flex flex-col justify-center items-center lg:items-start'>
            <Typography className='text-3xl font-bold lg:text-4xl py-2 '>
              Contact us
            </Typography>
            <Typography className='text-sm lg:text-md py-2 text-center lg:text-left max-w-[30rem]'>
              Award-winning, family owned dealership of new and pre-owned
              vehicles with several locations across the city. Lowest prices and
              the best customer service guaranteed.
            </Typography>
          </div>
          <div>
            <Typography className='text-sm lg:text-md py-8 text-center lg:text-left'>
              West 12th Street <br />
              New York, NY, USA
            </Typography>
          </div>
          <div>
            <Typography className='text-4xl py-2'>
              (123) <span className='text-orange-400'>456-78901</span>
            </Typography>
          </div>
          <div>
            <Typography>
              <MailOutline className='text-orange-400 pr-2' />
              support@vehica.com
            </Typography>
          </div>
          <div className='flex flex-col lg:flex-row items-center divide-y lg:divide-y-0 pt-10 space-x-0 lg:space-x-8'>
            <Typography className='pb-4 lg:pb-0'>Follow Us</Typography>
            <div className='flex space-x-8 pt-4 lg:pt-0'>
              <Facebook className='text-4xl' />
              <Twitter className='text-4xl' />
              <Instagram className='text-4xl' />
            </div>
          </div>
        </div>
        <MyForm />
      </div>
    </div>
  );
};

export default contact;
