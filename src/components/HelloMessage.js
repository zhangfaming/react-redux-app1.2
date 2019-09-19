/**
 * 
 * 带参数的组件传递
 */

import React from 'react';
// import ReactDOM from 'react-dom'
//我们可以使用函数定义了一个组件，返回一个hello word!
 function HelloMessage(props){
    return <h1>Hello {props.name}!</h1>;
 }

 // 定义一个常量，调用这个函数组件
//  const element = <HelloMessage name="Runoob"/>;
 
//组件渲染到指定元素下
//  ReactDOM.render(
//     element,
//     document.getElementById('end')
// );

export default HelloMessage 