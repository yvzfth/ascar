import React from 'react';

import AccountButton from './AccountButton';
import Logo from './Logo';
import NavbarLinks from './NavbarLinks';

const Navbar = () => {
  return (
    <div
      id='navbar'
      className={
        'fixed top-0 z-50 bg-black flex py-4 px-8 lg:px-16 w-screen items-center justify-between'
      }
    >
      <div className='max-lg:hidden'>
        <Logo />
      </div>

      <NavbarLinks />
      <div className='lg:hidden'>
        <Logo />
      </div>
      <AccountButton />
    </div>
  );
};

export default Navbar;
