import { configureStore } from "@reduxjs/toolkit";
import  toggleSlice  from "../features/toggleSlice";
import searchSlice from "../features/searchSlice";

const store=configureStore({
    reducer:{
        toggle:toggleSlice,
        search:searchSlice
    }
})

export default store;