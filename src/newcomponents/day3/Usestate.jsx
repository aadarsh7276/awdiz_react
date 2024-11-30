import { useState } from "react";
import { Router, useNavigate } from "react-router-dom";

function Usestate(){
    const router = useNavigate();
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
    function gotodynamicpage(){
        router(`/Dynamicrouting/${counter}`)
    }
    
    return(
        <div>
            <h1>counter:{counter}</h1>
            <button onClick={Incremnet}>+</button>
            <button onClick={Reset}>Reset</button>
            <button onClick={Decrement}>-</button>
            <button onClick={gotodynamicpage}>gotodynamicpage</button>
        </div>
    )
}
export default Usestate;