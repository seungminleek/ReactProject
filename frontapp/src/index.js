import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'mobx-react';
import './index.css';
import Root from './Root';
import * as registerServiceWorker from './registerServiceWorker';

import RootStore from './Store';

const root = new RootStore();

ReactDOM.render(
<Provider {...root}>
  <Root />
</Provider>
, document.getElementById('root'));

registerServiceWorker.unregister();





// ReactDOM.render(<App />, document.getElementById('root'));  
// ReactDOM.render(<Root />, document.getElementById('root')); 
// // index.html에서 root라는 아이디로 작동한다
// registerServiceWorker();


