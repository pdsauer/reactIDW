import React from 'react';
import './reset.css';
import './main.css';
import './responsive.css';
import MovieSelection from './Components/selection';
import SeatSelection from './Components/seat';
import TicketSelection from './Components/ticket';
import Cinema from './Components/cinema';
import API from './API';

class App extends React.Component {
  constructor() {
    super();
    this.state = { tickets: {filmname: 'Joker 3D', price: 9.80, count: 4, date: '24.02.2019'} };
  }

  changeMovie = (name) => {
    //this.setState({tickets: {filmname: name}});
  }
  changeCount = (count) => {
    // this.setState({tickets: {count: count}});
  }
  changeDate = (date) => {
    // this.setState({tickets: {count: date}})
  }
  render() {
    return (
      <div>
        <nav>
          <div className="contentArea">
            <div id="logo">
              <h1 className="white"><strong>Cine</strong>Ticket</h1>
            </div>
          </div>
        </nav>
        <section id="content" className="contentArea flexer">
        <div className="leftrow">
           <MovieSelection changeMovie={this.changeMovie()}/>
          <SeatSelection changeCount={this.changeCount()}/>
          <TicketSelection filmname={this.state.tickets.filmname} price={this.state.tickets.price} count={this.state.tickets.count} date={this.state.tickets.date}/> 
          <API/>
          </div>
          <div className="rightrow">
          <Cinema/>
          </div>
          
         
        </section>
      </div>
    )
  }
}

export default App;
