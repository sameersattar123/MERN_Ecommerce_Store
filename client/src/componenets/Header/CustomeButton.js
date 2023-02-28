import { Button, Box, Typography, styled, Badge } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import React, { useContext, useState } from "react";
import Login from "../Login/Login";
import { DataContext } from "../../context/DataProvider";
import { Link } from "react-router-dom";
import Profile from "./Profile";
import { useSelector } from "react-redux";

const Container = styled(Link)(({ theme }) => ({
  display: 'flex',
  [theme.breakpoints.down('sm')]: {
      display: 'block'
  }
}));

const Wrapper = styled(Box)(({ theme }) => ({
  margin: "0 3% 0 auto",
  display: "flex",
  "& > *": {
    marginRight: "40px !important",
    textDecoration: "none",
    color: "#FFFFFF",
    fontSize: 12,
    alignItems: "center",
    [theme.breakpoints.down("sm")]: {
      color: "#2874f0",
      alignItems: "center",
      display: "flex",
      flexDirection: "column",
      marginTop: 10,
    },
  },
  [theme.breakpoints.down("sm")]: {
    display: "block",
  },
}));

const LoginButton = styled(Button)(({ theme }) => ({
  color: "#2874f0",
  background: "#FFFFFF",
  textTransform: "none",
  fontWeight: 600,
  borderRadius: 2,
  padding: "5px 40px",
  height: 32,
  boxShadow: "none",
  [theme.breakpoints.down("sm")]: {
    background: "#2874f0",
    color: "#FFFFFF",
    marginLeft : "20px",
    marginTop : "10px",
  },
}));

const CustomeButton = () => {

  const { cardItems } = useSelector((state) => state.cart);
  const [open, setOpen] = useState(false);

  const openDialog = () => {
    setOpen(true);
  };

  const { accountName , setAccountName} = useContext(DataContext);

  return (
    <Wrapper>
      {accountName ? (
        <Profile accountName={accountName} setAccountName={setAccountName} />
      ) : (
        <LoginButton variant="contained" onClick={() => openDialog()}>
          Login
        </LoginButton>
      )}

      <Typography style={{ marginTop: 3 , width: 135 }}>
      Become a Seller
      </Typography>
      <Typography style={{ marginTop: 3 }}>More</Typography>

      <Container to="/cart">
      <Badge badgeContent={cardItems?.length} color="error" >
        <ShoppingCartIcon />
      </Badge>
        <Typography style={{ marginLeft : 7}}  >Cart</Typography>
      </Container>
      <Login open={open} setOpen={setOpen} />
    </Wrapper>
  );
};

export default CustomeButton;
