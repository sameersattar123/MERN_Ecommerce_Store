import { Box, styled, Button } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FlashOnIco from "@mui/icons-material/FlashOn";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addCart } from "../../redux/Actions/CartAction";

const LeftContainer = styled(Box)(({ theme }) => ({
  minWidth: "40%",
  padding: "40px 0 0 80px",
  [theme.breakpoints.down("md")]: {
    padding: "20px 40px",
  },
}));

const Image = styled("img")({
  padding: "15px 20px",
  border: "1px solid #f0f0f0",
  width: "95%",
});

const StyledButton = styled(Button)`
  width: 46%;
  border-radius: 2px;
  height: 50px;
  color: #fff;
`;

const ActionDetails = ({ product }) => {
  const Navigate = useNavigate();
  const dispatch = useDispatch();
  
  const [quantity, setQuantity] = useState(1);
  
  const { id } = product;

  const AddToCard = () => {
    dispatch(addCart(id , quantity));
    Navigate("/cart");
  };
  return (
    <LeftContainer>
      <Image src={product.detailUrl} alt="" />
      <br />
      <StyledButton
        style={{ marginRight: 10, background: "#ff9f00" }}
        onClick={() => AddToCard()}
        variant="contained"
      >
        <ShoppingCartIcon /> Add to Cart
      </StyledButton>
      <StyledButton style={{ background: "#fb641b" }} variant="contained">
        <FlashOnIco /> Buy Now
      </StyledButton>
    </LeftContainer>
  );
};

export default ActionDetails;
