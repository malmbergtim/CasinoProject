import { createContext, useState } from "react";

const initialState = {
  username: "",
  password: "",
  email: "",
  first: "",
  last: "",
};

export type UserState = typeof initialState;

const userContext = createContext(initialState);

const UserProvider = (providerObject: any) => {
  const [user, setRegisterUser] = useState<UserState>({
    username: "",
    password: "",
    email: "",
    first: "",
    last: "",
  });
  console.log(providerObject);
  return (
    <userContext.Provider value={user}>
      {providerObject.children}
    </userContext.Provider>
  );
};

export default UserProvider;
