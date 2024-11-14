import { useNavigate } from "react-router-dom";

function Home(){
    const router = useNavigate();
    function redirecttologinpage(){
        router("/login");
    };
    function redirecttoregisterpage(){
        router("/register");
    };
    function redirecttousestatepage(){
        router("/use-state");
    };
    return(
        <div>
        <h1>Home</h1>
        <button onClick={redirecttologinpage}>Go to login </button>
        <button onClick={redirecttoregisterpage}>Go to register </button>
        <button onClick={redirecttousestatepage}>Go to usestate</button>
        </div>
    )
    
}
export default Home;