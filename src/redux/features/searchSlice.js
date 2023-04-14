import { createSlice } from "@reduxjs/toolkit";

const initialState={
    searchCache:{}
}


const searchSlice=createSlice({
    name:'search',
    initialState,
    reducers:{
        cacheResults:(state,action)=>{
            state.searchCache={...action.payload,...state}
        }
    }
})

export const {searchCache} =searchSlice.actions
export default searchSlice.reducer