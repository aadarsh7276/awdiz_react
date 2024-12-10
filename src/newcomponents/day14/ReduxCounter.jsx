import React from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { Increment,Decrement,Reset } from '../features/counter/CounterSlice';


const ReduxCounter = () => {
    const dispatch = useDispatch();
    const counter = useSelector((state)=>state.counter.counter)
  return (
    <div>
        <h1>ReduxCounter :{counter}</h1>
        <button onClick={()=> dispatch(Increment())}>+</button>
        <button onClick={()=>dispatch(Decrement())}>-</button>
        <button onClick={()=>dispatch(Reset())}>Reset</button>
    </div>
  )
}

export default ReduxCounter