import React, { useEffect } from 'react';
import { useAuth } from '../context/user';
import Google from '@mui/icons-material/Google';
import Image from 'next/image';
// import firebase from 'firebase/app';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import { useRouter } from 'next/router';

const Login = () => {
  const router = useRouter();
  const { user, setUser } = useAuth();
  const login = async () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
    // -----------------
    // sign in with redirect

    firebase.auth().signInWithRedirect(provider);

    firebase
      .auth()
      .getRedirectResult()
      .then(
        function (result) {
          setUser({
            name: result.user?.displayName!,
            email: result.user?.email!,
            photoUrl: result.user?.photoURL!,
            id: result.user?.uid!,
          });
        },
        function (error) {
          var email = error.email;

          var credential = error.credential;

          if (error.code === 'auth/account-exists-with-different-credential') {
            firebase
              .auth()
              .fetchSignInMethodsForEmail(email)
              .then(function (providers) {});
          }
        }
      );

    // -----------------
    // sign in with popup

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

    //     // router.push('/');
    //   });
  };
  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) return router.push('/');
      return null;
    });
  }, [firebase]);

  return (
    <div className='flex h-screen w-screen relative items-center justify-center'>
      <Image alt='bg' src={'/bg.jpg'} layout='fill' objectFit='cover' />
      <div
        className='flex items-center justify-center rounded-lg bg-opacity-80
        border border-gray-600 bg-transparent transition ease-out hover:bg-opacity-100
        hover:shadow-md space-x-4 z-10 p-2 absolute cursor-pointer'
        onClick={login}
      >
        <Google fontSize={'medium'}></Google>
        <p className='font-semibold text-lg'>Sign In with Google</p>
      </div>
    </div>
  );
};

export default Login;
