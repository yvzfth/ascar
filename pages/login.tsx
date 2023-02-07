import { Authenticator } from '@aws-amplify/ui-react';
import React from 'react';
const Login = ({ signOut, user }: { signOut: any; user: any }) => {
  return (
    <div className='mt-20'>
      <Authenticator>
        <h1>Hello {user?.username}</h1>
        <button onClick={signOut}>Sign Out</button>
      </Authenticator>
    </div>
  );
};
export default Login;
