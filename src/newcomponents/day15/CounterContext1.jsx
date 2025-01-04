import React from 'react'
import { Decrement, Increment, Reset } from '../features/counter/CounterSlice';

const CounterContext1 = () => {
    const {state,dispatch} = {CounterContext1}
    function Increment(){
        dispatch({type:"Increment"})
    }
    function Decrement(){
        dispatch({type:"Decrement"})
    }
    function Reset(){
        dispatch({type:"Reset"})
    }
  return (<>
    <h1>Counter:{state.counter}</h1>
    <button onClick={Increment}>+</button>
    <button onClick={Decrement}>-</button>
    <button onClick={Reset}>Reset</button>
    </>
  )
}

export default CounterContext1;