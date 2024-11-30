import React, { useState } from 'react'
import './Dynamiccss.css';

function Dynamiccss() {
    const [isUserActive,setUSerActive]=useState(true);
    const styles=isUserActive?"active":"inactive";
    console.log(styles,"styles");
    function handleClick(){
        setUSerActive(!isUserActive)
    }
    
  return (
    <div>
        <button onClick={handleClick} className={styles}>{isUserActive?"active":"Inactive"}</button>
    </div>
  )
}

export default Dynamiccss;