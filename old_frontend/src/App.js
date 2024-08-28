
import './App.css';
import Home from "./components/home";
import Profile from "./components/profile";
// import {createBrowserRouter,RouterProvider} from 'react-router-dom'

function App() {
  // const router=createBrowserRouter([
  //   {
  //     path:"/",
  //     element:<Home />
  //   },
  //   {
  //     path:"/profile",
  //     element:<Profile />
  //   },
    
  // ])
  return (
    <div className="App">
      <Home />
      <Profile />
      {/* <RouterProvider router={router}/> */}
    </div>
  );
}

export default App;
