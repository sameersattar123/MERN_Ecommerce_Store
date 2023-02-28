import { Box, Typography, styled, Button, Card } from "@mui/material";
import React from "react";
import GroupButton from "./GroupButton";
import { addEllipsis } from "../../utils.js/Utils";
import { useDispatch } from "react-redux";
import { removeFromCart } from "../../redux/Actions/CartAction";

const Component = styled(Card)`
  border-top: 1px solid #f0f0f0;
  border-radius: 0px;
  display: flex;
`;

const LeftComponent = styled(Box)`
  margin: 20px;
  display: flex;
  flex-direction: column;
`;

const SmallText = styled(Typography)`
  color: #878787;
  font-size: 14px;
  margin-top: 10px;
`;

const Cost = styled(Typography)`
  font-size: 18px;
  font-weight: 600;
`;

const MRP = styled(Typography)`
  color: #878787;
`;

const Discount = styled(Typography)`
  color: #388e3c;
`;

const Remove = styled(Button)`
  margin-top: 20px;
  font-size: 16px;
`;

const CartItem = ({ item }) => {

    const dispatch = useDispatch();
  const fassured =
    "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png";

    const RemoveItemFromCart = (id) => {
       dispatch(removeFromCart(id))
    }
  return (
    <>
      <Component>
        <LeftComponent>
          <img
            src={item.detailUrl}
            alt="url"
            style={{ height: 110, width: 110 }}
          />
          <GroupButton />
        </LeftComponent>
        <Box style={{ margin: "20px" }}>
          <Typography>{addEllipsis(item.title.longTitle)}</Typography>
          <SmallText>
            <Box component="span">
              <img src={fassured} style={{ width: 77, marginLeft: 20 }} />
            </Box>
          </SmallText>
          <Typography style={{ margin: "20px 0" }}>
            <Cost component="span">₹{item.price.cost}</Cost>&nbsp;&nbsp;&nbsp;
            <MRP component="span">
              <strike>₹{item.price.mrp}</strike>
            </MRP>
            &nbsp;&nbsp;&nbsp;
            <Discount component="span">{item.price.discount} off</Discount>
          </Typography>
          <Remove onClick={() => RemoveItemFromCart(item.id)} >Remove</Remove>
        </Box>
      </Component>
    </>
  );
};

export default CartItem;
