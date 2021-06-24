import React, { Component } from 'react';
// 이미지 아이콘:<img src="images/img_avatar4.png" class="w3-circle" />

class LoginView extends Component {
  render() {
	
    return (

	<div class="w3-section">
			 <form class="w3-container" action="admissionView.js">
	  <label><b>Username</b></label>
	  <input class="w3-input w3-border w3-margin-bottom" type="text" placeholder="Enter Username" name="usrname" required />
	  <label><b>Password</b></label>
	  <input class="w3-input w3-border" type="text" placeholder="Enter Password" name="psw"/>
	  <button class="w3-button w3-block w3-green w3-section w3-padding" type="submit">Login</button>
			</form> 
	  <input class="w3-check w3-margin-top" type="checkbox" checked="checked" /> Remember me	
        <button onClick="document.getElementById('id01').style.display='none'" type="button" class="w3-button">Cancel</button>
        <span class="w3-right">Forgot <a href="/">password?</a></span>
      </div>
			  
    );
  }
}

export default LoginView;