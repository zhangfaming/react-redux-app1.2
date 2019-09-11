import ReactDOM from 'react-dom';
import React, { Component } from 'react';
import App from '../App.js'
class textCompent extends Component{

    render(){
      return(
         ReactDOM.render(<App /> , document.getElementById('root'))
      );
  
    }
  }
export  default textCompent
