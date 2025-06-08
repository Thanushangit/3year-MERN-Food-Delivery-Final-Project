import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    status: false
};
const LoginConfirmation = createSlice({
    name: "login_status",
    initialState,
    reducers: {
        setLoginStatus(state, action) {
            state.status = action.payload;
        }
    }
});

export const { setLoginStatus } = LoginConfirmation.actions;
export default LoginConfirmation.reducer;
