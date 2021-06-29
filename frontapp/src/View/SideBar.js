import React, { Component } from 'react';
import '../App.css';
import '../w3.css';
// import { inject, observer } from 'mobx-react';
// import ReactDOM from 'react-dom'

// @inject('SideProjectStore')
// @observer
class SideBar extends Component {
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
	  
		// <!-- <img src="/w3images/avatar_g2.jpg" style="width:45%;" class="w3-round"/><br /><br/> -->
	  

    return (
	  
	<div class="w3-container">
		<a href="#" onclick="w3_close()" class="w3-hide-large w3-right w3-jumbo w3-padding w3-hover-grey" title="close menu" >
		  <i class="fa fa-remove"></i>
		</a>
		<h4>img</h4>
		<h4><b>PORTFOLIO</b></h4>
		<p class="w3-text-grey">Template by W3.CSS</p>
	  
	  <div class="w3-bar-block">
		<a href="#portfolio" onclick="w3_close()" class="w3-bar-item w3-button w3-padding w3-text-teal"><i class="fa fa-th-large fa-fw w3-margin-right"></i>PORTFOLIO</a> 
		<a href="#about" onclick="w3_close()" class="w3-bar-item w3-button w3-padding"><i class="fa fa-user fa-fw w3-margin-right"></i>ABOUT</a> 
		<a href="#contact" onclick="w3_close()" class="w3-bar-item w3-button w3-padding"><i class="fa fa-envelope fa-fw w3-margin-right"></i>CONTACT</a>
	  </div>,
	  <div class="w3-panel w3-large">
		<i class="fa fa-facebook-official w3-hover-opacity"></i>
		<i class="fa fa-instagram w3-hover-opacity"></i>
		<i class="fa fa-snapchat w3-hover-opacity"></i>
		<i class="fa fa-pinterest-p w3-hover-opacity"></i>
		<i class="fa fa-twitter w3-hover-opacity"></i>
		<i class="fa fa-linkedin w3-hover-opacity"></i>
	  </div>				
	</div>
    );
  }
}

export default SideBar;
