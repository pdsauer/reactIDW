import React from 'react';
import './reset.css';
import './main.css';
import './responsive.css';
import Checkout from './Components/checkout';
import MovieSelection from './Components/selection';
import SeatSelection from './Components/seat';
import TicketSelection from './Components/ticket';
import Cinema from './Components/cinema';
import API from './API';
import { Route, Link, Switch, BrowserRouter as Router } from 'react-router-dom'

class App extends React.Component {
  constructor(){
    super()
    this.state = { 
      filmname: 'Joker 3D',
      price: 9.80,
      count: 1,
      date: '24.02.2019'
     };
  }

  changeMovie = (name) => {
      this.setState({filmname: name});
      
  }
  changeCount = (count) => {
    this.setState({count: count});
    console.log('changed');
  }
  changeDate = (date) => {
    this.setState({date: date})
  
  }
  render() {

    return (
      <div>
             <Router>
        <nav>
          <div className="contentArea">
            <div id="logo">
              <h1 className="white"><strong>Cine</strong>Ticket</h1>
            </div>
          </div>
        </nav>
        <section id="content" className="contentArea flexer">
 
        <Switch>
            <Route exact path ="/" render={ () => 

                     <div className="flexer">
                        <div className="leftrow">

                            <MovieSelection changeMovie={this.changeMovie}/>
                            <SeatSelection changeCount={this.changeCount}/>
                            <TicketSelection filmname={this.state.filmname} price={this.state.price} count={this.state.count} date={this.state.date}/> 
                            <API/>
                        </div>
                        <div className="rightrow">
                            <Cinema/>
                        </div>
                      </div>


            } 
            />
            <Route path ="/checkout" render={() => <Checkout 
              name={this.state.filmname}
              date={this.state.date}
              count={this.state.count}
              price={this.state.price}
              /> } />


          </Switch>
         
        </section>
        </Router>
      </div>
    )
  }
}

export default App;
