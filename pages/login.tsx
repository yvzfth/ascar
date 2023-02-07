import { withAuthenticator } from '@aws-amplify/ui-react';

function Login({ signOut, user }: { signOut: any; user: any }) {
  return (
    <>
      <h1>Hello {user?.username}</h1>
      <button onClick={signOut}>Sign Out</button>
    </>
  );
}
export default withAuthenticator(Login);
