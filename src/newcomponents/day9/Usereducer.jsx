import { type } from '@testing-library/user-event/dist/type';
import React, { useReducer } from 'react'

function Reduce(state,action){
    // state={counter:10} , action={type:"Increment"}
    console.log(state,action,"state,action");
    switch(action.type){
        case"Increment":
        return{...state,counter:state.counter + 1}
        case"Decrement":
        return{...state,counter:state.counter - 1}
        case"reset":
        return{...state,counter:10}
        default:
            return state
    }
    

}

const InitialState={ counter : 10,user:null}
const    Usereducer=()=> {
 const [state,dispatch]  = useReducer(Reduce,InitialState);
//  console.log(state,"state");
function Increment(){
    dispatch({type:"Increment"})
}
function Decrement(){
    dispatch({type:"Decrement"})
}
function reset(){
    dispatch({type:"reset"})
}
 
  return <div>
    <h1>Counter: {state.counter}</h1>
    <button onClick={Increment}>+</button>
    <button onClick={Decrement}>-</button>
    <button onClick={reset}>reset</button>
  </div>
}

export default Usereducer;