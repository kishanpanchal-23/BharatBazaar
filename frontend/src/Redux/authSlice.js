import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    UserData :[],
}

const authSlice = createSlice({
    name:"auth",
    initialState,
    reducers:{
        SetUserData(state,action){
         state.UserData = action.payload   
            // state.push(...state, action.payload);
        },
        RemoveUserData(state,action){
            state.UserData = state.UserData.filter((item)=> item.id !== action.payload );
        }
    }
});

export const { SetUserData,RemoveUserData } = authSlice.actions;
export default authSlice.reducer;