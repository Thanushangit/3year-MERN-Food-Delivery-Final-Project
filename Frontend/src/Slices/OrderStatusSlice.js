import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    orderStatus: "", }  //it pissibel "placed" "ontheway", "canceled", "delivered", " "


const orderStatusSlice = createSlice({
    name: "orderStatus",
    initialState,
    reducers: {
        setOrderStatus: (state, action) => {
            state.orderStatus = action.payload;
        }
    }
})


export const { setOrderStatus } = orderStatusSlice.actions;
export default orderStatusSlice.reducer;