import '../styles/globals.css';
import React from 'react';
import type { AppProps } from 'next/app';
import { SessionProvider } from 'next-auth/react';
import Layout from '../components/Layout';
import { CarContext } from '../lib/CarContext';
import { ICar } from '../types';
import axios from 'axios';
import useSWR from 'swr';
import awsExports from '../src/aws-exports';
import { Authenticator } from '@aws-amplify/ui-react';
import { Amplify } from 'aws-amplify';
Amplify.configure({ ...awsExports, ssr: true });

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  const fetcher = async (url: string) =>
    await axios.get(url).then((res) => {
      return res.data;
    });
  const { data } = useSWR('/api/cars', fetcher, {
    revalidateIfStale: true,
    revalidateOnFocus: true,
    revalidateOnReconnect: true,
  });

  const { cars }: { cars: ICar[] } = data ? data : [];
  return (
    <Authenticator>
      <SessionProvider session={session}>
        <CarContext.Provider value={cars}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </CarContext.Provider>
      </SessionProvider>
    </Authenticator>
  );
}
