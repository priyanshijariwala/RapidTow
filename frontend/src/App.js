
import Home from './components/home';
import Signin from './components/signin';
import Signup from './components/signup';
import Profile from './components/profile';

import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom'
import Header from './components/Header';


function App() {
  return (
    <>
      <Router>
        <Header />
        <div className="App">
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/signin' element={<Signin />} />
            <Route path='/signup' element={<Signup />} />
            <Route path='/Profile' element={<Profile />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
