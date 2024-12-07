import React, { memo } from 'react'

const ChildrenComponent = ({counter,Increment}) => {
    console.log("inside children component");
    
  return (
    <div>
        <h1>ChildrenComponent {counter}</h1>
    <button onClick={Increment}>+</button>
    </div>
  )
}

export default memo(ChildrenComponent);