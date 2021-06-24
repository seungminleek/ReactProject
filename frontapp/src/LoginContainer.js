import React, { Component } from 'react';
import './App.css';
import './w3.css';
import LoginView from './View/LoginView'
// import admissionView from './View/admissionView'

class LoginContainer extends Component {
	
	modalOpen() {
		console.log("modal true");
		return "document.getElementById('id01').style.display='block'";
	}
	
  render() {
    return (
		<div class="w3-container">
			<LoginView />
			<button class="w3-button w3-white" onClick={this.modalOpen}> 
				modal</button>
			
			<div id="id01" class="w3-modal">
				<div class="w3-modal-content w3-card-4 w3-animate-zoom">
				<button class="w3-button w3-block w3-green w3-section w3-padding" onClick="" >Owner</button>
	  			<button class="w3-button w3-block w3-blue w3-section w3-padding" onClick="" >User</button>
				</div>
			</div>
		</div>
    );
  }
}

export default LoginContainer;
