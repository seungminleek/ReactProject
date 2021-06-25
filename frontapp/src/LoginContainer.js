import React, { Component } from 'react';
import './App.css';
import './w3.css';
// import { inject, observer } from 'mobx-react';
// import LoginView from './View/LoginView'
// import admissionView from './View/admissionView'
// import ReactDOM from 'react-dom'

// @inject('SideProjectStore')
// @observer
class LoginContainer extends Component {
	constructor(props) {
		super(props);
		this.state = {
			style : {
				display: ""
			},
			session : {
				id:"",
				pw:"",
				info:"user"
			}
		};
	}
	
	modalOpen = (props) => {
		console.log("modal open" );
		this.setState({style:{display: "block"}});
		// return ReactDOM.render(document.getElementById('id01').style.display='block');
	};
	
	selectInfo = (e) => {
		console.log("modal touch" + e.name);
	};
	

	
  render() {
	  
	let info = this.state.session.info;
	const changeRadio = (e) => {
		this.setState({session:{info: e.target.value}});
		console.log(this.state.session);
	};

    return (
		<div class="w3-container">
			<div class="w3-section">
			<form class="w3-container" action="admissionView.js">
				<label><b>Username</b></label>
				<input class="w3-input w3-border w3-margin-bottom" type="text" placeholder="Enter Username" name="usrname" required />
				<label><b>Password</b></label>
				<input class="w3-input w3-border" type="text" placeholder="Enter Password" name="psw"/>

			<input
				class="w3-border w3-margin-top"
				type="radio"
				id="user"
				name="user"
				value="user"
				checked={info === "user" ? true : false}
				onChange={changeRadio} ></input>
			<label htmlFor="user" class="w3-margin-right"> User</label>
			 <input
				class="w3-border w3-margin-top"
				type="radio"
				id="owner"
				name="owner"
				value="owner"
				checked={info === "owner" ? true : false}
				onChange={changeRadio} ></input>
			<label htmlFor="owner" class="w3-margin-top"> Owner</label>
		
				<button class="w3-button w3-block w3-green w3-section w3-padding" type="submit">Login</button>
			</form> 
			<input class="w3-check w3-margin-top" type="checkbox" checked="checked" /> Remember me	
			<span class="w3-right">Forgot <a href="/">password?</a></span>
      	</div>
		</div>
    );
  }
}

export default LoginContainer;
