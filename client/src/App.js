import React, { useEffect } from "react";
import Navbar from "./components/Navbar";
import Landing from "./components/Landing";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Login from "./components/Login";
import Register from "./components/Register";
// Redux
import { Provider } from "react-redux";
import store from "./store";
import setAuthToken from "./utils/setAuthToken";
import { loadUser } from "./actions/auth";


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

        </Routes>  
      </Router>
      </Provider>

    </div>


  );
}

export default App;
