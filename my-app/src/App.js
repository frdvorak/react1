import React, { Component } from 'react';
import Elements from './Elements';
import AddElement from './AddElement';

class App extends Component {
  state = {
    elements : [
      { name: "Water", color: "blue", strength: 5, id: 1},
      { name: "Fire", color: "red", strength: 4, id: 2},
      { name: "Earth", color: "green", strength: 6, id: 3}
    ]
  }
  addElement = (newlyCreatedElement) => {
      console.log(newlyCreatedElement);
      newlyCreatedElement.id = Math.random();
      let elements = [...this.state.elements, newlyCreatedElement];
      this.setState({
        elements: elements
      })
  }
  render() {
    return (
      <div className="App">
        <h1>React app!</h1>
        <p>welcome</p>
        <Elements elements={this.state.elements} />
        < AddElement addElement={this.addElement}/>
        </div>
    );
  }
}

export default App;
