import React, { Suspense, lazy } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';


const SenateContainer = lazy(() => import('./Senate/SenateContainer'))
const HouseContainer = lazy(() => import('./House/HouseContainer'))
const BillsContainer = lazy(() => import('./Bills/BillsContainer'))
const RegisterToVote = lazy(() => import('./RegisterToVote'))
const NavBar = lazy(() => import('./NavBar'))
const Home = lazy(() => import('./Home/Home'))
const About = lazy(() => import('./About/About'))


function App() {
  return (
    <>
      <Router>
        <Suspense fallback = {<div>Loading ... </div>}>
          <NavBar />
            <Route exact path='/' component={Home} />
            <Route exact path='/senate' component={ SenateContainer }/>
            <Route exact path='/house' component={ HouseContainer } />
            <Route exact path='/bills' component={ BillsContainer } />
            <Route exact path='/vote' component={ RegisterToVote } />
            <Route exact path='/about' component={ About } />
        </Suspense>
      </Router>
    </>
  );
}

export default App;

// import React from 'react';
// import './App.css';
// import { BrowserRouter as Router, Route } from 'react-router-dom';
// import SenateContainer from './components/Senate/SenateContainer'
// import HouseContainer from './components/House/HouseContainer'
// import BillsContainer from './components/Bills/BillsContainer'
// import RegisterToVote from './components/RegisterToVote'
// import NavBar from './components/NavBar'
// import Home from './components/Home/Home'
// import About from './components/About/About'
//
//
// function App() {
//   return (
//     <>
//       <Router>
//         <div>
//           <NavBar />
//           <Route exact path='/' component={Home} />
//           <Route exact path='/senate' component={ SenateContainer }/>
//           <Route exact path='/house' component={ HouseContainer } />
//           <Route exact path='/bills' component={ BillsContainer } />
//           <Route exact path='/vote' component={ RegisterToVote } />
//           <Route exact path='/about' component={ About } />
//         </div>
//       </Router>
//     </>
//   );
// }
//
// export default App;
