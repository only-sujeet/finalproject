import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
// const URL = 'http://localhost:5000'

export const adminLogin = createAsyncThunk(
    'AdminLogin', async (admin) => {
        const response = await axios.post(`/api/admin/alogin`, admin)
        return response.data
    }
)
export const Loaduser = createAsyncThunk(
    'LoadUser', async (admin) => {
        const response = await axios.get(`/api/admin/profile`, admin)
        return response.data
    }
)

const adminSlice = createSlice({
    name: "admin",
    initialState: {
       
    },
    reducers: {},
    extraReducers: {
        [adminLogin.pending]: (state, action) => {
            state.loading = true;
            //  window.alert(action.payload.message);

        },
        [adminLogin.fulfilled]: (state, action) => {
            state.loading = false;
            state.admin.push(action.payload);
            // window.alert(action.payload.message);
            // console.log(action.payload.message)
        },
        [adminLogin.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload.error
            // window.alert(action.payload.message);

        },
        [Loaduser.pending]: (state, action) => {
            state.loading = true;
            state.isAuthenticated = false
            //  window.alert(action.payload.message);

        },
        [Loaduser.fulfilled]: (state, action) => {
            state.loading = false;
            state.isAuthenticated = true
            state.admin = action.payload
        },
        [Loaduser.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload.error
            state.isAuthenticated = false
            // window.alert(action.payload.message);

        },


    }
})

export default adminSlice.reducer;