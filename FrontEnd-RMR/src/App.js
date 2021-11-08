import React from 'react';
import Navbar from './Components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'; 
import './App.css';
import Home from './Components/pages/Home'
import signUp from './Components/pages/signup';
import Residences from './Components/pages/Residences';
import contactUs from './Components/pages/contactUs';
import CardItem from './Components/CardItem';
import TotemPark from './Pages/TotemPark/TotemPark';
import Cards from './Components/Cards';


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
          <Route path='/totempark' component={TotemPark} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
