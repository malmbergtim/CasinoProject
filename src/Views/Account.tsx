import { info } from "node:console";
import { resourceLimits } from "node:worker_threads";
import { useContext, useEffect } from "react";
import { userContext } from "../context /UserContext";

const Account = () => {
  const context = useContext(userContext);
  useEffect(() => {
    const userData = localStorage.getItem("user-info");
    const accountInfo = JSON.parse(userData!);

    context?.setRegisterUser(accountInfo);
  }, []);

  console.log("hello from user", context?.user);

  return (
    <>
      <h1>Account Page</h1>
      <p>id: {context?.user?.id}</p>
      <p>email: {context?.user?.email}</p>
      <p>{context?.user?.firstName}</p>
      <p>{context?.user?.lastName}</p>
    </>
  );
};

export default Account;
