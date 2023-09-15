import React, { useState } from "react";
import { Box, TextField } from "@mui/material";
import logoImage from "../../assets/app-logo.png";
import {
  Container,
  Image,
  Wrapper,
  LoginButton,
  SignupButton,
  Text,
} from "./LoginFormStyle";

const loginInitialValues = {
  username: "",
  password: "",
};

const signupInitialValues = {
  username: "",
  password: "",
  confirmPassword: "",
};

const LoginForm = () => {
  const [login, setLogin] = useState(loginInitialValues);
  const [signup, setSignup] = useState(signupInitialValues);
  // const [error, showError] = useState('');
  const [account, toggleAccount] = useState("login");

  const toggleSignup = () => {
    account === "signup" ? toggleAccount("login") : toggleAccount("signup");
  };

  const onValueChange = (e) => {
    console.log(e.target.value);
    setLogin({ ...login, [e.target.name]: e.target.value });
  };

  const onInputChange = (e) => {
    console.log(e.target.name);
    setSignup({ ...signup, [e.target.name]: e.target.value });
  };
  return (
    <Container>
      <Box>
        <Image src={logoImage} alt="blog" />
        {account === "login" ? (
          <Wrapper>
            <TextField
              variant="standard"
              value={login.username}
              onChange={(e) => onValueChange(e)}
              name="username"
              label="Enter Username"
            />
            <TextField
              variant="standard"
              value={login.password}
              onChange={(e) => onValueChange(e)}
              name="password"
              label="Enter Password"
            />

            {/* {error && <Error>{error}</Error>} */}

            <LoginButton variant="contained">Login</LoginButton>
            <Text style={{ textAlign: "center" }}>OR</Text>
            <SignupButton
              style={{ marginBottom: 50 }}
              onClick={() => toggleSignup()}
            >
              Create an account
            </SignupButton>
          </Wrapper>
        ) : (
          <Wrapper>
            <TextField
              variant="standard"
              onChange={(e) => onInputChange(e)}
              name="name"
              label="Enter Name"
            />
            <TextField
              variant="standard"
              onChange={(e) => onInputChange(e)}
              name="username"
              label="Enter Username"
            />
            <TextField
              variant="standard"
              onChange={(e) => onInputChange(e)}
              name="password"
              label="Enter Password"
            />

            <SignupButton>Signup</SignupButton>
            <Text style={{ textAlign: "center" }}>OR</Text>
            <LoginButton variant="contained" onClick={() => toggleSignup()}>
              Already have an account
            </LoginButton>
          </Wrapper>
        )}
      </Box>
    </Container>
  );
};

export default LoginForm;
