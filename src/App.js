import React from "react";
import logo from "./logo.svg";
import "./App.css";
import OpenTimeDeposit from "./components/timedeposit/pages/opentimedepositaccount";
import "bootstrap/dist/css/bootstrap.css";
import "font-awesome/css/font-awesome.css";

function App() {
  return (
    <div className="App">
      <OpenTimeDeposit />
    </div>
  );
}

export default App;
