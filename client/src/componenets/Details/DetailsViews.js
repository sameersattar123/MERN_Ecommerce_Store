import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getProductDetails } from "../../redux/Actions/ProductActions";
import { Box, Typography, styled, Grid } from "@mui/material";
import ActionDetails from "./ActionDetails";
import ProductDetails from "./ProductDetails";

const Component = styled(Box)`
  margin-top: 55px;
  background: #f2f2f2;
`;

const Container = styled(Grid)(({ theme }) => ({
  background: "#FFFFFF",
  display: "flex",
  [theme.breakpoints.down("md")]: {
    margin: 0,
  },
}));

const RightContainer = styled(Grid)`
  margin-top: 50px;
  & > p {
    margin-top: 10px;
  }
`;

const DetailsViews = () => {
    
  const { id } = useParams();

  const { loading, product } = useSelector((state) => state.getProductDetails);


  const dispatch = useDispatch();

  useEffect(() => {
    if (product && id !== product.id) dispatch(getProductDetails(id));
  }, [dispatch, id, product, loading]);

  return (
    <Component>
      {
          product && Object.keys(product).length &&
        <Container container>
          <Grid item lg={4} md={4} sm={8} xs={12}>
            <ActionDetails product={product} />
          </Grid>
          <RightContainer item lg={8} md={8} sm={8} xs={12}>
            <ProductDetails  product={product} />
          </RightContainer>
        </Container>
      }
    </Component>
  );
};

export default DetailsViews;
