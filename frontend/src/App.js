import Home from "./components/home";
import Signin from "./components/signin";
import Signup from "./components/signup";
import Profile from "./components/profile";
import Book from "./components/Book";
import Receipt from "./components/Receipt";
import UserDetails from "./components/UserDetails";
import VehicleDetails from "./components/VehicleDetails";
import Help from './components/Help';
import Feedback from './components/Feedback';
import ChangePassword from './components/ChangePassword';
import Admin_Signin from "./components/Admin_Signin";
import Admin_Home from "./components/Admin_Home"
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



function App() {
  return (
    <>
      <Router>
        <div className="main">
          <div className="box"></div>
          <Header />
          <div className="App w-100" style={{ position: "absolute", border: "0px solid red", height: "90%" }}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/SignIn" element={<Signin />} />
              <Route path="/SignUp" element={<Signup />} />
              <Route path="/Profile" element={<Profile />} />
              <Route path="/Book" element={<Book />} />
              <Route path="/Receipt" element={<Receipt />} />
              <Route path='/UserDetails' element={<UserDetails />} />
              <Route path='/VehicleDetails' element={<VehicleDetails />} />
              <Route path='/ChangePassword' element={<ChangePassword />} />
              <Route path='/Help' element={<Help />} />
              <Route path='/Feedback' element={<Feedback />} />
              <Route path='/Admin_Signin' element={<Admin_Signin />} />
              <Route path='/Admin_Home' element={<Admin_Home />} />

            </Routes>
              <ToastContainer />
          </div>
        </div>
      </Router>
    </>
  );
}

export default App;
