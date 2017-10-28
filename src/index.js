import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Apps from './Search';
import registerServiceWorker from './registerServiceWorker';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<Apps />, document.getElementById('root-two'));
registerServiceWorker();
