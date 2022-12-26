import firebaseClient from 'firebase/compat/app';

import 'firebase/compat/auth';
if (typeof window !== 'undefined' && !firebaseClient.apps.length) {
  firebaseClient.initializeApp({
    apiKey: process.env.NEXT_SERVER_API_KEY,
    authDomain: process.env.NEXT_SERVER_AUTH_DOMAIN,
    projectId: process.env.NEXT_SERVER_PROJECT_ID,
    storageBucket: process.env.NEXT_SERVER_STORAGE_BUCKET,
    messagingSenderId: process.env.NEXT_SERVER_MESSAGING_SENDER_ID,
    appId: process.env.NEXT_SERVER_APP_ID,
  });
  firebaseClient
    .auth()
    .setPersistence(firebaseClient.auth.Auth.Persistence.LOCAL);
}

export default firebaseClient;
