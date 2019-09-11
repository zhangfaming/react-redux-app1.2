import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import textCompent from './components/test.js';
// import App from  './App.js'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<textCompent />, document.getElementById('root'));

registerServiceWorker();
