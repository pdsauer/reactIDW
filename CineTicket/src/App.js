import React from 'react';
import './reset.css';
import './main.css';
import MovieSelection from './Components/selection';
import MovieSelection from './Components/seat';

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
          <section className="headline">
            <h2>Choose your <span className="highlightWord">movie</span></h2>
          </section>

          <MovieSelection product={this.state.product}/>

          <section className="headline">
            <h2>Choose your <span className="highlightWord">seat</span></h2>
          </section>
          <section className="headline">
            <h2>Get your <span className="highlightWord">tickets</span></h2>
          </section>
        </section>
      </div>
    )
  }
}

export default App;
