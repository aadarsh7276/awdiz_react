import { useState } from "react";

function Usestate(){
    const [counter,setcounter] = useState(1);
    console.log(counter,"counter");
    function Incremnet(){
        setcounter(counter + 1)

    }
    function Decrement(){
        setcounter(counter-1)

    }
    function Reset(){
        setcounter(1)
    }
    
    return(
        <div>
            <h1>counter:{counter}</h1>
            <button onClick={Incremnet}>+</button>
            <button onClick={Reset}>Reset</button>
            <button onClick={Decrement}>-</button>
        </div>
    )
}
export default Usestate;