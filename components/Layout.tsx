import Navbar from './Navbar';
import Footer from './Footer';
import React, { ReactElement } from 'react';
import Head from './Head';
export default function Layout({ children }: { children: ReactElement }) {
  return (
    <>
      <Head />
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
}
