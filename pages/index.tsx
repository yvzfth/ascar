import Head from 'next/head';
import Image from 'next/image';
import { Inter } from '@next/font/google';
import styles from '../styles/Home.module.css';
import * as React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name='description' content='AsCar - Araç Kirala, Al, Sat' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main className={''}>
        <Navbar />
        <Hero />
        <div className={styles.center}>
          {/* <div className={styles.logo + 'text-white'}>Her yerde var</div>
          <div className={styles.thirteen}>Ascar</div>
          <div className={styles.thirteen}>Ascar</div>
          <div className={styles.thirteen}>Ascar</div> */}
          <Image
            className='z-10 '
            src={'/car-silver.png'}
            width='500'
            height='200'
            alt='car-silver'
          />
        </div>

        {/* <div className={styles.grid}>
          <a
            href='https://nextjs.org/docs?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'
            className={styles.card}
            target='_blank'
            rel='noopener noreferrer'
          >
            <h2 className={inter.className}>
              Docs <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Find in-depth information about Next.js features and API.
            </p>
          </a>
        </div> */}
      </main>
    </>
  );
}
