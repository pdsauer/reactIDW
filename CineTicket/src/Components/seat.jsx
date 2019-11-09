import React from 'react';
import ReactDOM from 'react-dom';

export default class MovieSelection extends React.Component {
    constructor(props) {
        super();

    }
    render() {
        return (<div>
            <section className="headline">
                <h2>Choose your <span className="highlightWord">seat</span></h2>
            </section>
        </div>);
    }
}
