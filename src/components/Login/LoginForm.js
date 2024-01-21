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
  ResponsiveContainer,
  ResponsiveImage,
  ResponsiveWrapper,
  Error,
} from "./LoginFormStyle";

import { API } from "../../service/api";

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
  const [error, setError] = useState("");
  const [account, toggleAccount] = useState("login");

  const toggleSignup = () => {
    setLogin(loginInitialValues);
    setSignup(signupInitialValues);
    account === "signup" ? toggleAccount("login") : toggleAccount("signup");
  };

  const onLoginValueChange = (e) => {
    console.log(e.target.name, e.target.value);
    setLogin({ ...login, [e.target.name]: e.target.value });
  };

  const onSignupValueChange = (e) => {
    const { name, value } = e.target;
    setSignup((prev) => {
      return {
        ...prev,
        [name]: value,
        confirmPassword:
          name === "password"
            ? value === prev.confirmPassword
              ? prev.confirmPassword
              : ""
            : prev.confirmPassword,
      };
    });
  };
  const signUpUser = async () => {
    try {
      if (signup.password !== signup.confirmPassword) {
        throw new Error("Password dont match");
      }
      let res = await API.userSignup(signup);
      console.log(res);
      // Validate password and confirmPassword

      if (signup.password !== signup.confirmPassword) {
        alert("Passwords don't match");
        return;
      }

      if (res.isSuccess) {
        setError("");
        setSignup(signupInitialValues);
        toggleAccount("login");
      } else {
        setError(`Something went wrong! ${res.msg}`);
      }
    } catch (err) {
      setError(`Error during signup:${err.message}`);
    }
  };

  return (
    <ResponsiveContainer>
      <Box>
        <ResponsiveImage src={logoImage} alt="blog" />
        {account === "login" ? (
          <ResponsiveWrapper>
            <TextField
              variant="standard"
              value={login.username}
              onChange={(e) => onLoginValueChange(e)}
              name="username"
              label="Enter Username"
            />
            <TextField
              variant="standard"
              value={login.password}
              onChange={(e) => onLoginValueChange(e)}
              name="password"
              label="Enter Password"
            />

            {error && <Error>{error}</Error>}

            <LoginButton variant="contained">Login</LoginButton>
            <Text style={{ textAlign: "center" }}>OR</Text>
            <SignupButton
              style={{ marginBottom: "50px" }}
              onClick={() => toggleSignup()}
            >
              Create an account
            </SignupButton>
          </ResponsiveWrapper>
        ) : (
          <ResponsiveWrapper>
            <TextField
              variant="standard"
              onChange={(e) => onSignupValueChange(e)}
              name="username"
              value={signup.username}
              label="Enter user name"
            />
            <TextField
              variant="standard"
              onChange={(e) => onSignupValueChange(e)}
              name="password"
              value={signup.password}
              label="Enter Password"
            />
            <TextField
              variant="standard"
              onChange={(e) => onSignupValueChange(e)}
              name="confirmPassword"
              value={signup.confirmPassword}
              label="Confirm password"
            />
            {error && <Error>{error}</Error>}
            <SignupButton onClick={() => signUpUser()}>Signup</SignupButton>
            <Text style={{ textAlign: "center" }}>OR</Text>
            <LoginButton
              style={{ marginBottom: "50px" }}
              variant="contained"
              onClick={() => toggleSignup()}
            >
              Already have an account
            </LoginButton>
          </ResponsiveWrapper>
        )}
      </Box>
    </ResponsiveContainer>
  );
};

export default LoginForm;
