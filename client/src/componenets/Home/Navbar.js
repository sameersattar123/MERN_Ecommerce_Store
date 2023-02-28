import { Box , Typography } from '@mui/material'
import { styled } from '@mui/system'
import React from 'react'
import { navData } from '../../constant/data'

const Component = styled(Box)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'space-between',
    margin: '55px 130px 0 130px !important',
    overflowX: 'overlay',
    [theme.breakpoints.down('lg')]: {
        margin: '0px !important'
    }
}))

const Container = styled(Box)`
    padding: 12px 8px;
    text-align: center
`

const Text = styled(Typography)`
    font-size: 14px;
    font-weight: 600;
    font-family: inherit;
`;

const Navbar = () => {
  return (
    <Component>
      {
        navData.map((data) =>{
            return (
                <Container>
                    <img src={data.url} alt="product" />
                    <Text>{data.text}</Text>
                </Container>
            )
        })
      }
    </Component>
  )
}

export default Navbar
