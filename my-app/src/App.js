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
        <Elements/>
      </div>
    );
  }
}

export default App;
