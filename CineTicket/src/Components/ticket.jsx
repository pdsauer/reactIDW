import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export default class TicketSelection extends React.Component {

  


  render() {
    return (
      <div className="component">
        <section className="headline">
          <h2>
            Get your <span className="highlightWord">tickets</span>
          </h2>
          <div>
              <table id="paymenttable">
                <tbody>
                <tr>
                  <td>{this.props.count + 'x '}<strong>{this.props.filmname}</strong> </td>
                  <td>{(this.props.price).toFixed(2)} &euro;</td>
                </tr>
                </tbody>
                <tfoot>
                  <tr>
                    <td></td>
                  <td>{(this.props.count * this.props.price).toFixed(2)} &euro;</td>

                  </tr>
                </tfoot>
              </table>
            <button className="btn buybtncolor pointer" onClick={this.props.addRow}>
              <img
                className=" pointer cardicon"
                src="/ticket icon.png"
                alt="delete"
              />

                <Link to="/checkout"><span className="white"><strong>Buy now</strong></span></Link>

              
            </button>
          </div>
        </section>
      </div>
    );
  }
}
