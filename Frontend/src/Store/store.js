import {configureStore} from '@reduxjs/toolkit';
import CounterReducer from '../Slices/CounterSlice';


export const store = configureStore({
    devTools:true,
    reducer:{
        count:CounterReducer
    }
})