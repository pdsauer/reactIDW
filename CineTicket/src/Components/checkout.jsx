import React from 'react';


export default class Checkout extends React.Component{

    render(){

        return(
            <div>
                <h1>Checkout</h1>
                <p>Your Movie <span className="highlightWord">{this.props.name}</span></p>
                <p>Date: <span className="highlightWord">{this.props.date}</span></p>
        <p>Tickets: <span className="highlightWord">{this.props.count}</span></p>
                
        <p>Total Price: <span className="highlightWord">{(this.props.price * this.props.count).toFixed(2) } &euro;</span></p>
            </div>
            
        )
    }
}