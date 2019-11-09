import React from 'react';
import './reset.css';
import './main.css';
import MovieSelection from './Components/selection';
import SeatSelection from './Components/seat';
import TicketSelection from './Components/ticket';

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
        <section id="content" className="contentArea">
          <MovieSelection/>
          <SeatSelection/>
          <TicketSelection/> 
        </section>
      </div>
    )
  }
}

export default App;
