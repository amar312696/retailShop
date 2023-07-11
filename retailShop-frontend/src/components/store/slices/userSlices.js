import { createSlice } from '@reduxjs/toolkit';

const dataSlice=createSlice({
    name:'data',
    initialState:[],
    reducers:{
        setData:(state,action)=>{
            return action.payload;
        },
        
        
    },
});
// console.log(dataSlice.actions);

export {dataSlice};