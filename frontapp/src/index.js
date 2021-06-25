import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import SideProjectContainer from './SideProjectContainer';
import SideProjectStore from './SideProjectStore';
import App from './App';
// import { Provider } from "mobx-react";

ReactDOM.render(<App />, document.getElementById('root'));  
// index.html에서 root라는 아이디로 작동한다


export {
    SideProjectContainer,
    SideProjectStore
}
