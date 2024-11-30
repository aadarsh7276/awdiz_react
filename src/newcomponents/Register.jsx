import { useState } from "react";

function Register(){
    const [userData,setuserdata]=useState({username:'',userEmail:'',userpassword:"",userconfirmpassword:""});
    console.log(userData,"userData");
    
  async  function handleSubmit(event){
    
        if(
            !userData.username &&
            !userData.userEmail &&
            !userData.userpassword &&
            !userData.userconfirmpassword

        ){
            return alert("please fill all the fields.")
        }
        
    }
    function handleChange(event){
        console.log(event.target.value,event.target.name);
        setuserdata({...userData,[event.target.name]: event.target.value})
        
    }
    return(
        <div>
            <h1>Register:</h1>
            <form onSubmit={handleSubmit}>
                <label>Name:</label>
                <br/>
                <input name="username" onChange={handleChange} type="text"/>
                <br/>
                <label>Email:</label><br/>
                <input name="userEmail" onChange={handleChange} type="text"/>
                <br/>
                <label>Password:</label><br/>
                <input name="userPassword" onChange={handleChange} type="password"/>
                <br/>
                <label>Confirm Password:</label><br/>
                <input name="userconfirmpassword" onChange={handleChange} type="password"/>
                <br/>
                <input type="submit" value="Click to Register "/>
            </form>
        </div>
    )
}
export default Register;