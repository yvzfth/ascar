import Facebook from '@mui/icons-material/Facebook';
import Instagram from '@mui/icons-material/Instagram';
import Twitter from '@mui/icons-material/Twitter';
import { Typography } from '@mui/material';
import Link from 'next/link';
import React from 'react';

const FollowUs = () => {
  return (
    <div className='flex flex-col lg:flex-row items-center divide-y lg:divide-y-0  space-x-0 lg:space-x-8'>
      <Typography className='pb-4 lg:pb-0'>Follow Us</Typography>
      <div className='flex space-x-8 pt-4 lg:pt-0'>
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
  );
};

export default FollowUs;
