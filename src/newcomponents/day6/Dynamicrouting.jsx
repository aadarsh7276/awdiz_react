import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'

const Dynamicrouting = () => {
    const {productId }= useParams();
    useEffect(()=>{
        if(productId){
            
        }
    },[productId])
  return (
    <div>Dynamicrouting-{productId}</div>
  )
}

export default Dynamicrouting