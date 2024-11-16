import { useEffect, useState } from "react";
// import Usestate from "../day3/Usestate";

function Usestatetwo() {
    const [isUserLoggedIn, setIsuserLoggedIn] = useState(true)
    console.log(isUserLoggedIn,"isUserLoggedIn");

    function toggleLoginToFalse(){
        setIsuserLoggedIn(false);
    }
    function toggleLoginToTrue(){
        setIsuserLoggedIn(true);
    }
    function toggleeLogin(){
        setIsuserLoggedIn(!isUserLoggedIn)
    }
    useEffect(() => {
        alert("Hii")
    })
    // on initial page render
    // if any page changes then it will render 
    return(
        <div>
            {
            isUserLoggedIn ? (<div>
                <h1>Welcome! </h1>
                <button onClick={toggleeLogin}>Log Out</button>
                </div>) : 
                (<div>
                    <h1>Please Login</h1>
                    <button onClick={toggleeLogin}>Log In</button>
                    </div>)}
        </div>
    )
}

export default  Usestatetwo;
