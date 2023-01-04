import React from 'react';
import Link from 'next/link';

import { Cinzel } from '@next/font/google';
import styles from '../../styles/Home.module.css';

const cinzel = Cinzel({ subsets: ['latin'] });

const Logo = () => {
  return (
    <Link href={'/'}>
      <div
        className={styles.thirteen + ' ' + cinzel.className + ' text-red-500'}
      >
        AsCar
      </div>
    </Link>
  );
};

export default Logo;
