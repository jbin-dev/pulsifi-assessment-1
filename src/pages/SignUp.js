import { Typography, TextField, Container, Button } from "@mui/material";
import { useState } from "react";
import { add } from "../services/Firebase/Firestore";
import { signUp } from "../services/Firebase/Auth";
import { useNavigate } from "react-router-dom";
import { useLogin } from "../context/AuthContext";

export default function SignUp() {
  let navigate = useNavigate();
  const [employerName, setEmployerName] = useState("");
  const [location, setLocation] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const login = useLogin();

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      const company = await add("company", {
        username: email,
        companyName: employerName,
        location,
      });
      const user = await signUp(email, password).then(() => {
        login();
      });
      sessionStorage.setItem(
        "user",
        JSON.stringify({
          ...user,
          companyName: employerName,
          location,
          companyId: company.id,
        })
      );
      navigate("/");
    } catch (e) {
      throw new Error(e);
    }
  };

  return (
    <Container>
      <form onSubmit={submitHandler}>
        <Typography>Employer Info</Typography>

        <TextField
          onChange={(e) => setEmployerName(e.target.value)}
          id="companyName"
          label="Employer Name"
          fullWidth
          required
          sx={{
            margin: "20px 0px",
            display: "block",
          }}
        />

        <TextField
          onChange={(e) => setLocation(e.target.value)}
          id="location"
          label="Employer Location"
          fullWidth
          required
          sx={{
            margin: "20px 0px",
            display: "block",
          }}
        />

        <Typography>Login info</Typography>
        <TextField
          onChange={(e) => setEmail(e.target.value)}
          id="username"
          label="Email"
          fullWidth
          required
          sx={{
            margin: "20px 0px",
            display: "block",
          }}
        />

        <TextField
          onChange={(e) => setPassword(e.target.value)}
          id="password"
          label="Password"
          fullWidth
          required
          type="password"
          sx={{
            margin: "20px 0px",
            display: "block",
          }}
        />

        <Button type="submit" color="primary" variant="contained">
          Register
        </Button>
      </form>
    </Container>
  );
}
