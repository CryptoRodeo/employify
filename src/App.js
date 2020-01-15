import React from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router,Route} from "react-router-dom";

//Component imports
import Navbar from "./components/navbar";
import AppContainer from "./components/app-container";
import JobListing from "./components/job_listing_page";


function App() {
  return (
    <Router>
      {/**
       * Use React Portals for this component
       */}
      <Route 
          exact path="/listing" 
          component={JobListing}
          />
      <div id="main-container">
        <Navbar />
        <div id="job-container">
          <AppContainer />
        </div>
        <footer>
          <a href="https://github.com/cryptorodeo/employify" target="_blank">Github</a>
          <p><i>Make your move.</i></p>
          <p>© 2020 Employify inc. All rights reserved.</p>
       </footer> 
      </div> 
    </Router>
  );
}

export default App;
