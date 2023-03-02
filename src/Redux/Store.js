import { configureStore } from "@reduxjs/toolkit";
import { AdminReducer } from "./Admin/AdminLogin"

const store = configureStore({
    reducer: {
        admin: AdminReducer,
    }
})

export default store;