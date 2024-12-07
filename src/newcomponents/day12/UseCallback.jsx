import React, { Children, useCallback } from 'react'
import { useState } from 'react';
import ChildrenComponent from './ChildrenComponent';

const UseCallback = () => {
    const [counter,setcounter]= useState(1);
    const [secondcounter,setsecondcounter] = useState(10)
    // function Increment(){
    //     setcounter (counter + 1);
    // }
    const Increment = useCallback(()=>{
        setcounter (counter + 1)

    },[counter]);
    
    const Incrementsecondcounter = useCallback(()=>{
        setsecondcounter (secondcounter + 1)

    },[secondcounter])
  return (
    <div>
        <h1>counter:{counter}</h1>
        <button onClick={Increment}>+</button>
        <h1>secondcounter:{secondcounter}</h1>
        <button onClick={Incrementsecondcounter}>+</button>
        <ChildrenComponent Increment={Increment} counter={counter}/>

    </div>
  )
}

export default UseCallback;