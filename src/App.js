import React from 'react';
import './App.css';
import Navbar from './Components/Navbar'
import Contact from './Views/Contact'
import Home from './Views/Home'
import Profile from './Views/Profile'
import Skills from './Views/Skills'
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route path="/Profile">
            <Profile/>
          </Route>
          <Route path="/Skills">
            <Skills/>
          </Route>
          <Route path="/Contact">
            <Contact/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
