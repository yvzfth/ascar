import { Button, Card } from '@mui/material';
import React, { useState } from 'react';

function SendEmail() {
  const [inputs, setInputs] = useState({
    name: '',
    email: '',
    message: '',
    phone: '',
  });

  const handleChange = (event: any) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  return (
    <Card className='w-[20rem] lg:w-[30rem] bg-transparent dark:text-white p-8 bg-[#FFE6F2] rounded-lg '>
      <form
        className='flex flex-col space-y-4'
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
        <Button variant='contained' color='error' type='submit'>
          Gönder
        </Button>
      </form>
    </Card>
  );
}

export default SendEmail;
