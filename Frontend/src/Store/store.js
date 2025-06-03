import {configureStore} from '@reduxjs/toolkit';
import CounterReducer from '../Slices/CounterSlice';
import OrderReducer from '../Slices/OrderStatusSlice'


export const store = configureStore({
    devTools:true,
    reducer:{
        count:CounterReducer,
        orderStatus:OrderReducer
        
    }
})