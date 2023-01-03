import { useSession, signIn, signOut } from 'next-auth/react';

function AccessToken() {
  const { data } = useSession();
  //   const { accessToken } = data

  return <div>{JSON.stringify(data)}</div>;
}
export default AccessToken;
