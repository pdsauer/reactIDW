import React from 'react';
import axios from 'axios';

export default class API extends React.Component{
    constructor(){
        super();
        this.state = {
            results: {}
        }
    }
    componentDidMount(){
        
        // localhost:8000/public/api.php?i=movies'

            axios.get('http://quotes.rest/qod.json').then(
                (response) => {
                    this.setState({results: {qoute: response.data.contents.quotes[0].quote}})
                    });       
        }
    render(){
        
        return (<h1>{this.state.results.qoute}</h1>)
    }

}