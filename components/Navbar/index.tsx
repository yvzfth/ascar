import React from 'react';

import AccountButton from './AccountButton';
import Logo from './Logo';
import NavbarLinks from './NavbarLinks';

const Navbar = () => {
  return (
    <div
      id='navbar'
      className={
        'sticky top-0 flex py-4 px-8 lg:px-16 w-screen items-center justify-between'
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
