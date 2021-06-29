import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Root from './Root';
import registerServiceWorker from './registerServiceWorker';


// ReactDOM.render(<App />, document.getElementById('root'));  
ReactDOM.render(<Root />, document.getElementById('root')); 
// index.html에서 root라는 아이디로 작동한다
registerServiceWorker();


