import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

/**
	* Router 역할
	*
**/
const Root = () => (
    <BrowserRouter>
        <App/>
    </BrowserRouter>
);

export default Root;