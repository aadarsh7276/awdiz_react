import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Fakeproducts = () =>{
  const [products,setallproducts]= useState([]);
  console.log(products,"products");
  
 async function apiCallToGetFakeProducts(){
  try{
    const responce = await axios.get("https://fakestoreapi.com/products");
    // console.log(responce.data,"responce");
    setallproducts(responce.data)

  }catch(error){
    console.log(error);
    
  }

  }
  useEffect(()=>{
    apiCallToGetFakeProducts()
  },[])

  return(
    <div>
      <div style={
        {display:'flex',
          justifyContent:'space-around',
          flexWrap:'wrap',
          border:"1px solid red",
        }
      }>
        {products.map((product)=>(
          <div style={{
            height:"350px",
            width:"18%",
            border:"1px solid black",
            marginBottom:"20px",
          }}>
            <img style={{height:"50%",width:"100%"}} src={product.image} />
            <h2>Name:{product.title}</h2>
            <h4>Price:{product.price}</h4>
          </div>
        ))}

      </div>
    </div>
  )

}

export default Fakeproducts;