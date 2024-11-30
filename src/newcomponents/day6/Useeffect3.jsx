import { useEffect, useState } from "react"

const Useeffect3 = ()=>{
    const [counter,setcounter] = useState(1);
    const [countersecond,setcountersecond] = useState(100);
    function Increment(){
        setcounter(counter + 1)
    }
    function Incrementsecond(){
        setcountersecond(countersecond + 1)
    }
    useEffect(() =>{
        alert("Inside Useeffect")
    },[countersecond,counter])

    return(
        <div>
            <h1>counter:{counter}</h1>
            <button onClick={Increment}>+</button>
            <h1>counter:{countersecond}</h1>
            <button onClick={Incrementsecond}>+</button>
        </div>
    )
}
export default Useeffect3