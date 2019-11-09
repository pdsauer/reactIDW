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

            <section className="flexer">  
                <div>      
                    <label htmlFor="rowDropdown">row</label>
                    <select name="rowDropdown" id="rowDropdown">
                        <option value="1">1</option>
                        <option value="2">2</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="numberDropdown">number</label>
                    <select name="numberDropdown" id="numberDropdown">
                        <option value="1">1</option>
                        <option value="2">2</option>
                    </select>
                </div>
                <div>
                    
                </div>
            </section>

        </div>);
    }
}
