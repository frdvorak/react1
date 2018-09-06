import React, { Component } from 'react';
import Elements from './Elements';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    elements : [
      { name: "Water", color: "blue", strenght: "0.5", id: 1},
      { name: "Fire", color: "red", strenght: "0.5", id: 2},
      { name: "Earth", color: "green", strenght: "0.5", id: 3}
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
