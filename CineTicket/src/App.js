import React from 'react';
import './reset.css';
import './main.css';
import './responsive.css';
import MovieSelection from './Components/selection';
import SeatSelection from './Components/seat';
import TicketSelection from './Components/ticket';
import Cinema from './Components/cinema';

class App extends React.Component {
  constructor() {
    super();
    this.state = { product: { name: "Nicht Paul", preis: 3 } };
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
           <MovieSelection/>
          <SeatSelection/>
          <TicketSelection/> 
          
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
