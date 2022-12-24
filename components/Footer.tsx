import Facebook from '@mui/icons-material/Facebook';
import Instagram from '@mui/icons-material/Instagram';
import MailOutline from '@mui/icons-material/MailOutline';
import Twitter from '@mui/icons-material/Twitter';
import { Typography } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import FollowUs from './FollowUs';

const Footer = () => {
  return (
    <footer className='bg-gray-800 py-4'>
      <div className='w-full flex items-center justify-center lg:justify-start lg:pl-10 py-4'>
        <Image src={'/vercel.svg'} width='150' height={'100'} alt={'logo'} />
      </div>
      <div className='flex flex-col lg:flex-row lg:justify-between lg:px-10'>
        <div className='text-center w-1/2 mx-auto py-4 lg:text-start lg:ml-0 '>
          Award-winning, family owned dealership of new and pre-owned vehicles
          with several locations across the city. Lowest prices and the best
          customer service guaranteed.
        </div>

        <div className='pb-4 text-center lg:text-right'>
          <Typography className='text-3xl py-2'>
            (123) <span className='text-[#E38B29]'>456-78901</span>
          </Typography>

          <Typography>
            <MailOutline className='text-[#E38B29] pr-2' />
            support@vehica.com
          </Typography>
          <div>
            <Typography className='text-sm lg:text-md py-8 '>
              West 12th Street <br />
              New York, NY, USA
            </Typography>
          </div>
        </div>
      </div>
      <hr className='border-gray-500 mx-10' />
      <div className='container mx-auto text-center text-white lg:flex lg:justify-between lg:px-10 lg:items-center'>
        <p className='text-sm text-gray-400 pt-4'>
          Copyright &copy; {new Date().getFullYear()} AsCar. All rights
          reserved.
        </p>
        <div className='flex space-x-8 pt-4  mx-auto w-fit lg:mr-0'>
          <Link href={'https://facebook.com'} target='_blank'>
            <Facebook className='text-4xl' />
          </Link>
          <Link href={'https://twitter.com'} target='_blank'>
            <Twitter className='text-4xl' />
          </Link>
          <Link href={'https://instagram.com'} target='_blank'>
            <Instagram className='text-4xl' />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
