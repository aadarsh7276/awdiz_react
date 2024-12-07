// import { type } from '@testing-library/user-event/dist/type';
import React, { useContext } from 'react'
import { MyCounterContext } from '../Context/CounterContext';

const CounterContext = () => {
  const{state,dispatch}=  useContext(MyCounterContext);
  function Increment(){
    dispatch({type:"INCREMENT"})
  }
  function Decrement(){
    dispatch({type:"DECREMENT"})
  }
  function Reset(){
    dispatch({type:"RESET"})
  }
  return (
    <div>
      <h1>counter Context</h1>
    <h1>counter:{state.counter}</h1>
    <button onClick={Increment}>+</button>
    <button onClick={Decrement}>-</button>
    <button onClick={Reset}>Reset</button>
    </div>
  )
}

export default CounterContext;