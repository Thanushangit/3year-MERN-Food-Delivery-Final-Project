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
            return state.filter(item => item._id !== idToDelete);
        },
        resetAddItems(){
            return []
        }
    }

})

export const {addItem,deleteItem,resetAddItems}=AddItemsSlice.actions;
export default AddItemsSlice.reducer
