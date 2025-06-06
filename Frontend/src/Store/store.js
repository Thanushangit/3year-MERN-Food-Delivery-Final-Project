import {configureStore} from '@reduxjs/toolkit';
import CounterReducer from '../Slices/CounterSlice';
import OrderReducer from '../Slices/OrderStatusSlice';
import AddItemReducer from '../Slices/AddItemsSlice';
import AddItemsWithQtyReducer from '../Slices/OrderItemsWithQty'



export const store = configureStore({
    devTools:true,
    reducer:{
        count:CounterReducer,
        orderStatus:OrderReducer,
        addItems:AddItemReducer,
        addItemsWithQty:AddItemsWithQtyReducer
       
    }
})