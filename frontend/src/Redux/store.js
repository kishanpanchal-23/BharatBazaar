import { configureStore } from "@reduxjs/toolkit";
// import AllproductsReducer from "./Allproducts";
import cartReducer from './cartSlice';
import authReducer from './authSlice';

const store = configureStore({
    reducer : {
        // AddtoStore : AllproductsReducer,
        cart : cartReducer,
        auth : authReducer,
    }
})

export default store;