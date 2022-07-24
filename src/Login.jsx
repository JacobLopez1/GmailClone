import { Button } from "@mui/material";
import React from "react";
import { useDispatch } from "react-redux";
import { login } from "./features/userSlice";
import { auth, provider } from "./Firebase";
import "./Login.css";

const Login = () => {
  const dispatch = useDispatch();

  const signIn = () => {
    auth
      .signInWithPopup(provider)
      .then(({ user }) => {
        dispatch(
          login({
            displayName: user.displayname,
            email: user.email,
            photoUrl: user.photoURL,
          })
        );
      })
      .catch((error) => alert(error.message));
  };
  return (
    <div className="login">
      <div className="login__container">
        <img
          src="https://logos-world.net/wp-content/uploads/2020/11/Gmail-Logo-700x394.png"
          alt=""
        />
        <Button variant="contain" color="blue" onClick={signIn}>
          Login
        </Button>
      </div>
    </div>
  );
};

export default Login;
