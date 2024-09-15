import { useContext, useReducer, useState } from "react";
import AuthContext from "./contexts/authContexts";

const LoginStatus = () => {
  const { user, authDispatch } = useContext(AuthContext);

  if (user)
    return (
      <>
        <div>
          <span className="mx-2">{user}</span>
          <a onClick={() => authDispatch({ type: "LOGOUT" })} href="#">
            Logout
          </a>
        </div>
      </>
    );
  return (
    <div>
      <a
        onClick={() =>
          authDispatch({ type: "LOGIN", userName: "Mosh.Hamadani" })
        }
        href="#"
      >
        Login
      </a>
    </div>
  );
};

export default LoginStatus;
