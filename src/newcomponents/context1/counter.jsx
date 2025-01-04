import { createContext, useReducer } from "react";

export const CounterContext1 = createContext();
function reducer(state,action){
    switch(action.type){
        case "Increment":
            return{...state,counter:state.counter + 1};
        case "Decrement" :
                return {...state,counter:state.counter - 1};
        case "Reset":
                 return{...state,counter:0};
        default :
                return state
    }
}
const InitialState = {counter:1};
const ParentCounterContext1 = ({children})=>{
    const [state,dispatch]=useReducer(reducer,InitialState)
    return(
        <CounterContext1.Provider value={{state,dispatch}}>
            {children}
        </CounterContext1.Provider>
    );
}
export default ParentCounterContext1;