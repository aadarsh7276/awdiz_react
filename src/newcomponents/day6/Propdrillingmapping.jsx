import React from 'react'

const Propdrillingmapping =({students,data})=>{
    return <div>{students.map((student)=>(
      <h2>{student}</h2>
    ))}
    <div style={{display:'flex',justifyContent:'space-around'}}>
    {data.map((product)=>(
      <div >
        <h2>name:{product.name}</h2>
        <h2>price:{product.price}</h2>
      </div>

    ))}</div>
    </div>
  }
export default Propdrillingmapping