import React from "react";

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
                <tr>
                    <td><strong>Filmname</strong> </td>
                    <td>32.44€</td>
                </tr>
                <tfoot>
                    <td></td>
                    <td>32.44€</td>
                </tfoot>
              </table>
            <button className="btn buybtncolor pointer" onClick={this.props.addRow}>
              <img
                className=" pointer cardicon"
                src="/ticket icon.png"
                alt="delete"
              />
              <span className="white"><strong>Buy now</strong></span>
            </button>
          </div>
        </section>
      </div>
    );
  }
}
