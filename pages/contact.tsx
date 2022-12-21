import {
  Button,
  Card,
  TextareaAutosize,
  TextField,
  Typography,
} from '@mui/material';
import React from 'react';
import Navbar from '../components/Navbar';
import { useState } from 'react';
import { stringify } from 'querystring';

interface state {
  name: string;
  email: string;
  message: string;
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
    <Card className='w-[20rem] lg:w-[50%] bg-transparent text-white'>
      <form
        className='flex flex-col space-y-4'
        // onSubmit={handleSubmit}
        action='mailto:yvzfth@yandex.com'
        method='post'
        encType='text/plain'
      >
        <div>
          <Typography>İsminiz</Typography>
          <input
            className='w-full text-gray-200'
            // label='İsminizi giriniz'
            placeholder='Ahmet Kaya'
            type='text'
            name='name'
            value={inputs.name || ''}
            onChange={handleChange}
          />
        </div>
        <div>
          <Typography>Email</Typography>
          <input
            className='w-full text-gray-200'
            placeholder='isim@mail.com'
            type={'email'}
            name='email'
            value={inputs.email || ''}
            onChange={handleChange}
          />
        </div>
        <div>
          <Typography>Mesajınız</Typography>
          {/* <textarea name='message' value={textarea} onChange={handleChange} /> */}
          <textarea
            className='w-full text-gray-200'
            name='message'
            onChange={handleChange}
            aria-label='minimum height'
            rows={3}
            placeholder='Mesajınızı giriniz'
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
    <div>
      <Navbar />
      {/* <form action='/' method='post'>
        <TextField id='outlined-basic' label='Outlined' variant='outlined' />
      </form> */}
      <div className='items-center justify-center flex w-full p-10'>
        <MyForm />
      </div>
    </div>
  );
};

export default contact;
