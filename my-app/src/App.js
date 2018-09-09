import React, { Component } from 'react';
import Elements from './Elements';

class App extends Component {
  state = {
    elements : [
      { name: "Water", color: "blue", strength: 5, id: 1},
      { name: "Fire", color: "red", strength: 4, id: 2},
      { name: "Earth", color: "green", strength: 6, id: 3}
    ]
  }
  render() {
    return (
      <div className="App">
        <h1>React app!</h1>
        <p>welcome</p>
        <Elements elements={this.state.elements} />
        </div>
    );
  }
}

export default App;
