import { styled, Box, Button, Typography } from "@mui/material";

export const Container = styled(Box)`
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  box-shadow: 5px 2px 5px 2px rgb(0 0 0/ 0.6);
  padding: 0.5rem;
`;

export const Image = styled("img")`
  width: 100%;
  max-width: 50%;
  height: auto;
  display: block;
  margin: auto;
`;

export const Wrapper = styled(Box)`
  display: flex;
  flex-direction: column;
  & > div,
  & > button,
  & > p {
    margin-top: 20px;
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
  box-shadow: 0 4px 4px 0 rgb(0 0 0 / 20%);
`;

export const Text = styled(Typography)`
  color: #878787;
  font-size: 14px;
`;
export const Error = styled(Typography)`
  font-size: 10px;
  color: #ff6161;
  line-height: 0;
  margin-top: 10px;
  font-weight: 600;
`;
// Mobile-first responsive styles
const mediaQuery1 = "@media (min-width:475px)";
const mediaQuery2 = "@media (min-width:640px)";
const mediaQuery3 = "@media (min-width:768px)";
const mediaQuery4 = "@media (min-width:1024px)";
const mediaQuery5 = "@media (min-width:1280px)";
const mediaQuery6 = "@media (min-width:1536px)";

export const ResponsiveContainer = styled(Container)`
  ${mediaQuery1} {
    max-width: 35%;
  }
  ${mediaQuery2} {
    max-width: 35%;
  }
  ${mediaQuery3} {
    max-width: 35%;
  }
  ${mediaQuery4} {
    max-width: 35%;
  }
  ${mediaQuery5} {
    max-width: 35%;
  }
  ${mediaQuery6} {
    max-width: 35%;
  }
`;

export const ResponsiveImage = styled(Image)`
  ${mediaQuery1} {
    max-width: 30%;
  }
`;

export const ResponsiveWrapper = styled(Wrapper)`
  ${mediaQuery1} {
    padding: 10px;
  }
`;

// Add more responsive styles as needed
