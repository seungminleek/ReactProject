import React, { Component } from 'react';

class LoginView extends Component {
  render() {
    return (

	<div class="w3-section">
	  <label><b>Username</b></label>
	  <input class="w3-input w3-border w3-margin-bottom" type="text" placeholder="Enter Username" name="usrname" required />
	  <label><b>Password</b></label>
	  <input class="w3-input w3-border" type="text" placeholder="Enter Password" name="psw"/>
	  <button class="w3-button w3-block w3-green w3-section w3-padding" type="submit">Login</button>
	  <input class="w3-check w3-margin-top" type="checkbox" checked="checked"/>Remember me	
        <button onclick="document.getElementById('id01').style.display='none'" type="button" class="w3-button">Cancel</button>
        <span class="w3-right">Forgot <a href="/">password?</a></span>
      </div>
			  
    );
  }
}

export default LoginView;