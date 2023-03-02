// import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import axios from "axios";
// // const URL = 'http://localhost:5000'

// export const adminLogin = createAsyncThunk(
//     'AdminLogin', async (admin) => {
//         const response = await axios.post(`/api/admin/alogin`, admin)
//         return response.data
//     }
// )
// export const Loaduser = createAsyncThunk(
//     'LoadUser', async (admin) => {
//         const response = await axios.get(`/api/admin/profile`, admin)
//         return response.data
//     }
// )

// const adminSlice = createSlice({
//     name: "admin",
//     initialState: {
//        loading:false,
//        isAuthenticated:false,
//        admin:[],
//        error:null
//     },
//     reducers: {},
//     extraReducers: {
//         [adminLogin.pending]: (state, action) => {
//             state.loading = true;
//             state.isAuthenticated = false;

//         },
//         [adminLogin.fulfilled]: (state, action) => {
//             state.loading = false;
//             state.isAuthenticated = true;
//             state.admin.push(action.payload);
//         },
//         [adminLogin.rejected]: (state, action) => {
//             state.loading = false;
//             state.error = action.payload.error;

//         },
//         [Loaduser.pending]: (state, action) => {
//             state.loading = true;
//             state.isAuthenticated = false
//         },
//         [Loaduser.fulfilled]: (state, action) => {
//             state.loading = false;
//             state.isAuthenticated = true;
//              state.admin = action.payload;
//         },
//         [Loaduser.rejected]: (state, action) => {
//             state.loading = false;
//             state.error = action.payload
//             state.isAuthenticated = false


//         },


//     }
// })

// export default adminSlice.reducer;

import { createReducer } from "@reduxjs/toolkit";

const initialState = {}

export const AdminReducer = createReducer(initialState, {
    LoginRequest: (state, action) => {
        state.loading = true;
        state.isAuthenticated = false;
    },
    LoginSuccess: (state, action) => {
        state.loading = false;
        state.admin = action.payload
        state.isAuthenticated = true;
    },
    LoginFailure: (state, action) => {
        state.loading = false;
        state.error = action.payload;
        state.isAuthenticated = false;
    },

    LoadRequest: (state, action) => {
        state.loading = true;
        state.isAuthenticated = false
    },
    LoadSuccess: (state, action) => {
        state.loading = false;
        state.admin = action.payload;
        state.isAuthenticated = true;
    },
    LoadFailure: (state, action) => {
        state.loading = false;
        state.error = action.payload;
        state.isAuthenticated = false
    },
    TempEmployeeRequest: (state, action) => {
        state.loading = true;
       
    },
    TempEmployeeSuccess: (state, action) => {
        state.loading = false;
        state.admin = action.payload;
       
    },
    TempEmployeeFailure: (state, action) => {
        state.loading = false;
        state.error = action.payload;
       
    },
    CEmployeeRequest: (state, action) => {
        state.loading = true;
       
    },
    CEmployeeSuccess: (state, action) => {
        state.loading = false;
        state.admin = action.payload;
       
    },
    CEmployeeFailure: (state, action) => {
        state.loading = false;
        state.error = action.payload;
       
    },
    EmployeeRequest: (state, action) => {
        state.loading = true;
       
    },
    EmployeeSuccess: (state, action) => {
        state.loading = false;
        state.admin = action.payload;
       
    },
    EmployeeFailure: (state, action) => {
        state.loading = false;
        state.error = action.payload;
       
    },


});
