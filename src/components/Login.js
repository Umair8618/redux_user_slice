import React from "react";
import { useDispatch } from "react-redux"; //useDispatch hook is used to modify values of states
import { login, logout } from "../features/user"; //login action imported that was  created

const Login = () => {
  const dispatch = useDispatch();
  return (
    <div className="d-flex justify-content-between m-3">
      <button
        className="btn btn-primary ml-5"
        onClick={() => {
          dispatch(
            login({
              name: "Umair",
              age: 22,
              email: "umair@gmailcom",
              about:
                "Since creating that first suit, Iron Man has gone through numerous events significant to his life.",
            })
          );
        }}
      >
        Login
      </button>

      <button
        className="btn btn-danger"
        onClick={() => {
          dispatch(logout());
        }}
      >
        Logout
      </button>
    </div>
  );
};

export default Login;
