import { createSlice } from "@reduxjs/toolkit";

const initialState={
    isMenuOpen:true,
    count:0
}

const toggleSlice=createSlice({
    name:'toggle',
    initialState,
    reducers:{
        toggleMenu:(state)=>{
            state.isMenuOpen=!state.isMenuOpen
        },
        closeMenu:(state)=>{
            state.isMenuOpen=false
        },
    }
})

export const {toggleMenu,closeMenu} =toggleSlice.actions
export default toggleSlice.reducer