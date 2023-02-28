import React, { Fragment, useEffect } from 'react'
import Banner from './Banner'
import Navbar from './Navbar'
import {  Box , Slide, styled } from '@mui/material';
import { useDispatch , useSelector } from 'react-redux';
import { getProducts } from '../../redux/Actions/ProductActions';
import Slider from './Slider';
import MidSlide from './MidSlide';
import MidSection from './MidSection';

const Component = styled(Box)`
    padding: 20px 10px;
    background: #F2F2F2;
`;
const Home = () => {

     let {products}  =  useSelector(state => state.getProducts)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getProducts())
  } , [dispatch])



  return (
    <Fragment>
      <Navbar/>
      <Component>
      <Banner/>
      <MidSlide products={products} title="Deal of the Day" timer={true}/>
      <MidSection/>
      <Slider products={products} title="Discount of the Day" timer={false}/>
      <Slider products={products} title="Suggesting Items" timer={false}/>
      <Slider products={products} title="Top Selections" timer={false}/>
      <Slider products={products} title="Recommended Items" timer={false}/>
      <Slider products={products} title="Trending Offers" timer={false}/>
      <Slider products={products} title="Season's Top Picks" timer={false}/>
      </Component>
    </Fragment>
  )
}

export default Home
