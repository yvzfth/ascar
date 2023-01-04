import React from 'react';

import { Typography } from '@mui/material';
import MailOutline from '@mui/icons-material/MailOutline';

import FollowUs from '../components/FollowUs';
import SendEmail from '../components/SendEmail';
import MapContainer from '../components/MapContainer';

const Contact = () => {
  return (
    <div className='pb-8'>
      <div className='items-center justify-center flex w-full p-10 flex-col lg:flex-row lg:space-x-20'>
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
            <Typography className='text-3xl py-2'>
              (123) <span className='text-[#E38B29]'>456-78901</span>
            </Typography>
          </div>
          <div className='pb-10'>
            <Typography>
              <MailOutline className='text-[#E38B29] pr-2' />
              support@ascar.vercel.app
            </Typography>
          </div>
          <FollowUs />
        </div>
        <SendEmail />
      </div>
      <div className='w-full h-[25rem] p-4 pb-10'>
        <MapContainer />
      </div>
    </div>
  );
};

export default Contact;
