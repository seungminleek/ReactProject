import React, { Component } from 'react';
import './App.css';
import LoginView from './View/LoginView'

class LoginContainer extends Component {
  render() {
    return (
  <div class="w3-container">
	    <LoginView />
  </div>
    );
  }
}

export default LoginContainer;
