
import React from 'react';

function Name(props){
    return <h1>网站名称：{props.name}</h1>;
}


function Url(props) {
    return <h1>网站地址：{props.url}</h1>;
}

function Nickname(props) {
    return <h1>网站小名：{props.nickname}</h1>;
}


function Complex(){
    return (
        <div>
            <Name name='菜鸟教程'></Name>
            <Url url = 'www.baidu.com'></Url>
            <Nickname nickname='校长'></Nickname>
        </div>

    );
}

export default Complex
