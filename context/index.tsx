import {
  createContext,
  ReactNode,
  useContext,
  useState,
  useEffect,
  Dispatch,
  SetStateAction,
} from 'react';

interface User {
  id: string;
  name: string;
  email: string;
  photoUrl: string;
}
interface UserProviderProps {
  children: ReactNode;
}
// const UserDefaultValues: User = {
//   uid: '',
//   name: '',
//   email: '',
//   photoUrl: '',
// };
interface UserContext {
  user: User | null;
  setUser: Dispatch<SetStateAction<User | null>>;
}

export const UserContext = createContext<UserContext>({
  user: null,
  setUser: () => {},
});

export function useAuth() {
  return useContext(UserContext);
}

export const UserProvider = ({ children }: UserProviderProps) => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    // Try to retrieve the user from storage when the component mounts
    const storedUser = window.localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  useEffect(() => {
    // Store the user in storage when it changes
    if (user !== null)
      window.localStorage.setItem('user', JSON.stringify(user));
  }, [user]);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
