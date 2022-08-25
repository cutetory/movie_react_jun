import React from 'react';
import Home from './routes/Home';
import './App.css';
import { HashRouter, Route } from 'react-router-dom';
import About from './routes/About';
import Navigation from './components/Navigation';
import Detail from './routes/Detail';

function App() {
  return (
    /* 2022-08-25  
      component아니고 element로 바꿔야하고 Routes 추가해야함.
      https://reactrouter.com/en/v6.3.0/api#routes 
    */
    <HashRouter>
      <Navigation />
      <Route path="/home" exact={true} component={Home} />
      <Route path="/about" exact={true} component={About} />
      <Route path="/movie-detail" component={Detail} />
    </HashRouter>
  );
}

export default App;