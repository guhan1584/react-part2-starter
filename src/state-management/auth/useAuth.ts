import { useContext } from "react";
import AuthContext from "../auth/authContexts";

const useAuth = () => useContext(AuthContext);

export default useAuth;
