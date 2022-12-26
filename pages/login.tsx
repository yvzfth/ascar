import React, { useEffect } from 'react';
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
    // provider.addScope('email');
    // provider.addScope('user_friends');

    firebase.auth().signInWithRedirect(provider);

    firebase
      .auth()
      .getRedirectResult()
      .then(
        function (result) {
          // The firebase.User instance:
          setUser({
            name: result.user?.displayName!,
            email: result.user?.email!,
            photoUrl: result.user?.photoURL!,
            id: result.user?.uid!,
          });

          // The Facebook firebase.auth.AuthCredential containing the Facebook
          // access token:
          // var credential = result.credential;

          // As this API can be used for sign-in, linking and reauthentication,
          // check the operationType to determine what triggered this redirect
          // operation.
          // var operationType = result.operationType;
        },
        function (error) {
          // The provider's account email, can be used in case of
          // auth/account-exists-with-different-credential to fetch the providers
          // linked to the email:
          var email = error.email;
          // The provider's credential:
          var credential = error.credential;
          // In case of auth/account-exists-with-different-credential error,
          // you can fetch the providers using this:
          if (error.code === 'auth/account-exists-with-different-credential') {
            firebase
              .auth()
              .fetchSignInMethodsForEmail(email)
              .then(function (providers) {
                // The returned 'providers' is a list of the available providers
                // linked to the email address. Please refer to the guide for a more
                // complete explanation on how to recover from this error.
              });
          }
        }
      );

    // firebase
    //   .auth()
    //   .signInWithPopup(provider)
    //   .then(function (result) {
    //     setUser({
    //       name: result.user?.displayName!,
    //       email: result.user?.email!,
    //       photoUrl: result.user?.photoURL!,
    //       id: result.user?.uid!,
    //     });

    //     router.push('/');
    //   });
  };
  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) return router.push('/');
      return null;
    });
  }, [firebaseClient]);
  return (
    <div className='flex h-screen w-screen relative items-center justify-center'>
      <Image alt='bg' src={'/bg.jpg'} layout='fill' objectFit='cover' />
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
