import React from 'react';
import ReactDOM from 'react-dom';


class Clock extends React.Component {
    render() {
      var style1 ={
        fontSize: 100,
        color: '#FF0000'
      }  
      return (
        <div>
          <h2 style={style1}>现在是 {this.props.date}</h2>
        </div>
      );
    }
  }
   
  function tick() {
   
    ReactDOM.render(
     
      <Clock date={new Date().toLocaleTimeString()} />,
      document.getElementById('context')
    );
 
  }
   
  setInterval(tick, 1000);


  export default Clock