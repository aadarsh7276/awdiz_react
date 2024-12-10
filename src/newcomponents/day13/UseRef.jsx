import React, { useRef } from 'react'

const UseRef = () => {
    let ref = useRef(10);
    // console.log(ref.current);
    function handleClick(){
        ref.current = ref.current + 1;
        console.log(ref.current,"ref.current");
        
    }
    console.log(" component reload");
    
  return (
    <div>
        <h1>UseRef:{ref.current}</h1>
        <button onClick={handleClick}>+</button>
        </div>
   
  )
}

export default UseRef;