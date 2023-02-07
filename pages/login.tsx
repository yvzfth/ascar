import { Authenticator } from '@aws-amplify/ui-react';
import React from 'react';
const Login = ({ signOut, user }: { signOut: any; user: any }) => {
  return (
    <Authenticator>
      <h1>Hello {user?.username}</h1>
      <button onClick={signOut}>Sign Out</button>
    </Authenticator>
  );
};
export default Login;
