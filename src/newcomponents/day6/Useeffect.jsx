import { useEffect, useState } from "react"

const Useeffect = ()=>{
    const [counter,setcounter] = useState(1);
    function Increment(){
        setcounter(counter + 1)
    }
    function Decrement(){
        setcounter(counter - 1)
    }
    useEffect(() =>{
        alert("Inside Useeffect")
    },[])

    return(
        <div>
            <h1>counter:{counter}</h1>
            <button onClick={Increment}>+</button>
            <button onClick={Decrement}>-</button>
        </div>
    )
}
export default Useeffect