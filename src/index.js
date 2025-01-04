import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import Login from "./newcomponents/Login";
import Register from "./newcomponents/Register";
import ParentCounterContext from "./newcomponents/Context/CounterContext";
import { Provider } from "react-redux";
import store from "./app/store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <ParentCounterContext>
      <parentCounterContext1>
      <Provider store={store}>
      <App />
      </Provider>
      </parentCounterContext1>
      </ParentCounterContext>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
