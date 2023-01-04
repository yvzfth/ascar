import React from 'react';

import AccountButton from './AccountButton';
import Logo from './Logo';
import NavbarLinks from './NavbarLinks';

const Navbar = () => {
  return (
    <div
      className={
        'sticky backdrop-blur-3xl top-0 left-0 z-50  flex py-4 px-8 w-screen items-center justify-between '
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
