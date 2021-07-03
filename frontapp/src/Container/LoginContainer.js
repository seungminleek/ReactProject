import React, { Component } from 'react';
import '../App.css';
import '../w3.css';
import { inject, observer } from 'mobx-react';
// import LoginView from './View/LoginView'
// import admissionView from './View/admissionView'
// import ReactDOM from 'react-dom'
// 20210703

@inject('loginStore')
@observer
class LoginContainer extends Component {
	constructor(props) {
		super(props);
		
		// store 가져오기
		const { loginStore } = this.props;
		console.log("store테스트 " + loginStore.session.info);
		
		this.state = {
			style : {
				display: ""
			},
			session : {
				id:"123",
				pw:"",
				info:"user"
			}
		};
	}
	
	componentDidMount() {
		const { loginStore } = this.props;
		console.log("store테스트 " + loginStore.session.info);
	}
	
	// modalOpen = (props) => {
	// 	console.log("modal open" );
	// 	this.setState({style:{display: "block"}});
	// 	// return ReactDOM.render(document.getElementById('id01').style.display='block');
	// };
	
	/**
	 * changeSession 로그인 세션정보 변경
	 *
	**/
	changeSession = async(e) => {
		const value = e.target.value;
		const name = e.target.name;
		
		const { loginStore } = this.props;
		
		await loginStore.changeSession(name, value);
		
		// this.setState({session:{
		// 	...this.state.session,		// 다른 정보 기존 유지
		// 	[name]: value
		// }});
		await console.log("로그인정보세팅:" + loginStore.session.id + loginStore.session.info);
		
	};

	
  render() {
	  
	const info = this.props.loginStore.session.info;
	console.log("container 값:" + info);
	  
    return (
		<div class="w3-container">
			<div class="w3-section">
			<form class="w3-container" action="MyPageContainer.js">
				<label><b>Username</b></label>
				<input class="w3-input w3-border w3-margin-bottom" onChange={this.changeSession}
					type="text" placeholder="Enter Username" name="id" required />
				<label><b>Password</b></label>
				<input class="w3-input w3-border" onChange={this.changeSession} 
					type="text" placeholder="Enter Password" name="pw"/>

				<input
					class="w3-border w3-margin-top"
					type="radio"
					id="user"
					name="info"
					value="user"
					checked={info === "user" ? true : false}
					onChange={this.changeSession} />
				<label htmlFor="user" class="w3-margin-right"> User</label>
				 <input
					class="w3-border w3-margin-top"
					type="radio"
					id="owner"
					name="info"
					value="owner"
					checked={info === "owner" ? true : false}
					onChange={this.changeSession} />
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
