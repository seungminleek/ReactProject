import React, { Component } from 'react';
import './App.css';
import './w3.css';
import ReactDOM from 'react-dom'
import LoginView from './View/LoginView'
// import admissionView from './View/admissionView'

class LoginContainer extends Component {
	constructor(props) {
		super(props);
		this.state = {
			style : {
				display: "block"
			}
		};

		// 콜백에서 `this`가 작동하려면 아래와 같이 바인딩 해주어야 합니다.
		// this.handleClick = this.handleClick.bind(this);
	}
	
	modalOpen() {
		ReactDOM.render(document.getElementById('id01').style.display='block');
		console.log("modal true" );
		// return "document.getElementById('id01').style.display='block'";
	}
	
  render() {

    return (
		<div class="w3-container">
			<LoginView />
			<button class="w3-button w3-white" onClick={this.modalOpen}> 
				modal</button>
			
			<div id="id01" class="w3-modal">
				<div class="w3-modal-content w3-card-4 w3-animate-zoom">
				<button class="w3-button w3-block w3-green w3-section w3-padding" onClick={this.modalOpen}>Owner</button>
	  			<button class="w3-button w3-block w3-blue w3-section w3-padding" onClick={this.modalOpen}>User</button>
				</div>
			</div>
		</div>
    );
  }
}

export default LoginContainer;
