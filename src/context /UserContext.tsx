import { createContext, ReactNode, useState } from "react";

export type userCredentials = {
  username: string;
  password: string;
  email: string;
  first: string;
  last: string;
};

type userContextType = {
  user: userCredentials | null;
  setRegisterUser: React.Dispatch<React.SetStateAction<userCredentials | null>>;
  loggedIn: boolean;
  setLoggedIn: React.Dispatch<React.SetStateAction<any>>;
};

type userProviderProps = {
  children: ReactNode;
};

export const UserContext = createContext<userContextType | null>(null);

export const UserProvider = ({ children }: userProviderProps) => {
  const [user, setRegisterUser] = useState<userCredentials | null>(null);
  const [loggedIn, setLoggedIn] = useState<boolean>(false);
  return (
    <UserContext.Provider
      value={{ user, setRegisterUser, loggedIn, setLoggedIn }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;
