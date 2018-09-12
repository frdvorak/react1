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
  deleteElement = (id) => {
      //console.log(id);
      let elements = this.state.elements.filter(element => {
        return element.id !== id;
      });
      this.setState({
        elements : elements
      })
  }
  componentDidMount(){
    console.log('component mounted')
  }
  componentDidUpdate(prevProps, prevState){
    console.log('component updated');
    console.log(prevProps, prevState);
  }
  render() {
    return (
      <div className="App">
        <h1>React app!</h1>
        <p>welcome</p>
        <Elements deleteElement={this.deleteElement} elements={this.state.elements} />
        < AddElement addElement={this.addElement}/>
        </div>
    );
  }
}

export default App;
