import { Box, InputBase, List, ListItem, styled } from "@mui/material";
import React, { useEffect, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../redux/Actions/ProductActions";
import { Link } from "react-router-dom";

const SearchContainer = styled(Box)`
  border-radius: 2px;
  margin-left: 10px;
  width: 38%;
  background-color: #fff;
  display: flex;
`;

const SearchIconWrapper = styled(Box)`
  margin-left: auto;
  padding: 5px;
  display: flex;
  color: blue;
`;

const ListWrapper = styled(List)`
  position: absolute;
  color: #000;
  background: #ffffff;
  margin-top: 36px;
`;

const InputSearchBase = styled(InputBase)`
  font-size: unset;
  width: 100%;
  padding-left: 20px;
`;

const Search = () => {
  const [text, setText] = useState();
  const [open, setOpen] = useState(true);

  const getText = (text) => {
    setText(text);
    setOpen(false);
  };

  const getProduct = useSelector((state) => state.getProducts);

  const { products } = getProduct;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <>
      <SearchContainer>
        <InputSearchBase
          placeholder="Search for products , brands amd more" inputProps={{ 'aria-label': 'search' }}
          value={text}
          onChange={(e) => getText(e.target.value)}
        />
        <SearchIconWrapper>
          <SearchIcon />
        </SearchIconWrapper>
        {text && (
          <ListWrapper hidden={open}>
            {products
              .filter((product) =>
                product.title.longTitle
                  .toLowerCase()
                  .includes(text.toLowerCase())
              )
              .map((product) => {
                return (
                <ListItem>
                  <Link
                    to={`/product/${product.id}`}
                    style={{ textDecoration: "none", color: "inherit" }}
                    onClick={() => setOpen(true)}
                  >
                    {product.title.longTitle}
                  </Link>
                </ListItem>
                )
              })}
          </ListWrapper>
        )}
      </SearchContainer>
    </>
  );
};

export default Search;
