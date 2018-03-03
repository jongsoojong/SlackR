import React, { Component } from 'react';
import Timer from './Components/Timer-Component.js';
import CookieClicker from './Components/Cookie-Clicker.js';
import Youtube from './Components/Youtube-Component.js';
import './App.css';
import axios from 'axios';

class App extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
    
    }
  }

  componentDidMount() {
  }

  getUsers = () => {
    axios.get('/retrieveUsers', {
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  addUserToUsersTable = () => {
    axios.post('/createUser', {
      firstname: 'Kelly',
      lastname: 'Gilliam'
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  verifyUser = () => {
    axios.post('/verifyUser', {
      firstnameToVerify: 'Kelly',
      lastnameToVerify: 'Gilliam'
    })
    .then(function (response) {
      console.log('USER VERIFIED!', response);
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  render() {
    return (
      <div className="App">
        <Timer/>
        <CookieClicker/>
        <Youtube />
      </div>
    );
  }
}

export default App;
