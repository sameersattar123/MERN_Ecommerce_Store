import React, { useState } from 'react'
import { Box , Typography , styled } from '@mui/material';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';

const Component = styled(Menu)`
    margin-top: 5px;
`;

const Logout = styled(Typography)`
    font-size: 14px;
    margin-left: 20px;
`;


const Profile = ({accountName , setAccountName}) => {
    
    const logout = () => {
        setAccountName("")
    }

    const [ open , setOpen] = useState(false)

    const handleClick = (event) => {
        setOpen(event.currentTarget);
      };
      const handleClose = () => {
        setOpen(false);
      };
  return (
    <>
    <Box onClick={ handleClick} >
      <Typography style={{ marginTop : 2 , pointer : "cursor" }} >{accountName}</Typography>
    </Box>
      <Component
        anchorEl={open}
        open={Boolean(open)}
        onClose={handleClose}
       
      >
        <MenuItem onClick={() => {handleClose(); logout(); } }>
        <PowerSettingsNewIcon fontSize='small' color='primary'/> 
        <Logout>Logout</Logout>
        </MenuItem>
      </Component>
    </>
  )
}

export default Profile
