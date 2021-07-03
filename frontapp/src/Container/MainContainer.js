import React, { Component } from 'react';
import '../App.css';
import '../w3.css';
// import SideBar from '../View/SideBar'
// import { inject, observer } from 'mobx-react';
// import ReactDOM from 'react-dom'

// @inject('SideProjectStore')
// @observer
class MainContainer extends Component {
	constructor(props) {
		super(props);
		this.state = {
			session : {
				id:"123",
				pw:"****",
				info:"user"
			}
		};
	}

	

	
  render() {
	  
			// <a href="#">
			// 	<img src="/w3images/avatar_g2.jpg" style="width:65px;" class="w3-circle w3-right w3-margin w3-hide-large w3-hover-opacity">
			// 		</a>
	  			//<nav class="w3-sidebar w3-collapse w3-white w3-animate-left">
			//	<SideBar />
			//</nav>

    return (
		
		<div class="w3-main">

			<span class="w3-button w3-hide-large w3-xxlarge w3-hover-text-grey" onclick="w3_open()"><i class="fa fa-bars"></i></span>
			<div class="w3-margin-left w3-container">
				<h1><b>wsdl</b></h1>
				<div class="w3-section w3-bottombar w3-padding-16">
				  <span class="w3-margin-right">Filter:</span> 
				  <button class="w3-button w3-black">ALL</button>
				  <button class="w3-button w3-white"><i class="fa fa-diamond w3-margin-right"></i>Design</button>
				  <button class="w3-button w3-white w3-hide-small"><i class="fa fa-photo w3-margin-right"></i>Photos</button>
				  <button class="w3-button w3-white w3-hide-small"><i class="fa fa-map-pin w3-margin-right"></i>Art</button>
				</div>
			</div>
		</div>
    );
  }
}

export default MainContainer;
