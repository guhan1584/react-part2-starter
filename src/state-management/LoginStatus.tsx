import useAuth from "./hooks/useAuth";

const LoginStatus = () => {
  const { user, authDispatch } = useAuth();

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
