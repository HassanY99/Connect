import React from "react";
import Navbar from "./components/Navbar";
import Landing from "./components/Landing";
import {BrowserRouter as Router, Routes, Route, Switch} from 'react-router-dom';
import Login from "./components/Login";
import Register from "./components/Register";

function App() {
  return (

    <div className="app">

      <Router>
        <Navbar/>
        <Routes>
          <Route exact path="/" element={<Landing/>} />

            <Route exact path="/login" element={<Login/>} />
            <Route exact path="/register" element={<Register/>} />

        </Routes>  
      </Router>

    </div>


  );
}

export default App;
