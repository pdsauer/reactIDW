import React from 'react';
import ReactDOM from 'react-dom';

export default class MovieSelection extends React.Component {
    constructor(props) {
        super();
    }
    movieOnChange = (event) => {

        this.props.changeMovie(event.target.value);
        //console.log(this.state.bestellung);
    }

    dateOnChange = (event) => {
        this.props.changeDate(event.target.value);
    }
    cinemaOnChange = (event) => {
        this.props.changeCinema(event.target.value);
    }
    absenden = (event) => {
        event.preventDefault();
        console.log(this.state.bestellung);
    }
    componentDidMount() {

    }
    render() {
        return (<div className="component">
            <section className="headline">
                <h2>Choose your <span className="highlightWord">movie</span></h2>
            </section><section id="movieSelect">
                <div className="select-wrapper mb">

                    <select name="movie" onChange={this.movieOnChange}>
                        <option value="Joker3D">Joker 3D</option>
                        <option value="Joker">Joker</option>
                    </select>

                </div>
                <div className="select-wrapper mb">

                    <select name="date" onChange={this.dateOnChange}>
                        <option value="08.11.2019">08.11.2019</option>
                        <option value="12.11.2019">12.11.2019</option>
                    </select>

                </div>
                <div className="select-wrapper mb">

                    <select name="cinema" onChange={this.cinemaOnChange}>
                        <option value="Kino 09">Kino 09</option>
                        <option value="Kino 12">Kino 12</option>
                    </select>

                </div>
            </section></div>);
    }
}
