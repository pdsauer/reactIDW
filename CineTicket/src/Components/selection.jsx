import React from 'react';
import ReactDOM from 'react-dom';

export default class MovieSelection extends React.Component {
    constructor(props) {
        super();

    }
    render() {
        return (<div>
            <section className="headline">
                <h2>Choose your <span className="highlightWord">movie</span></h2>
            </section><section id="movieSelect">
                <select name="movieDropdown" id="movieDropdown">
                    <option value="Joker3D">Joker 3D</option>
                </select>
                <select name="movieDropdown" id="dateDropdown">
                    <option value="Joker3D">08.11.2019</option>
                </select>
                <select name="movieDropdown" id="cinemaDropdown">
                    <option value="Joker3D">Kino 09</option>
                </select>
            </section></div>);
    }
}