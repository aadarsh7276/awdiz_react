import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./newcomponents/Home";
import Login from "./newcomponents/Login";
import Register from "./newcomponents/Register";
import Usestate from "./newcomponents/day3/Usestate";
import Usestatetwo from "./newcomponents/day5/Usestatetwo";
import Useeffect from "./newcomponents/day6/Useeffect";
import Useeffect3 from "./newcomponents/day6/Useeffect3";
import Dynamicrouting from "./newcomponents/day6/Dynamicrouting";
import Propdrillingmapping from "./newcomponents/day6/Propdrillingmapping";
import { useState } from "react";
import Fakeproducts from "./newcomponents/day8/fakeproducts";
import Dynamiccss from "./newcomponents/day9/Dynamiccss";
import Usereducer from "./newcomponents/day9/Usereducer";
import UseCallback from "./newcomponents/day12/UseCallback";
import CounterContext from "./newcomponents/day10/CounterContext";
import UseRef from "./newcomponents/day13/UseRef";
import ReduxCounter from "./newcomponents/day14/ReduxCounter";

function App() {
  const[students,setStudent] = useState(["rohit","rahul","virat"])
  const[data,setdata] = useState([{name:"Tshirt",image:"",price:"100"},
    {name:"Tshirt",image:"",price:"100"},
    {name:"Tshirt",image:"",price:"100"},
    {name:"Tshirt",image:"",price:"100"}
  ])
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/use-state" element={<Usestate/>} />
        <Route path="/use-state-2" element={<Usestatetwo/>} />
        <Route path="/use-effect" element={<Useeffect/>} />
        <Route path="/use-effect-3" element={<Useeffect3/>} />
        <Route path="/Dynamicrouting/:productId" element={<Dynamicrouting/>} />
        <Route path="/Prop-drilling-mapping" element={<Propdrillingmapping students={students} data={data}/>} />
        <Route path="/get-all-fake-products" element={<Fakeproducts/>} />
        <Route path="/dynamic-css" element={<Dynamiccss/>} />
        <Route path="/use-reducer" element={<Usereducer/>} />
        <Route path="/use-callback" element={<UseCallback/>} />
        <Route path="/counter-context" element={<CounterContext/>} />
        <Route path="/use-ref" element={<UseRef/>} />
        <Route path="/redux-counter" element={<ReduxCounter/>} />

    
      </Routes>
    </div>
  );
}

export default App;
