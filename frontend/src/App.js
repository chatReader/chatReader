import React from 'react';
import {BrowserRouter as Router, Route } from 'react-router-dom';

import './App.css';
import Chat from './Components/Chat';
import books from './dummyData';
import { LandingPage } from './Components/Landing';

function App() {
  return (
    <Router>
      <div className='App'>
        <Route exact path='/' component={LandingPage} />
        <Route path='/messenger' component={Chat}/>
      </div>
    </Router>
  );
}

export default App;
