import { Box } from '@mui/material';
import './App.css';
import Header from './componenets/Header/Header';
import Home from './componenets/Home/Home';
import DataProvider from './context/DataProvider';
import { BrowserRouter , Routes , Route } from "react-router-dom"
import DetailsViews from './componenets/Details/DetailsViews';
import Cart from "./componenets/Cart/Cart"

function App() {
  return (
   <DataProvider>
   <BrowserRouter>
    <Header/>
    <Box style={{ marginTop: 54}} >
    <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/product/:id" element={<DetailsViews/>}/>
    <Route path="/cart" element={<Cart/>}/>
    </Routes>
    </Box>
   </BrowserRouter>
   </DataProvider>
  );
}

export default App;
