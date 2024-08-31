import Home from "./components/home";
import Signin from "./components/signin";
import Signup from "./components/signup";
import Profile from "./components/profile";

import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";

// Change

function App() {
  return (
    <>
      <Router>
        <div className="main">
          <div className="box"></div>
          <Header />
          <div className="App w-100" style={{position : "absolute", border : "0px solid red", height : "90%"}}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/SignIn" element={<Signin />} />
              <Route path="/SignUp" element={<Signup />} />
              <Route path="/Profile" element={<Profile />} />
            </Routes>
          </div>
        </div>
      </Router>
    </>
  );
}

export default App;
