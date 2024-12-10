import {configureStore} from "@reduxjs/toolkit"
import  CounterReducer from "../newcomponents/features/counter/CounterSlice"

export default configureStore({
    reducer:{
        counter: CounterReducer,
    }
})