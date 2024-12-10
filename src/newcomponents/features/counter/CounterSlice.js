import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
    name :'counter',
    initialState:{counter:0},
    reducers:{
        Increment :(state)=>{
            state.counter += 1;
        },
        Decrement:(state)=>{
            state.counter -= 1;
    },
    Reset:(state)=>{
        state.counter = 0;},
    },
});

export const {Increment,Decrement,Reset} = counterSlice.actions;
export default counterSlice.reducer;