import { createStore , combineReducers, applyMiddleware} from "redux"
import thunk  from "redux-thunk"
import { composeWithDevTools } from "redux-devtools-extension"
import { getProductsReducers , getProductDetailsReducers } from "./Reducers/ProductsReducer"
import { CartReducer } from "./Reducers/CartReducer"

const reducer = combineReducers({
    getProducts : getProductsReducers,
    getProductDetails : getProductDetailsReducers,
    cart : CartReducer,
})

const middleWare = [thunk]

const Store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(...middleWare))
)

export default Store;