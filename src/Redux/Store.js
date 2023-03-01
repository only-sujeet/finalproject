import { configureStore } from "@reduxjs/toolkit";
import adminSlice from "./Admin/AdminLogin"

const store = configureStore({
    reducer:{
        admin: adminSlice,
    }
})

export default store;