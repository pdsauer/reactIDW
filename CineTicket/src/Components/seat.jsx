import React from 'react';
import ReactDOM from 'react-dom';

export default class MovieSelection extends React.Component {
    constructor(props) {
        super();

    }
    render() {
        return (<div id="cinema">
            <section className="headline">
                <h2>Choose your <span className="highlightWord">seat</span></h2>

            </section>
            <div className="description">
              <label htmlFor="rowDropdown">row</label>
              <label htmlFor="numberDropdown">number</label>

            </div>
            <section className="flexer">
                <div>
                  
                    <div className="select-wrapper">
                        <select name="rowDropdown" id="rowDropdown">
                            <option value="1">1</option>
                            <option value="2">2</option>
                    </select></div>
                </div>
                <div>
                   
                    <div className="select-wrapper">
                        <select name="numberDropdown" id="numberDropdown">
                            <option value="1">1</option>
                            <option value="2">2</option>
                    </select></div>
                </div>
                <div>

                </div>
                <div className="flex-center">
                    <img className="icon pointer" src="/minus icon.png" alt="delete" />
                </div>
            </section>

        </div>);
    }
}
