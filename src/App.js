import React from 'react';
import Home from './routes/Home';
import './App.css';
import { HashRouter, Routes, Route } from 'react-router-dom';
import About from './routes/About';

function App() {
  return (
  /* 2022-08-25  
    component아니고 element로 바꿔야하고 Routes 추가해야함.
    https://reactrouter.com/en/v6.3.0/api#routes 
  */
    <HashRouter>
      <Routes>
        <Route path="/home" exact={true} element={<Home />} />
        <Route path="/home/introduction" exact={true} element={<h1>introduction</h1>} />
        <Route path="/about" exact={true} element={<About />} />
      </Routes>
    </HashRouter>
  );
}

export default App;