import { products } from "./constants/products.js";
import Product from "./model/product-Schema.js";


const defaultData = async() => {
 try {
    await Product.insertMany(products)
    console.log('DATA CONNETCED SUCCESSFULLY')
 } catch (error) {
    console.log(error.message)
 }
  
}

export default defaultData;
