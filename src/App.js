import React, { Component } from 'react';
import Navbar from './Components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'; 
import './App.css';
import Home from './Components/pages/Home'
import signUp from './Components/pages/signup';
import Residences from './Components/pages/Residences';
import contactUs from './Components/pages/contactUs';



function App() {
  return (
    <>
      <Router>
        <Navbar/>
        <Switch>
          <Route path='/residences' component={Residences}/>
          <Route path='/' exact component={Home}/>
          <Route path='/contactus' component={contactUs}/>
          <Route path='/sign-up' component={signUp}/>
        </Switch>
      </Router>
    </>
  );
}

export default App;
