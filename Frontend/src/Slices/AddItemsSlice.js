import { createSlice } from "@reduxjs/toolkit";

const initialState=[];

const AddItemsSlice=createSlice({

    name:"AddItemSlice",
    initialState,
    reducers:{
        addItem(state, action) {
            state.push(action.payload);
        },
        deleteItem(state, action) {
            const idToDelete = action.payload;
            return state.filter(item => item.id !== idToDelete);
            }

    }

})



export const {addItem,deleteItem}=AddItemsSlice.actions;
export default AddItemsSlice.reducer
