import React from 'react';
import { useAuth } from '../context';
import Google from '@mui/icons-material/Google';
import Image from 'next/image';

import firebaseClient from '../firebaseClient';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import { useRouter } from 'next/router';
const Login = () => {
  const router = useRouter();
  const { user, setUser } = useAuth();
  const logIn = () => {
    const provider = new firebaseClient.auth.GoogleAuthProvider();
    firebase
      .auth()
      .signInWithPopup(provider)
      .then(function (result) {
        setUser({
          name: result.user?.displayName!,
          email: result.user?.email!,
          photoUrl: result.user?.photoURL!,
          id: result.user?.uid!,
        });

        router.push('/');
      });
  };
  return (
    <div className='flex h-screen w-screen relative items-center justify-center'>
      <Image alt='bg' src={'/aurora.jpg'} layout='fill' objectFit='cover' />
      <div
        className='flex items-center justify-center rounded-lg bg-opacity-80
        border border-gray-600 bg-transparent transition ease-out hover:bg-opacity-100
        hover:shadow-md space-x-4 z-10 p-2 absolute cursor-pointer'
        onClick={logIn}
      >
        <Google fontSize={'medium'}></Google>
        <p className='font-semibold text-lg'>Sign In with Google</p>
      </div>
    </div>
  );
};

export default Login;
