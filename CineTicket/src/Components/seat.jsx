import React from "react";
import ReactDOM from "react-dom";

export default class MovieSelection extends React.Component {
  constructor(props) {
    super();
    this.state = { rowcount: 1, html: ""};
  }

  addRow = () => {
    
    this.setState((state) => {
        return {rowcount: state.rowcount + 1}
    }, () => {
        this.reihen();
    });
    
  };
  removeRow = () => {
    
    this.setState((state) => {
        return {rowcount: state.rowcount - 1}
    }, ()=> {
        this.reihen();
    });
    
  }
  componentDidMount(){
      this.reihen();
  }
  reihen = () => {
      let rowarray = [];
      for(let i = 1; i <= this.state.rowcount; i++){
        rowarray.push(<InputRow removeRow={this.removeRow} counter={i} key={i} maxval={this.state.row}/>);
      }
      this.setState({'html':rowarray });
  }
  render() {
    return (
      <div id="cinema" className="component">
        <section className="headline">
          <h2>
            Choose your <span className="highlightWord">seat</span>
          </h2>
        </section>
        <div className="description">
          <label htmlFor="rowDropdown">row</label>
          <label htmlFor="numberDropdown">number</label>
        </div>
    
        {this.state.html}
        <AddButton addRow={this.addRow}  />
      </div>
    );
  }
}
class AddButton extends React.Component {
  render() {
    return (
      <div>
        <button className="btn addbtncolor pointer" onClick={this.props.addRow}>
          <img
            className=" pointer plusicon"
            src="/plus icon.png"
            alt="delete"
          />
          <span className="highlightWord">add seat</span>
        </button>
      </div>
    );
  }
}

class InputRow extends React.Component {
    constructor(props) {
        super();
        this.state = { value: ""};
      }
    componentDidMount(){
        if (1 !== this.props.counter){
            console.log("minus Button, counter: "+ this.props.counter);
            let value = <div className="flex-center">
            <img className="icon pointer" src="/minus icon.png" alt="delete" onClick={this.props.removeRow} />
            </div>;
            this.setState({"value":value});
            console.log(value);
        }
        
    }
    
    render(){
       return(<div className="flexer mb">
        <div>
          <div className="select-wrapper">
            <select name="rowDropdown" id="rowDropdown">
              <option value="1">A</option>
              <option value="2">B</option>
            </select>
          </div>
        </div>
        <div>
          <div className="select-wrapper">
            <select name="numberDropdown" id="numberDropdown">
              <option value="1">1</option>
              <option value="2">2</option>
            </select>
          </div>
        </div>
        {this.state.value}

        <div></div></div>);
    }
}
