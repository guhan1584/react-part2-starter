import React, { ReactNode, useReducer } from "react";
import authReducer from "./reducers/authReducer";
import AuthContext from "./contexts/authContexts";

interface Props {
  children: ReactNode;
}

const AuthProvider = ({ children }: Props) => {
  const [user, authDispatch] = useReducer(authReducer, "");

  return (
    <AuthContext.Provider value={{ user, authDispatch }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
