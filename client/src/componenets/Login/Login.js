import React, { useContext, useState } from "react";
import {
  Box,
  Button,
  Dialog,
  TextField,
  Typography,
  styled,
} from "@mui/material";

import { authLogin, authSignup } from "../../service/api";
import { DataContext } from "../../context/DataProvider";

const Component = styled(Box)`
  height: 70vh;
  width: 90vh;
  padding: 0;
  padding-top: 0;
`;

const LoginButton = styled(Button)`
  text-transform: none;
  background: #fb641b;
  color: #fff;
  height: 48px;
  border-radius: 2px;
`;

const RequestOTP = styled(Button)`
  text-transform: none;
  background: #fff;
  color: #2874f0;
  height: 48px;
  border-radius: 2px;
  box-shadow: 0 2px 4px 0 rgb(0 0 0 / 20%);
`;

const Text = styled(Typography)`
  color: #878787;
  font-size: 12px;
`;

const CreateAccount = styled(Typography)`
  margin: auto 0 5px 0;
  text-align: center;
  color: #2874f0;
  font-weight: 600;
  font-size: 14px;
  cursor: pointer;
`;

const Wrapper = styled(Box)`
  padding: 25px 35px;
  display: flex;
  flex: 1;
  overflow: auto;
  flex-direction: column;
  & > div,
  & > button,
  & > p {
    margin-top: 20px;
  }
`;

const Error = styled(Typography)`
    font-size: 10px;
    color: #ff6161;
    line-height: 0;
    margin-top: 10px;
    font-weight: 600;
`
// height: 70vh;

const Image = styled(Box)`
  background: #2874f0
    url(https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png)
    center 85% no-repeat;
  width: 28%;
  height: 85%;
  padding: 45px 35px;
  & > p,
  & > h5 {
    color: #ffffff;
    font-weight: 600;
  }
`;

const Login = ({ open, setOpen }) => {

    const accountInitialValues = {
        login : {
            view : "login",
            heading : "Login",
            subHeading : "Get access to your Orders, Wishlist and Recommendations",
        },
        Signup : {
            view : "Signup",
            heading : "Looks like you're new here",
            subHeading : "Signup to get started",
        }
    }

    const signupInitialValues = {
        firstname : "",
        lastname : "",
        phone : "",
        email : "",
        username : "",
        password : "",
}

    const loginInitialValues = {
  username : "",
  password : "",
}

    const [account, setAccount] = useState(accountInitialValues.login)
    const [signup , setSignup] = useState(signupInitialValues)
    const [Login , setLogin] = useState(loginInitialValues)
    const [error , setError] = useState(false)

    const { setAccountName } = useContext(DataContext)

    const AccountSignUp = () => {
        setAccount(accountInitialValues.Signup)
    }

  const handleClose = () => {
    setOpen(false);
    setAccount(accountInitialValues.login)
    setError(false)
  };

  const SignupChange = (e) => {
    setSignup({...signup , [e.target.name] : e.target.value})
  }

  const SignupUser = async() => {
    let response = await authSignup(signup);
    if(!response) return;
    handleClose();
    setAccountName(signup.firstname)
  }

  const onValueChange = (e) => {
    setLogin({...Login , [e.target.name] : e.target.value})
  }

  const loginUser = async() => {
    let response = await authLogin(Login)
    if(response.status === 200){
      handleClose();
      setAccountName(response.data.data.firstname)
    }else {
      setError(true)
    }
  }
  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        PaperProps={{ sx: { maxWidth: "unset" } }}
      >
        <Component>
          <Box style={{ display: "flex", height: "100%" }}>
            <Image>
              <Typography variant="h5">{account.heading}</Typography>
              <Typography style={{ marginTop: 20 }}>
              {account.subHeading}
              </Typography>
            </Image>
            { account.view === "login" ? (
              <Wrapper>
                <TextField variant="standard"label="Enter your Username" onChange={(e) => onValueChange(e)} name="username"/>
                {error && <Error Error>Please enter valied username or phone number</Error> }
                <TextField variant="standard" label="Enter your Password" onChange={(e) => onValueChange(e)} name="password"/>
                <Typography>
                  By continuing, you agree to Flipkart's Terms of Use and
                  Privacy Policy
                </Typography>
                <LoginButton onClick={() => loginUser()} >Login</LoginButton>
                <Text style={{ textAlign: "center" }}>OR</Text>
                <RequestOTP>Request OTTP</RequestOTP>
                <CreateAccount onClick={() => AccountSignUp()}>
                  New to Flipkart? Create an account.
                </CreateAccount>
              </Wrapper>
            ) : (
              <Wrapper>
                <TextField variant="standard" onChange={(e) => SignupChange(e)} name="firstname" label="Enter your First name"/>
                <TextField variant="standard" onChange={(e) => SignupChange(e)} name="lastname" label="Enter your Last name"/>
                <TextField variant="standard" onChange={(e) => SignupChange(e)}  name="username" label="Enter your User Name" />
                <TextField variant="standard" onChange={(e) => SignupChange(e)}  name="email" label="Enter your Email" />
                <TextField variant="standard" onChange={(e) => SignupChange(e)}  name="password" label="Enter your Password" />
                <TextField variant="standard" onChange={(e) => SignupChange(e)}  name="phone" label="Enter your Phone Number" />
                <LoginButton onClick={() => SignupUser()} >Continue</LoginButton>
              </Wrapper>
            )}
          </Box>
        </Component>
      </Dialog>
    </div>
  );
};

export default Login;
