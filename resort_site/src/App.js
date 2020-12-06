import React, { Component } from 'react'
import {HashRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import HomePage from './pages/Home';
import Rooms from './pages/Rooms';
import OneRoom from './pages/OneRoom';
import NotFound from './pages/NotFound';

import NavBar from './components/Navbar';
import ScrollToTop from './components/ScrollToTop';

import {RoomProvider} from './context';
import './App.css';

function App() {
  //Hash router had to be used instead of Browser router b/c of compatibility issues with GithubPages
  //If links do not match any of the below, will redirect to the not found page.
  return (
    <>
      <RoomProvider>
        <Router>
          <ScrollToTop />
          <NavBar />
          <Switch>
            <Route path='/' component={HomePage} exact />
            <Route path='/Rooms' component={Rooms} exact />
            <Route path='/Rooms/:RoomName' component={OneRoom} exact />
            <Route path='/NotFound' component={NotFound} exact/>
            <Redirect to='/NotFound' />
          </Switch>
        </Router>
      </RoomProvider>
    </>
  );
}

export default App;
