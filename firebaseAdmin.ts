import * as firebaseAdmin from 'firebase-admin';

// get this JSON from the Firebase board
// you can also store the values in environment variables

if (!firebaseAdmin.apps.length) {
  firebaseAdmin.initializeApp({
    credential: firebaseAdmin.credential.cert({
      privateKey: process.env.NEXT_SERVER_PRIVATE_KEY,
      clientEmail: process.env.NEXT_SERVER_CLIENT_EMAIL,
      projectId: process.env.NEXT_SERVER_PROJECT_ID,
    }),
    databaseURL: process.env.NEXT_SERVER_DATABASE_URL,
  });
}

export { firebaseAdmin };
