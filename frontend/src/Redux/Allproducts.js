import { createSlice } from '@reduxjs/toolkit';

const productState = {
    cart : [],
    Allproducts : [],
    totalQuantity : 0 ,
    totalPrice : 0,
};

const AllProductsSlice = createSlice({
    name:"allProducts",
    initialState : productState.Allproducts,
    reducers : {
        AddtoStore(state, action){
           state.push(...state , action.payload);
        }
    }
})

export const AllProdcutsAction = AllProductsSlice.actions;
export default AllProductsSlice.reducer;