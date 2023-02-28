import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import { Box, Drawer, IconButton, List ,  ListItem, styled, Typography } from "@mui/material";
import Search from "./Search";
import CustomeButton from "./CustomeButton";
import { Link } from "react-router-dom";
import MenuIcon from '@mui/icons-material/Menu';

const StyledHeader = styled(AppBar)`
  background-color: #2874f0;
  height: 55px;
`;

const Component = styled(Link)`
  margin-left: 12%;
  line-height: 0;
  color: #ffffff;
  text-decoration: none;
`;
const SubHeading = styled(Typography)`
    font-size: 10px;
    font-style: italic;
`
const PlusImage = styled('img')({
    width: 10,
    height: 10,
    marginLeft: 4
})

const CustomButtonWrapper = styled(Box)(({ theme }) => ({ 
  margin: '0 5% 0 auto', 
    [theme.breakpoints.down('sm')]: {
        display: 'none'
    }
}));

const MenuButton = styled(IconButton)(({ theme }) => ({
  display: 'none',
  [theme.breakpoints.down('sm')]: {
      display: 'block'
    }
}));

const Header = () => {
  
  const handleOpen= () => {
    setOpen(true)
  }
  
  const handleClose = () => {
    setOpen(false)
  }
  
  

  const [open , setOpen] = useState(false)

  const logoURL =
    "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png";
  const subURL =
    "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png";
  return (
    <>
      <StyledHeader>
        <Toolbar style={{ minHeight : 55}} >
        <MenuButton color="inherit" onClick={handleOpen}>
          <MenuIcon/>
        </MenuButton>
        <Drawer onClose={handleClose} open={open}>
       <CustomeButton/>
        </Drawer>
          <Component  to="/">
            <img src={logoURL} alt="logo" style={{ width: 75 }} />
            <Box style={{ display : 'flex'}} >
              <SubHeading>
                Explore&nbsp;
                <Box component="span" style={{ color: "#FFE500" }}>
                  Plus
                </Box>
              </SubHeading>
              <PlusImage src={subURL} alt="logo" />
            </Box>
          </Component>
          <Search/>
        <CustomButtonWrapper>
            <CustomeButton/>
        </CustomButtonWrapper>
        </Toolbar>
      </StyledHeader>
    </>
  );
};

export default Header;
