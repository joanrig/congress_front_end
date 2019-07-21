import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Congress from './containers/Congress'
import SenatorsList from './components/SenatorsList'
import RepsList from './components/RepsList'
import NavBar from './components/NavBar'
import Home from './components/Home'




function App() {
  return (
    <>
      <Router>
        <div>
          <NavBar />
          <Route exact path='/'  component={Home} />
          <Route exact path='/senate' component={SenatorsList}/>
          <Route exact path='/house' component={RepsList} />
        </div>
      </Router>
    </>
  );
}

export default App;
