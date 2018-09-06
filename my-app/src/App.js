import React, { Component } from 'react';
import Elements from './Elements';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>React app!</h1>
        <p>welcome</p>
        <Elements name="Water" color="blue" strength="medium"/>
        <Elements name="Fire" color="red" strength="medium"/>
      </div>
    );
  }
}

export default App;
