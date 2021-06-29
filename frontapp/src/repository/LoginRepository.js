// axios를 사용하려면 web pack을 설치해야할지도 모르겠음.. (devServerProperties 설정 필요)

import React, { Component } from 'react';
import axios from 'axios';

export default class LoginRepository extends Component {
	
	
	// get방식
	axios.get('/item').then((response) => response.data)
	.then((items) => items.map((item) => {
		console.log(item);
	}));


	// post방식
	const json = {
		id:"lee",
		pw:"1111"
	};
	axios.post('/item', json).then((response) => console.log(response.data)); 
	
}