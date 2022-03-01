import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home/home'
import './App.css';

const App = () =>{
  return(
    <Router>
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route exact path='/home' element={<Home/>}/>
        
      </Routes>
    </Router>

  );
}

export default App;
