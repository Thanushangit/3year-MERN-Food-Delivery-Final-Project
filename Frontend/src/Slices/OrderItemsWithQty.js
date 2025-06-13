import { createSlice } from "@reduxjs/toolkit";
const initialState = [];
const OrderItemsWithQty = createSlice({
  name: 'OrderItemsWithQty',
  initialState,
  reducers: {
    addItemsWithQty(state, action) {
      const index = state.findIndex(item => item._id === action.payload._id);
      if (index !== -1) {
        state[index].Qty = action.payload.Qty;
      } else {
        state.push(action.payload);
      }
    },
    deleteItemsWithQty(state, action) {
      const idToDelete = action.payload;
      return state.filter(item => item._id !== idToDelete);
    },
    resetOrderItemQty(){
      return []
    }
  }
});

export const { addItemsWithQty, deleteItemsWithQty,resetOrderItemQty} = OrderItemsWithQty.actions;
export default OrderItemsWithQty.reducer;
