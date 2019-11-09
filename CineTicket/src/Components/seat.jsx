import React from 'react';
import ReactDOM from 'react-dom';

export default class MovieSelection extends React.Component {
    constructor(props) {
        super();
        this.state = {rowcount: 1};
    }

    addRow = () => {
        this.state.row_count ++;
    }
    render() {
        return (<div id="cinema" className="component">
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
            <AddButton />
        </div>);
    }
}
class AddButton extends React.Component {
    constructor() {
        super();
    }
    render() {
        return (<div><button class="addbtn pointer">
        <img className=" pointer plusicon" src="/plus icon.png" alt="delete" />
        <span className="highlightWord">add seat</span></button></div>)
    }
}