import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import textCompent from './components/test.js';
// import App from  './App.js';
//import List from './components/List.js'
import registerServiceWorker from './registerServiceWorker';
import Clock from './components/Clock';
import Complex from './components/Complex';
//import HelloMessage from './components/HelloMessage';
// import HelloWorld from '../src/components/HelloWorld.js'

//ReactDOM.render(<List name={"菜鸟教程"} url={"http://www.runoob.com"} nickname={"Runoob"}/>, document.getElementById('root'));
// ReactDOM.render(<HelloWorld/>,
// 	    document.getElementById('example'));
const element = <h1>Hello, world!</h1>;
ReactDOM.render(
    element,
    document.getElementById('root')
);
ReactDOM.render(<Clock/>,document.getElementById('context'));
//ReactDOM.render(<HelloMessage name="Runoob"/>,document.getElementById('end'));
ReactDOM.render(<Complex />, document.getElementById('end'));


registerServiceWorker();
