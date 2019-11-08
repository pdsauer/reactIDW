import React from 'react';
import ReactDOM from 'react-dom';

export default class Product extends React.Component{
    constructor(){
        super();
    }
    render(){
        return(<div><h1>Produkt component hier wuhu</h1><Test/></div>);
    }
}

class Test extends React.Component{
    constructor(){
        super();
    }
    render(){
        return(<div><h1>test text</h1></div>)
    }
}