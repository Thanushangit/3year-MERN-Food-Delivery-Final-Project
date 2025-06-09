import { createSlice } from "@reduxjs/toolkit";

const initialState = { status: false };

const AdminLogin = createSlice({
    name: 'adminLogin',
    initialState,
    reducers: {
        setAdminLoginStatus(state, action) {
            state.status = action.payload;
        }
    }
});

export const { setAdminLoginStatus } = AdminLogin.actions;
export default AdminLogin.reducer;
