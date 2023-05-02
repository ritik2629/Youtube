import { configureStore } from "@reduxjs/toolkit";
import  toggleSlice  from "../features/toggleSlice";
import searchSlice from "../features/searchSlice";
import chatSlice from "../features/chatSlice";

const store=configureStore({
    reducer:{
        toggle:toggleSlice,
        search:searchSlice,
        chat:chatSlice
    }
})

export default store;