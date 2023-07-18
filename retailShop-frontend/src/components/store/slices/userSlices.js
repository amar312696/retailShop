import { createSlice } from '@reduxjs/toolkit';

const dataSlice=createSlice({
    name:'data',
    initialState:[],
    reducers:{
        addData:(state,action)=>{
            state.push(action.payload);
        },
        
        removeData:(state, action) => {
            let index = state.length
            state.forEach((element, ind) => {
                if(element.id === action.payload.id) {
                    index = ind
                }
            })

            state.splice(index, 1);
        }
    },
});
const topBarSlice=createSlice({
    name:'topBar',
    initialState: {
        mainData: {},
    },
    reducers:{
        setData:(state,action)=>{
            state.mainData=action.payload;
        }
    }
});
// console.log(dataSlice.actions);
// console.log(topBarSlice.actions);

export const {addData, removeData}=dataSlice.actions;
export const {setData}=topBarSlice.actions;

export {dataSlice,topBarSlice};
