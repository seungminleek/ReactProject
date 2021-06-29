import React, { Component } from 'react';
// import logo from './logo.svg';		// 기존 App.js
import './App.css';
import { Route } from 'react-router-dom';
// import { MyPageContainer, LoginContainer } from 'Container';
import MyPageContainer from 'Container/MyPageContainer';
import LoginContainer from 'Container/LoginContainer';
import MainContainer from 'Container/MainContainer';

class App extends Component {
  render() {
    return (
		
		<div>
			<Route exact path="/" component={LoginContainer}/>
			<Route path="/myPage" component={MyPageContainer}/>
			<Route path="/main" component={MainContainer}/>
			
		</div>
    );
  }
}

export default App;
