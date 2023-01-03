import firebase from 'firebase/compat/app';
import { getAnalytics } from 'firebase/analytics';
import { getFirestore, addDoc, collection, getDocs } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
const firebaseConfig = {
  apiKey: process.env.NEXT_SERVER_API_KEY,
  authDomain: process.env.NEXT_SERVER_AUTH_DOMAIN,
  projectId: process.env.NEXT_SERVER_PROJECT_ID,
  storageBucket: process.env.NEXT_SERVER_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_SERVER_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_SERVER_APP_ID,
};

const app = firebase.initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

// async function asyncFirestore() {
//   try {
//     const docRef = addDoc(collection(db, 'users'), {
//       first: 'Ada',
//       last: 'Lovelace',
//       born: 1815,
//     });
//     console.log('Document written with ID: ', (await docRef).id);
//   } catch (e) {
//     console.error('Error adding document: ', e);
//   }
//   try {
//     const docRef = addDoc(collection(db, 'users'), {
//       first: 'Alan',
//       middle: 'Mathison',
//       last: 'Turing',
//       born: 1912,
//     });

//     console.log('Document written with ID: ', (await docRef).id);
//   } catch (e) {
//     console.error('Error adding document: ', e);
//   }
//   const querySnapshot = await getDocs(collection(db, 'users'));
//   querySnapshot.forEach((doc) => {
//     console.log(`${doc.id} => ${doc.data()}`);
//   });
// }
// asyncFirestore();
if (typeof window !== 'undefined') {
  const analytics = getAnalytics(app);
}

export default firebase;
export { app, auth, db };
