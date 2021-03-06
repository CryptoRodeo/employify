import React from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router,Route} from "react-router-dom";

//Component imports
import Navbar from "./components/navbar";
import AppContainer from "./components/app-container";
import JobListing from "./components/job_listing_page";
import Footer from "./components/footer";


function App() {
  return (
    <Router>
      <Route 
          exact path="/listing" 
          component={JobListing}
          />
      <div id="main-container">
        <Navbar />
        <div id="job-container">
          <AppContainer/>
        </div>

        <Footer />
      </div> 

    </Router>

  );
}

export default App;
