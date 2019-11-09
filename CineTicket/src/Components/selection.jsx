import React from 'react';
import ReactDOM from 'react-dom';

export default class MovieSelection extends React.Component {
    constructor(props) {
        super();
        this.state ={"movie":""}

    }
    movieOnChange = (event) => {
        this.setState=({"movie": event.target.value});
        console.log(this.state);
    }
    absenden = (event) =>{
        event.preventDefault();
        console.log(this.state.movie);
    }

    render() {
        return (<div>
            <section className="headline">
                <h2>Choose your <span className="highlightWord">movie</span></h2>
            </section><section id="movieSelect">
            <form action="#" onSubmit={this.absenden}>
            <select name="movieDropdown"  onChange={this.movieOnChange}>
                    <option value="Joker3D">Joker 3D</option>
                    <option value="Joker">Joker</option>
                </select>
                <select name="movieDropdown" id="dateDropdown">
                    <option value="Joker3D">08.11.2019</option>
                </select>
                <select name="movieDropdown" id="cinemaDropdown">
                    <option value="Joker3D">Kino 09</option>
                </select>
                <button type="submit">Test Absenden</button>
                <input type="text"/>
            </form>
                
            </section></div>);
    }
}
