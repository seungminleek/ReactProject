import React, { Component } from 'react';
import './App.css';
import ListView from './View/ListView'
import LoginView from './View/LoginView'

class SideProjectContainer extends Component {
  render() {
    return (
  <div class="w3-container">
	    <LoginView />
        <ListView />
  </div>
    );
  }
}

export default SideProjectContainer;
