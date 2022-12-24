import { Button } from '@mui/material';
import * as React from 'react';

const WhatsAppChatButton = () => {
  const handleClick = () => {
    window.open(`https://wa.me/+905466832539`);
  };

  return (
    <Button
      variant='contained'
      // color='success'
      className='capitalize bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded w-full'
      onClick={handleClick}
    >
      Chat via WhatsApp
    </Button>
  );
};

export default WhatsAppChatButton;
