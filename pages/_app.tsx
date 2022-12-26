import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { UserProvider } from '../context/user';
import { AuthProvider } from '../context/auth';
export default function App({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <UserProvider>
        <Component {...pageProps} />
      </UserProvider>
    </AuthProvider>
  );
}
