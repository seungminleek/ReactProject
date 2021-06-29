import React, { Component } from 'react';
import '../App.css';
import '../w3.css';
// import { inject, observer } from 'mobx-react';
// import ReactDOM from 'react-dom'

// @inject('SideProjectStore')
// @observer
class MyPageContainer extends Component {
	constructor(props) {
		super(props);
		this.state = {
			session : {
				id:"123",
				pw:"",
				info:"user"
			}
		};
	}

	

	
  render() {
	  

    return (
		<div class="w3-container"> 
		</div>
    );
  }
}

export default MyPageContainer;
