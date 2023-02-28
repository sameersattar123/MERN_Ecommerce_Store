import  express  from "express";
import { getProducts , getProductById } from "../Controller/ProductController.js";
import { UserSignup , UserLogin } from "../Controller/UserController.js";

const router = express.Router();

router.post("/signup" , UserSignup)
router.post("/login" , UserLogin)

router.get("/products" , getProducts)
router.get("/product/:id" , getProductById)

export default router;