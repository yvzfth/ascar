import nookies from 'nookies';
import React, {
  useState,
  useEffect,
  createContext,
  useContext,
  Dispatch,
  SetStateAction,
} from 'react';
// import firebaseClient from '../firebase';
import firebase from '../firebase';
// import firebase from 'firebase/compat/app';

// import type {User} from "firebase/app"
// import 'firebase/compat/auth';

interface AuthContext {
  user: firebase.User | null;
  setUser: Dispatch<SetStateAction<firebase.User | null>>;
}
export const AuthContext = createContext<AuthContext>({
  user: null,
  setUser: () => {},
});

export function AuthProvider({ children }: any) {
  const [user, setUser] = useState<firebase.User | null>(null);

  // listen for token changes
  // call setUser and write new token as a cookie
  useEffect(() => {
    return firebase.auth().onIdTokenChanged(async (user) => {
      if (!user) {
        setUser(null);
        nookies.set(undefined, 'token', '', { path: '/' });
      } else {
        const token = await user.getIdToken();
        setUser(user);
        nookies.set(undefined, 'token', token, { path: '/' });
      }
    });
  }, []);

  // force refresh the token every 10 minutes
  useEffect(() => {
    const handle = setInterval(async () => {
      const user = firebase.auth().currentUser;
      if (user) await user.getIdToken(true);
    }, 10 * 60 * 1000);

    // clean up setInterval
    return () => clearInterval(handle);
  }, []);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
}
export const useAuth = () => {
  return useContext(AuthContext);
};
