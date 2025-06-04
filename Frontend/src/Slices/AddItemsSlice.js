import { createSlice } from "@reduxjs/toolkit";

const initialState=[];

const AddItemsSlice=createSlice({

    name:"AddItemSlice",
    initialState,
    reducers:{
        addItem(state, action) {
            state.push(action.payload);
        }
    }

})



export const {addItem}=AddItemsSlice.actions;
export default AddItemsSlice.reducer
