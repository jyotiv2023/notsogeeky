import { styled, Box, Button, Typography } from "@mui/material";

export const Container = styled(Box)`
  width: 400px;
  margin: auto;
  box-shadow: 5px 2px 5px 2px rgb(0 0 0/ 0.6);
`;

export const Image = styled("img")({
  width: 120,
  display: "flex",
  margin: "auto",
  padding: "15px 0 0",
});

export const Wrapper = styled(Box)`
  padding: 20px 25px;
  display: flex;
  flex: 1;
  overflow: auto;
  flex-direction: column;
  & > div,
  & > button,
  & > p {
    margin-top: 15px;
  }
`;

export const LoginButton = styled(Button)`
  text-transform: none;
  background: #fb641b;
  color: #fff;
  height: 35px;
  border-radius: 2px;
`;

export const SignupButton = styled(Button)`
  text-transform: none;
  background: #fff;
  color: #2874f0;
  height: 35px;
  border-radius: 2px;
  box-shadow: 0 2px 4px 0 rgb(0 0 0 / 20%);
`;

export const Text = styled(Typography)`
  color: #878787;
  font-size: 14px;
`;

// export const Error = styled(Typography)`
//     font-size: 10px;
//     color: #ff6161;
//     line-height: 0;
//     margin-top: 10px;
//     font-weight: 600;
// `
