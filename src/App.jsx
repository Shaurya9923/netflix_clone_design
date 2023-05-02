import React from 'react';
import Home from './pages/home/Home';
import './app.scss';
import Watch from './pages/watch/Watch';
import{BrowserRouter as Router,Routes,Route,Link} from "react-router-dom";
import Register from './pages/register/register';
import Login from './pages/login/login';
const App = () => {

  return(
    <Router>

      <Routes>
            <Route path='/' exact element={<Login/>} />
            <Route path='/watch' exact element={<Watch/>} />
      </Routes>
        {/* <Home/> */}
    </Router>
    ) 
};

export default App;