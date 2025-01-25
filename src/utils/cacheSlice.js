import { createSlice } from "@reduxjs/toolkit";

const cacheSlice = createSlice({
    name: "cache",
    initialState:{},
    reducers:{
        addToCache:(state,action)=>{
            Object.assign(state, action.payload);
        },
        isInCache:(state,action)=>{
            const key = action.payload;
            return key in state;
        }
    }
})

export const {addToCache,isInCache} = cacheSlice.actions;
export default cacheSlice.reducer;