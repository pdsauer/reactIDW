import React from 'react';
import './reset.css';
import './main.css';

// function App() {
//   return (
//     <div className="App">
//       <h1>Hi</h1>
//     </div>
//   );
// }

class App extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div>
            <link rel="stylesheet" href="https://use.typekit.net/toh0amy.css" />

        <nav>
          <div class="contentArea">
            <div id="logo">
              <h1 class="white"><strong>Cine</strong>Ticket</h1>
            </div>
          </div>
        </nav>
        <section id="content" class="contentArea">
          <section class="headline">
            <h2>Choose your <span class="highlightWord">movie</span></h2>
          </section>

          <section id="movieSelect">

            <select name="movieDropdown" id="movieDropdown">
              <option value="Joker3D">Joker 3D</option>
            </select>

            <select name="movieDropdown" id="dateDropdown">
              <option value="Joker3D">08.11.2019</option>
            </select>
            <select name="movieDropdown" id="cinemaDropdown">
              <option value="Joker3D">Kino 09</option>
            </select>
          </section>
          <section class="headline">
            <h2>Choose your <span class="highlightWord">seat</span></h2>
          </section>
          <section class="headline">
            <h2>Get your <span class="highlightWord">tickets</span></h2>
          </section>
        </section>
      </div>
    )
  }
}

export default App;
