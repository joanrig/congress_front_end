import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import SenateContainer from './containers/SenateContainer'
import HouseContainer from './containers/HouseContainer'
import CandidatesContainer from './containers/CandidatesContainer'
import NavBar from './components/NavBar'
import Home from './components/Home'
import About from './components/About'




function App() {
  return (
    <>
      <Router>
        <div>
          <NavBar />
          <Route exact path='/' component={Home} />
          <Route exact path='/senate' component={SenateContainer}/>
          <Route exact path='/house' component={HouseContainer} />
          <Route exact path='/presidential-candidates' component={CandidatesContainer} />
          <Route exact path='/about' component={About} />
        </div>
      </Router>
    </>
  );
}

export default App;
