import React, { useEffect } from "react";
import './App.css';
import Navbar from "./components/Navbar";
import Landing from "./components/Landing";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Login from "./components/Login";
import Register from "./components/Register";
import Dashboard from "./components/dashboard/Dashboard";
// Redux
import { Provider } from "react-redux";
import store from "./store";
import setAuthToken from "./utils/setAuthToken";
import { loadUser } from "./actions/auth";

// Private Route
import PrivateRoute from "./components/routing/PrivateRoute";
import CreateProfile from "./components/profile/CreateProfile";


if(localStorage.token) {
  setAuthToken(localStorage.token);
}

function App() {

  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  return (

    <div className="app">

      <Provider store={store}>
      <Router>
        <Navbar/>
        <Routes>
          <Route exact path="/" element={<Landing/>} />

            <Route exact path="/login" element={<Login/>} />
            <Route exact path="/register" element={<Register/>} />

            <Route element={<PrivateRoute />}>
                <Route exact path="/dashboard" element={<Dashboard />} />
                <Route exact path="/create-profile" element={<CreateProfile />} />
            </Route>



        </Routes>  
      </Router>
      </Provider>

    </div>


  );
}

export default App;
