import { useContext } from "react";
import { userContext } from "../context /UserContext";

const Account = () => {
  const context = useContext(userContext);
  return (
    <>
      <h1>Account</h1>
      <p>Username: {context?.user?.username}</p>
      <p>First name: {context?.user?.first}</p>
      <p>Last name: {context?.user?.last}</p>
      <p>Email: {context?.user?.email}</p>
    </>
  );
};

export default Account;
