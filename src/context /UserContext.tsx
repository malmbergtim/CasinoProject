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
};

type userProviderProps = {
  children: ReactNode;
};

export const UserContext = createContext<userContextType | null>(null);

export const UserProvider = ({ children }: userProviderProps) => {
  const [user, setRegisterUser] = useState<userCredentials | null>(null);
  return (
    <UserContext.Provider value={{ user, setRegisterUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;
