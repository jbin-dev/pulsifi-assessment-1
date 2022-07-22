import { Button, TextField, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function Login({
  setUsername,
  setPassword,
  loginHandler,
  loginError,
}) {
  let navigate = useNavigate();

  const toSignUpHandler = () => {
    navigate("/signup");
  };

  return (
    <form noValidate autoComplete="off" onSubmit={loginHandler}>
      <TextField
        onChange={(e) => setUsername(e.target.value)}
        label="Username"
        required
        sx={{
          margin: "20px 0px",
          display: "block",
        }}
      />

      <TextField
        onChange={(e) => setPassword(e.target.value)}
        label="Password"
        required
        type="password"
        sx={{
          margin: "20px 0px",
          display: "block",
        }}
      />

      {loginError && (
        <Typography color="error">Login failed, please try again</Typography>
      )}

      <Button type="submit" color="primary" variant="contained">
        Login
      </Button>

      <Button
        onClick={toSignUpHandler}
        style={{ marginLeft: 10 }}
        color="primary"
        variant="contained"
      >
        Sign Up
      </Button>
    </form>
  );
}
