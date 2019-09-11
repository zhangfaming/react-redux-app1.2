import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import textCompent from './components/test.js';
// import App from  './App.js';
import List from './components/List.js'
import registerServiceWorker from './registerServiceWorker';
// import HelloWorld from '../src/components/HelloWorld.js'

ReactDOM.render(<List name={"菜鸟教程"} url={"http://www.runoob.com"} nickname={"Runoob"}/>, document.getElementById('root'));
// ReactDOM.render(<HelloWorld/>,
// 	    document.getElementById('example'));
registerServiceWorker();
