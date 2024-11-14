import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./newcomponents/Home";
import Login from "./newcomponents/Login";
import Register from "./newcomponents/Register";
import Usestate from "./newcomponents/day3/Usestate";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/use-state" element={<Usestate/>} />
      </Routes>
    </div>
  );
}

export default App;
