import React, { useState } from "react";
import { Container, Grid } from "@mui/material";
import LoginComponent from "../components/Login/login";
import { signIn } from "../services/Firebase/Auth";
import { useNavigate } from "react-router-dom";
import { useLogin } from "../context/AuthContext";

export default function Login() {
  let navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState(false);
  const login = useLogin();

  const loginHandler = async (e) => {
    e.preventDefault();

    if (username && password) {
      // Login
      await signIn(username, password)
        .then((user) => {
          login();
          sessionStorage.setItem("user", JSON.stringify(user));
          navigate("/");
        })
        .catch(() => {
          setLoginError(true);
        });
    }
  };

  return (
    <Container>
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justifyContent="center"
        style={{ minHeight: "100vh" }}
      >
        <Grid item xs={4}>
          <LoginComponent
            setUsername={setUsername}
            setPassword={setPassword}
            loginHandler={loginHandler}
            loginError={loginError}
          />
        </Grid>
      </Grid>
    </Container>
  );
}
