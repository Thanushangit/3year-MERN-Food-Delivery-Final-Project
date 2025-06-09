import {configureStore} from '@reduxjs/toolkit';
import CounterReducer from '../Slices/CounterSlice';
import OrderReducer from '../Slices/OrderStatusSlice';
import AddItemReducer from '../Slices/AddItemsSlice';
import AddItemsWithQtyReducer from '../Slices/OrderItemsWithQty'
import loginStatusReducer from '../Slices/LoginConfirmation'
import setAdminLoginStatusReducer  from '../Slices/AdminLogin';

export const store = configureStore({
    devTools:true,
    reducer:{
        count:CounterReducer,
        orderStatus:OrderReducer,
        addItems:AddItemReducer,
        addItemsWithQty:AddItemsWithQtyReducer,
        loginStatus:loginStatusReducer,
        adminStatus:setAdminLoginStatusReducer,
       
    }
})