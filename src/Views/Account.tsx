import { useContext } from "react";
import { userContext } from "../context /UserContext";

const Account = () => {
  const context = useContext(userContext);
  return (
    <>
      <h1>Account</h1>
      <p>Email: {context?.user?.email}</p>
      <p>First name: {context?.user?.firstName}</p>
      <p>Last name: {context?.user?.lastName}</p>
    </>
  );
};

export default Account;
