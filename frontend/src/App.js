
import Home from './components/home';
import Signin from './components/signin';
import Signup from './components/signup';
import Profile from './components/profile';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from 'react-router-dom'


function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/signin' element={<Signin />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/signup' element={<Profile />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
