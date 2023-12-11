import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//     cartItems : [],
//     // cartTotalQuantity : 0,
//     // cartTotalAmount : 0,
// }

const cartSlice = createSlice({
    name:"cart",
    initialState : [],
    reducers : {
        add(state, action){
        //  const existingIndex = state.cartItems.findIndex(
        //     (item) => item.id === action.payload.id
        //  )
        // const existingIndex = state.cartItems.length;
        //  if(existingIndex >= 0){
        //     state.cartItems[existingIndex] = {
        //         ...state.cartItems[existingIndex],
        //         cartQuantity : state.cartItems[existingIndex].cartQuantity + 1,
        //     }
        //  }else{
        //     let tempProductItem = {...action.payload, cartQuantity: 1};
        //     state.cartItems.push(tempProductItem);
        //  }
             state.push(action.payload);
        },
        Remove(state, action){
         return state.filter((item)=> item.id !== action.payload);
        } 
    }
});

export const {add, Remove} = cartSlice.actions;
export default cartSlice.reducer;
